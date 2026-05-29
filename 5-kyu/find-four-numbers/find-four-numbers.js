function find4Number(n) {
  const sq = x => x * x;
​
  for (let a = Math.floor(Math.sqrt(n - 3)); a >= Math.ceil(Math.sqrt(n / 4)); a--) {
    const r1 = n - sq(a);
    const maxB = Math.min(a, Math.floor(Math.sqrt(r1 - 2)));
​
    for (let b = maxB; b >= 1; b--) {
      const r2 = r1 - sq(b);
​
      if (r2 > 2 * sq(b)) break;
      if (r2 < 2) continue;
​
      const maxC = Math.min(b, Math.floor(Math.sqrt(r2 - 1)));
      const minC = Math.ceil(Math.sqrt(r2 / 2));
​
      for (let c = maxC; c >= minC; c--) {
        const d2 = r2 - sq(c);
        const d = Math.sqrt(d2);
​
        if (Number.isInteger(d) && d > 0 && d <= c) {
          return [a, b, c, d];
        }
      }
    }
  }
}