function schedule(employees, monthyear, n) {
  const m = parseInt(monthyear.slice(0, 2), 10);
  const y = parseInt(monthyear.slice(2), 10);

  const days = new Date(y, m, 0).getDate();
  const total = employees.length;

  if (total < n * 2) return null;

  const totalShifts = days * n;
  const base = Math.floor(totalShifts / total);
  const extra = totalShifts % total;

  const target = new Array(total).fill(base);
  for (let i = 0; i < extra; i++) target[i]++;

  const worked = new Array(total).fill(0);
  const prev = new Set();
  const result = [];

  for (let d = 0; d < days; d++) {
    const today = [];

    const candidates = [];
    for (let i = 0; i < total; i++) {
      if (!prev.has(i) && worked[i] < target[i]) {
        candidates.push(i);
      }
    }

    if (candidates.length < n) return null;

    candidates.sort((a, b) => {
      const ra = target[a] - worked[a];
      const rb = target[b] - worked[b];
      if (rb !== ra) return rb - ra;
      return a - b;
    });

    const nextPrev = new Set();

    for (let i = 0; i < n; i++) {
      const idx = candidates[i];
      worked[idx]++;
      today.push(employees[idx]);
      nextPrev.add(idx);
    }

    result.push(today);
    prev.clear();
    for (const x of nextPrev) prev.add(x);
  }

  return result;
}