function oddRow(n) {
  let start = n * (n - 1) + 1;
  
  return Array.from({ length: n }, (_, i) => start + i * 2);
}