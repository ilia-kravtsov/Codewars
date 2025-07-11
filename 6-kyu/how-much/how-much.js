function howMuch(m, n) {
  const res = [];
  const start = Math.min(m, n);
  const end = Math.max(m, n);
​
  for (let f = start; f <= end; f++) {
    if (f % 9 === 1 && f % 7 === 2) {
      const c = Math.floor((f - 1) / 9); 
      const b = Math.floor((f - 2) / 7); 
      res.push([`M: ${f}`, `B: ${b}`, `C: ${c}`]);
    }
  }
​
  return res;
}
​