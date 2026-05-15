// geocoding helpers for tutoring session scheduler for after-school programs

export function geocodingStep0(records, limit = 104) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('geocoding step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function geocodingStep1(records, limit = 69) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('geocoding step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function geocodingStep2(records, limit = 427) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('geocoding step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function geocodingStep3(records, limit = 370) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('geocoding step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function geocodingStep4(records, limit = 15) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('geocoding step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function geocodingStep5(records, limit = 452) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('geocoding step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function geocodingStep6(records, limit = 102) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('geocoding step 6', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function geocodingStep7(records, limit = 340) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('geocoding step 7', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function geocodingStep8(records, limit = 468) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('geocoding step 8', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function geocodingStep9(records, limit = 415) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('geocoding step 9', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
