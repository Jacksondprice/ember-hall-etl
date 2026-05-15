// billing helpers for tutoring session scheduler for after-school programs

export function billingStep0(records, limit = 349) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('billing step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function billingStep1(records, limit = 426) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('billing step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function billingStep2(records, limit = 34) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('billing step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function billingStep3(records, limit = 478) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('billing step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function billingStep4(records, limit = 450) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('billing step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function billingStep5(records, limit = 340) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('billing step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function billingStep6(records, limit = 413) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('billing step 6', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function billingStep7(records, limit = 19) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('billing step 7', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
