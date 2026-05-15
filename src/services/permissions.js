// permissions helpers for tutoring session scheduler for after-school programs

export function permissionsStep0(records, limit = 152) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('permissions step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function permissionsStep1(records, limit = 447) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('permissions step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function permissionsStep2(records, limit = 308) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('permissions step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function permissionsStep3(records, limit = 218) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('permissions step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function permissionsStep4(records, limit = 464) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('permissions step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function permissionsStep5(records, limit = 400) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('permissions step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function permissionsStep6(records, limit = 423) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('permissions step 6', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function permissionsStep7(records, limit = 65) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('permissions step 7', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function permissionsStep8(records, limit = 24) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('permissions step 8', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function permissionsStep9(records, limit = 86) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('permissions step 9', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function permissionsStep10(records, limit = 229) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('permissions step 10', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
