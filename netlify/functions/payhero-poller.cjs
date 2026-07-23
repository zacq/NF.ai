const {
  listPendingRecords,
  verifyTransactionStatus,
  applyResolution,
  markAbandoned,
  ageHours,
  ABANDON_AFTER_HOURS,
} = require('./_lib/payhero-airtable.cjs');

exports.handler = async () => {
  const summary = { checked: 0, resolved: 0, abandoned: 0, stillPending: 0, errors: 0 };

  let records;
  try {
    records = await listPendingRecords();
  } catch (err) {
    console.error('payhero-poller: failed to list pending records', err);
    return { statusCode: 200, body: JSON.stringify({ error: 'Airtable list failed', detail: String(err) }) };
  }

  for (const record of records) {
    summary.checked += 1;
    const reference = record.fields?.CheckoutRequestID;
    try {
      if (ageHours(record) >= ABANDON_AFTER_HOURS) {
        const r = await markAbandoned(record);
        if (!r.skipped) summary.abandoned += 1;
        continue;
      }
      if (!reference) {
        summary.stillPending += 1;
        continue;
      }

      const verification = await verifyTransactionStatus(reference);
      const result = await applyResolution(record, verification);
      if (!result.skipped) summary.resolved += 1;
      else summary.stillPending += 1;
    } catch (err) {
      console.error(`payhero-poller: error processing ${reference}`, err);
      summary.errors += 1;
    }
  }

  return { statusCode: 200, body: JSON.stringify(summary) };
};
