const { normalizePhone, generateReference, createPendingRecord } = require('./_lib/payhero-airtable.cjs');

const ALLOWED_TIERS = ['Foundations', 'Builder', 'Capstone Pro'];
const MAX_AMOUNT = 500_000;

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

exports.handler = async (event) => {
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers: CORS_HEADERS, body: '' };
  }
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, headers: CORS_HEADERS, body: JSON.stringify({ error: 'Method not allowed' }) };
  }

  let payload;
  try {
    payload = JSON.parse(event.body || '{}');
  } catch {
    return { statusCode: 400, headers: CORS_HEADERS, body: JSON.stringify({ error: 'Invalid JSON' }) };
  }

  const { tier, amount, phone } = payload;

  if (!ALLOWED_TIERS.includes(tier)) {
    return { statusCode: 400, headers: CORS_HEADERS, body: JSON.stringify({ error: 'Invalid tier' }) };
  }
  const amt = Number(amount);
  if (!Number.isFinite(amt) || amt <= 0 || amt > MAX_AMOUNT) {
    return { statusCode: 400, headers: CORS_HEADERS, body: JSON.stringify({ error: 'Invalid amount' }) };
  }
  const normalizedPhone = normalizePhone(phone);
  if (!normalizedPhone) {
    return { statusCode: 400, headers: CORS_HEADERS, body: JSON.stringify({ error: 'Invalid phone number' }) };
  }

  const reference = generateReference('ACADEMY');

  try {
    await createPendingRecord({ reference, tier, phone: normalizedPhone, amount: amt });
  } catch (err) {
    console.error('initiate-payment: Airtable write failed', err);
    return { statusCode: 502, headers: CORS_HEADERS, body: JSON.stringify({ error: 'Could not create payment record' }) };
  }

  return {
    statusCode: 200,
    headers: CORS_HEADERS,
    body: JSON.stringify({ reference, amount: amt, tier, phone: normalizedPhone }),
  };
};
