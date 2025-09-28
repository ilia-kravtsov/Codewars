function getStartTime(schedules, duration) {
  function toMinutes(t) {
    const [h, m] = t.split(':').map(Number);
    return h * 60 + m;
  }
​
  function toTime(m) {
    const h = String(Math.floor(m / 60)).padStart(2, '0');
    const mm = String(m % 60).padStart(2, '0');
    return `${h}:${mm}`;
  }
​
  const WORK_START = toMinutes("09:00");
  const WORK_END = toMinutes("19:00");
​
  let busy = [];
  for (const person of schedules) {
    for (const [start, end] of person) {
      busy.push([toMinutes(start), toMinutes(end)]);
    }
  }
​
  busy.sort((a, b) => a[0] - b[0]);
​
  const merged = [];
  for (const [start, end] of busy) {
    if (!merged.length || merged[merged.length - 1][1] < start) {
      merged.push([start, end]);
    } else {
      merged[merged.length - 1][1] = Math.max(merged[merged.length - 1][1], end);
    }
  }
​
  let prevEnd = WORK_START;
  for (const [start, end] of merged) {
    if (start - prevEnd >= duration) {
      return toTime(prevEnd);
    }
    prevEnd = Math.max(prevEnd, end);
  }
​
  if (WORK_END - prevEnd >= duration) {
    return toTime(prevEnd);
  }
​
  return null;
}