function diagonals(matrix) {
  const n = matrix.length;
  const res = [];
​
  if (n === 0) return [];
  if (n === 1) return [[matrix[0][0]]];
​
  for (let s = 0; s <= 2 * (n - 1); s++) {
    const d = [];
    for (let i = 0; i < n; i++) {
      const j = s - i;
      if (j >= 0 && j < n) d.push(matrix[i][j]);
    }
    res.push(d);
  }
​
  for (let diff = -(n - 1); diff <= n - 1; diff++) {
    const d = [];
    for (let i = 0; i < n; i++) {
      const j = i + diff;
      if (j >= 0 && j < n) d.push(matrix[i][j]);
    }
    res.push(d);
  }
​
  return res;
}