// retention helpers for tutoring session scheduler for after-school programs

export function retentionStep0(records, limit = 203) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('retention step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function retentionStep1(records, limit = 276) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('retention step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function retentionStep2(records, limit = 14) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('retention step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function retentionStep3(records, limit = 173) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('retention step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function retentionStep4(records, limit = 439) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('retention step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function retentionStep5(records, limit = 76) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('retention step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
