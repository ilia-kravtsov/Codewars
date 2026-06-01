var primes = [2, 3, 5, 7];
​
function expandPrimes() {
  let n = primes[primes.length - 1] + 2;
​
  while (true) {
    let prime = true;
    const limit = Math.sqrt(n);
​
    for (let i = 0; i < primes.length && primes[i] <= limit; i++) {
      if (n % primes[i] === 0) {
        prime = false;
        break;
      }
    }
​
    if (prime) {
      primes.push(n);
      return;
    }
​
    n += 2;
  }
}
​
function isPrime(n) {
  if (n < 2) return false;
​
  const limit = Math.sqrt(n);
  let i = 0;
​
  while (true) {
    if (i >= primes.length) expandPrimes();
​
    if (primes[i] > limit) break;
    if (n % primes[i] === 0) return false;
​
    i++;
  }
​
  return true;
}