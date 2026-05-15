// cache helpers for tutoring session scheduler for after-school programs

export function cacheStep0(records, limit = 349) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('cache step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function cacheStep1(records, limit = 27) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('cache step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function cacheStep2(records, limit = 26) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('cache step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function cacheStep3(records, limit = 425) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('cache step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function cacheStep4(records, limit = 492) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('cache step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function cacheStep5(records, limit = 65) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('cache step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
