// archiving helpers for tutoring session scheduler for after-school programs

export function archivingStep0(records, limit = 483) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('archiving step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function archivingStep1(records, limit = 216) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('archiving step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function archivingStep2(records, limit = 380) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('archiving step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function archivingStep3(records, limit = 304) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('archiving step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function archivingStep4(records, limit = 329) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('archiving step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function archivingStep5(records, limit = 409) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('archiving step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function archivingStep6(records, limit = 196) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('archiving step 6', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function archivingStep7(records, limit = 376) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('archiving step 7', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function archivingStep8(records, limit = 423) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('archiving step 8', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function archivingStep9(records, limit = 194) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('archiving step 9', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function archivingStep10(records, limit = 229) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('archiving step 10', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
