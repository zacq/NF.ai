// Shared helper: Airtable + PayHero access, used by initiate-payment, payhero-webhook, and payhero-poller.
const AIRTABLE_TOKEN = process.env.AIRTABLE_TOKEN;
const AIRTABLE_BASE = process.env.AIRTABLE_PAID_BASE;
const AIRTABLE_TABLE = process.env.AIRTABLE_PAID_TABLE;
const PAYHERO_AUTH = process.env.PAYHERO_BASIC_AUTH_TOKEN; // already includes "Basic " prefix
const ABANDON_AFTER_HOURS = Number(process.env.ABANDON_AFTER_HOURS || 24);

const AIRTABLE_URL = `https://api.airtable.com/v0/${AIRTABLE_BASE}/${AIRTABLE_TABLE}`;
const TERMINAL_STATUSES = ['Success', 'Failed', 'Abandoned'];

function assertConfigured() {
  const missing = [];
  if (!AIRTABLE_TOKEN) missing.push('AIRTABLE_TOKEN');
  if (!AIRTABLE_BASE) missing.push('AIRTABLE_PAID_BASE');
  if (!AIRTABLE_TABLE) missing.push('AIRTABLE_PAID_TABLE');
  if (missing.length) throw new Error(`Missing env vars: ${missing.join(', ')}`);
}

function normalizePhone(raw) {
  if (!raw) return null;
  let p = String(raw).replace(/[\s\-()]/g, '');
  if (p.startsWith('+')) p = p.slice(1);
  if (p.startsWith('0')) p = '254' + p.slice(1);
  if (/^7\d{8}$/.test(p) || /^1\d{8}$/.test(p)) p = '254' + p;
  return /^254[71]\d{8}$/.test(p) ? p : null;
}

function generateReference(prefix = 'ACADEMY') {
  const rand = Math.random().toString(16).slice(2, 6);
  return `${prefix}-${Date.now()}-${rand}`;
}

async function airtableFetch(pathAndQuery, options = {}) {
  assertConfigured();
  const res = await fetch(`${AIRTABLE_URL}${pathAndQuery}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${AIRTABLE_TOKEN}`,
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
  });
  const json = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(`Airtable ${res.status}: ${json?.error?.message || res.statusText}`);
  }
  return json;
}

async function createPendingRecord({ reference, tier, phone, amount }) {
  const body = {
    fields: {
      CheckoutRequestID: reference,
      Tier: tier,
      Phone: phone,
      Amount: amount,
      Status: 'Pending',
    },
  };
  return airtableFetch('', { method: 'POST', body: JSON.stringify(body) });
}

async function findRecordByReference(reference) {
  const formula = encodeURIComponent(`{CheckoutRequestID}='${reference.replace(/'/g, "\\'")}'`);
  const result = await airtableFetch(`?filterByFormula=${formula}&maxRecords=1`);
  return result.records?.[0] || null;
}

async function listPendingRecords() {
  const records = [];
  let offset;
  const formula = encodeURIComponent(`{Status}='Pending'`);
  do {
    const qs = `?filterByFormula=${formula}${offset ? `&offset=${offset}` : ''}`;
    const page = await airtableFetch(qs);
    records.push(...(page.records || []));
    offset = page.offset;
  } while (offset);
  return records;
}

// PayHero's webhook payload shape is undocumented — probe several likely keys.
function extractReferenceFromPayload(body, query) {
  const candidates = [
    body?.reference,
    body?.external_reference,
    body?.data?.reference,
    body?.response?.ExternalReference,
    body?.response?.external_reference,
    body?.CheckoutRequestID,
    body?.checkout_request_id,
    query?.reference,
  ];
  return candidates.find((v) => typeof v === 'string' && v.length > 0) || null;
}

function normalizeStatus(raw) {
  const s = String(raw || '').trim().toUpperCase();
  if (['SUCCESS', 'COMPLETED', 'PAID'].includes(s)) return 'SUCCESS';
  if (['FAILED', 'CANCELLED', 'CANCELED', 'ERROR'].includes(s)) return 'FAILED';
  if (['PENDING', 'QUEUED', 'PROCESSING'].includes(s)) return 'PENDING';
  return 'UNKNOWN';
}

async function verifyTransactionStatus(reference) {
  if (!PAYHERO_AUTH) throw new Error('Missing env var: PAYHERO_BASIC_AUTH_TOKEN');
  const res = await fetch(
    `https://backend.payhero.co.ke/api/v2/transaction-status?reference=${encodeURIComponent(reference)}`,
    { headers: { Authorization: PAYHERO_AUTH } }
  );
  const json = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(`PayHero status ${res.status}: ${JSON.stringify(json)}`);

  const statusCandidates = [
    json?.status,
    json?.data?.status,
    json?.response?.ResultDesc,
    json?.response?.Status,
    json?.transaction?.status,
  ];
  const rawStatus = statusCandidates.find((v) => typeof v === 'string');
  const status = normalizeStatus(rawStatus);

  return {
    status,
    raw: json,
    mpesaReceiptNumber: json?.mpesa_receipt_number || json?.data?.receipt_number || json?.receipt_number || null,
    providerReference: json?.provider_reference || json?.data?.reference || json?.transaction_id || null,
    resultDesc: rawStatus || JSON.stringify(json).slice(0, 500),
  };
}

async function applyResolution(record, verification) {
  const currentStatus = record.fields?.Status;
  if (TERMINAL_STATUSES.includes(currentStatus)) {
    return { skipped: true, reason: 'already-terminal', status: currentStatus };
  }
  if (verification.status !== 'SUCCESS' && verification.status !== 'FAILED') {
    return { skipped: true, reason: 'not-terminal-yet', status: verification.status };
  }

  const fields = {
    Status: verification.status === 'SUCCESS' ? 'Success' : 'Failed',
    ResultDesc: verification.resultDesc,
    TransactionDate: new Date().toISOString(),
  };
  if (verification.mpesaReceiptNumber) fields.MpesaReceiptNumber = verification.mpesaReceiptNumber;
  if (verification.providerReference) fields.MerchantRequestID = verification.providerReference;

  await airtableFetch(`/${record.id}`, {
    method: 'PATCH',
    body: JSON.stringify({ fields }),
  });
  return { skipped: false, status: fields.Status };
}

async function markAbandoned(record) {
  const currentStatus = record.fields?.Status;
  if (TERMINAL_STATUSES.includes(currentStatus)) {
    return { skipped: true, reason: 'already-terminal', status: currentStatus };
  }
  try {
    await airtableFetch(`/${record.id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        fields: { Status: 'Abandoned', ResultDesc: 'Auto-abandoned after 24h with no resolution' },
      }),
    });
    return { skipped: false, status: 'Abandoned' };
  } catch (err) {
    // Likely means the "Abandoned" select option hasn't been added to Airtable yet — fail soft.
    return { skipped: true, reason: 'patch-failed', error: String(err) };
  }
}

function ageHours(record) {
  const created = record.fields?.CreatedAt || record.createdTime;
  if (!created) return 0;
  return (Date.now() - new Date(created).getTime()) / 3_600_000;
}

module.exports = {
  ABANDON_AFTER_HOURS,
  normalizePhone,
  generateReference,
  createPendingRecord,
  findRecordByReference,
  listPendingRecords,
  extractReferenceFromPayload,
  verifyTransactionStatus,
  applyResolution,
  markAbandoned,
  ageHours,
};
