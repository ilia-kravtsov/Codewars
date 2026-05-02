function primeOperations(x, y) {
  const fx = factorize(x);
  const fy = factorize(y);
  const primes = new Set([...Object.keys(fx), ...Object.keys(fy)]);
​
  let count = 0;
​
  for (const p of primes) {
    count += Math.abs((fx[p] || 0) - (fy[p] || 0));
  }
​
  return count;
}
​
function factorize(n) {
  const res = {};
​
  let d = 2;
​
  while (d * d <= n) {
    while (n % d === 0) {
      res[d] = (res[d] || 0) + 1;
      n /= d;
    }
​
    d = d === 2 ? 3 : d + 2;
  }
​
  if (n > 1) {
    res[n] = (res[n] || 0) + 1;
  }
​
  return res;
}