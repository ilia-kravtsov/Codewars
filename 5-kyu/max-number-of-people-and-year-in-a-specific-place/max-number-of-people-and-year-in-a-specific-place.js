function yearMaxPeople(records) {
  const events = new Map();
​
  for (const [start, end] of records) {
    events.set(start, (events.get(start) || 0) + 1);
    events.set(end + 1, (events.get(end + 1) || 0) - 1);
  }
​
  let current = 0;
  let max = 0;
  let maxYear = 0;
​
  for (const year of [...events.keys()].sort((a, b) => a - b)) {
    current += events.get(year);
​
    if (current > max) {
      max = current;
      maxYear = year;
    }
  }
​
  return [max, maxYear];
}