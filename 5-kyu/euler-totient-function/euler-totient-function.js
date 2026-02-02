function totient(n) {
  if (typeof n !== 'number' || !Number.isInteger(n) || n < 1) return 0;
​
  let result = n;
  let x = n;
​
  for (let p = 2; p * p <= x; p++) {
    if (x % p === 0) {
      while (x % p === 0) x /= p;
      result -= result / p;
    }
  }
​
  if (x > 1) {
    result -= result / x;
  }
​
  return result;
}
​