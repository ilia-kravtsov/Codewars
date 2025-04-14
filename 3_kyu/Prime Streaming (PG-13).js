/*
Create an endless stream that yields prime numbers. The stream must be able to produce a million primes in a few seconds.
*/

class Primes {
  static *stream() {
    yield 2;
    const primes = [2];
    for (let n = 3; ; n += 2) {
      let isPrime = true;
      const limit = Math.sqrt(n);
      for (let i = 0; i < primes.length; i++) {
        const p = primes[i];
        if (p > limit) break;
        if (n % p === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        primes.push(n);
        yield n;
      }
    }
  }
}
