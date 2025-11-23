function c(k) {
  if (k <= 0) return 0;
  let n = k;
  let ans = 1;
  
  for (let p = 2; p * p <= n; p += (p === 2 ? 1 : 2)) {
    let cnt = 0;
    while (n % p === 0) {
      cnt++;
      n /= p;
    }
    if (cnt % 2 === 1) return 0;
    if (cnt > 0) ans *= (3 * (cnt / 2) + 1);
  }
  if (n > 1) return 0;
  
  return ans;
}
​