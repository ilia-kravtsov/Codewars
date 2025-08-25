function going(n) {
  let res = 1.0;
  let term = 1.0;
  
  for (let k = n; k > 1; k--) {
    term /= k;
    res += term;
  }
  
  return Math.floor(res * 1e6) / 1e6;
}