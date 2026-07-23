const { normalizePhone, generateReference, createPendingRecord } = require('./_lib/payhero-airtable.cjs');

// KES amounts, approximate conversion from the displayed USD prices ($20/$30/$45 @ ~130 KES/USD).
// Source of truth for what actually gets charged — never trust a client-supplied amount.
const TIER_PRICES_KES = {
  Foundations: 2600,
  Builder: 3900,
  'Capstone Pro': 5850,
};

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

  const { tier, phone } = payload;

  const amt = TIER_PRICES_KES[tier];
  if (!amt) {
    return { statusCode: 400, headers: CORS_HEADERS, body: JSON.stringify({ error: 'Invalid tier' }) };
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
