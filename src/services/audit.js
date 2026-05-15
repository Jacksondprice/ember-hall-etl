// audit helpers for tutoring session scheduler for after-school programs

export function auditStep0(records, limit = 201) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('audit step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function auditStep1(records, limit = 332) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('audit step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function auditStep2(records, limit = 474) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('audit step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function auditStep3(records, limit = 315) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('audit step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function auditStep4(records, limit = 137) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('audit step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function auditStep5(records, limit = 378) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('audit step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function auditStep6(records, limit = 234) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('audit step 6', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
