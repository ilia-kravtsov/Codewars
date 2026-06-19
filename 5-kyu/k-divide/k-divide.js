function calculateSum(n, k) {
  const T = x => x * (x + 1n) / 2n;
​
  let result = 0n;
​
  while (n > 0n) {
    const m = n / k;
    result += T(n) - k * T(m);
    n = m;
  }
​
  return result;
}