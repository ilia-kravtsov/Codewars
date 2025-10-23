function generateDiagonal(n, l) {
  if (l === 0) return [];
  const res = [1];
  
  for (let i = 1; i < l; i++) {
    res.push(res[i - 1] * (n + i) / i);
  }
  
  return res;
}