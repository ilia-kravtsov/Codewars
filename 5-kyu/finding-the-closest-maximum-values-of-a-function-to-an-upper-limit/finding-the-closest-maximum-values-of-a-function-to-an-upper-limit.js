function maxValF(range1, range2, hMax, k) {
  const values = new Set();
​
  for (let x = range1[0]; x <= range1[1]; x++) {
    for (let y = range2[0]; y <= range2[1]; y++) {
      if (x === y) continue;
​
      const v = Math.floor((x + y) / Math.abs(x - y)) ** Math.abs(x - y);
​
      if (v <= hMax) {
        values.add(v);
      }
    }
  }
​
  return [...values]
    .sort((a, b) => a - b)
    .slice(-k);
}