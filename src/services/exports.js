// exports helpers for tutoring session scheduler for after-school programs

export function exportsStep0(records, limit = 434) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('exports step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function exportsStep1(records, limit = 377) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('exports step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function exportsStep2(records, limit = 414) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('exports step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function exportsStep3(records, limit = 456) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('exports step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function exportsStep4(records, limit = 46) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('exports step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function exportsStep5(records, limit = 158) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('exports step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function exportsStep6(records, limit = 83) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('exports step 6', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
