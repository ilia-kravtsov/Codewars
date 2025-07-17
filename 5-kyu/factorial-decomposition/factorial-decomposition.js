function decomp(n) {
  function getPrimes(limit) {
    const sieve = Array(limit + 1).fill(true);
    sieve[0] = sieve[1] = false;
    for (let i = 2; i * i <= limit; i++) {
      if (sieve[i]) {
        for (let j = i * i; j <= limit; j += i) {
          sieve[j] = false;
        }
      }
    }
    return sieve.map((isPrime, idx) => isPrime ? idx : null).filter(p => p !== null);
  }
​
  const primes = getPrimes(n);
  const result = [];
​
  for (let prime of primes) {
    let exp = 0;
    let power = prime;
    while (power <= n) {
      exp += Math.floor(n / power);
      power *= prime;
    }
    result.push(exp === 1 ? `${prime}` : `${prime}^${exp}`);
  }
​
  return result.join(' * ');
}
​