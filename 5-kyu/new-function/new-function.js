function newFunction(n) {
  let m = Math.floor(n / 2);
  if (m < 2) return 0;
​
  let ans = 0;
  let d = 2;
​
  while (d <= m) {
    let q = Math.floor(n / d);
    let r = Math.min(m, Math.floor(n / q));
​
    let sum = (d + r) * (r - d + 1) / 2;
    ans += q * sum;
​
    d = r + 1;
  }
​
  ans -= (m * (m + 1) / 2 - 1);
​
  return ans;
}