// calendar helpers for tutoring session scheduler for after-school programs

export function calendarStep0(records, limit = 66) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('calendar step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function calendarStep1(records, limit = 113) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('calendar step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function calendarStep2(records, limit = 345) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('calendar step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function calendarStep3(records, limit = 53) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('calendar step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function calendarStep4(records, limit = 205) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('calendar step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function calendarStep5(records, limit = 97) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('calendar step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function calendarStep6(records, limit = 219) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('calendar step 6', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function calendarStep7(records, limit = 140) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('calendar step 7', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function calendarStep8(records, limit = 341) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('calendar step 8', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function calendarStep9(records, limit = 425) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('calendar step 9', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
