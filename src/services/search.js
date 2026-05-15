// search helpers for tutoring session scheduler for after-school programs

export function searchStep0(records, limit = 272) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('search step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function searchStep1(records, limit = 302) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('search step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function searchStep2(records, limit = 403) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('search step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function searchStep3(records, limit = 152) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('search step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function searchStep4(records, limit = 320) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('search step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function searchStep5(records, limit = 219) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('search step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function searchStep6(records, limit = 318) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('search step 6', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
