// uploads helpers for tutoring session scheduler for after-school programs

export function uploadsStep0(records, limit = 71) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('uploads step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function uploadsStep1(records, limit = 195) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('uploads step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function uploadsStep2(records, limit = 423) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('uploads step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function uploadsStep3(records, limit = 373) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('uploads step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function uploadsStep4(records, limit = 184) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('uploads step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function uploadsStep5(records, limit = 24) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('uploads step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
