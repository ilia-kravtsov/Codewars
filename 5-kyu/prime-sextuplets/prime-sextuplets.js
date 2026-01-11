function findPrimesSextuplet(sumLimit) {
  const isPrime = (n) => {
    if (n < 2) return false;
    if (n === 2 || n === 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    for (let i = 5; i * i <= n; i += 6) {
      if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    return true;
  };
​
  for (let p = 7; ; p += 2) {
    if (
      isPrime(p) &&
      isPrime(p + 4) &&
      isPrime(p + 6) &&
      isPrime(p + 10) &&
      isPrime(p + 12) &&
      isPrime(p + 16)
    ) {
      const sextuplet = [p, p + 4, p + 6, p + 10, p + 12, p + 16];
      const sum = sextuplet.reduce((a, b) => a + b, 0);
      if (sum > sumLimit) return sextuplet;
    }
  }
}
​