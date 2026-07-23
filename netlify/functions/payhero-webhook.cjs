const {
  extractReferenceFromPayload,
  findRecordByReference,
  verifyTransactionStatus,
  applyResolution,
} = require('./_lib/payhero-airtable.cjs');

const WEBHOOK_SECRET = process.env.PAYHERO_WEBHOOK_SECRET; // advisory only, per PRD

exports.handler = async (event) => {
  // Always 200, per PRD, to avoid PayHero retry storms.
  try {
    const query = event.queryStringParameters || {};
    if (WEBHOOK_SECRET && query.token !== WEBHOOK_SECRET) {
      console.warn('payhero-webhook: token mismatch (advisory only, not rejecting)', query.token);
    }

    let body = {};
    try {
      body = JSON.parse(event.body || '{}');
    } catch {
      console.error('payhero-webhook: non-JSON body', event.body);
    }

    const reference = extractReferenceFromPayload(body, query);
    if (!reference) {
      console.error('payhero-webhook: no reference found in payload', JSON.stringify(body));
      return respond({ received: true, matched: false });
    }

    const record = await findRecordByReference(reference);
    if (!record) {
      console.error('payhero-webhook: no Airtable record for reference', reference);
      return respond({ received: true, matched: false });
    }

    const verification = await verifyTransactionStatus(reference); // never trust posted status
    const result = await applyResolution(record, verification);

    return respond({ received: true, matched: true, ...result });
  } catch (err) {
    console.error('payhero-webhook: unhandled error', err);
    return respond({ received: true, error: true });
  }
};

function respond(body) {
  return { statusCode: 200, body: JSON.stringify(body) };
}
