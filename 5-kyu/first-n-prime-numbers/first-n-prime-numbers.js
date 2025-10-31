class Primes {
  static first(n) {
    if (!this._primes) this._primes = [2];
​
    let num = this._primes[this._primes.length - 1] + 1;
​
    while (this._primes.length < n) {
      if (this._isPrime(num)) this._primes.push(num);
      num++;
    }
​
    return this._primes.slice(0, n);
  }
​
  static _isPrime(num) {
    if (num < 2) return false;
    const limit = Math.sqrt(num);
    for (let p of this._primes) {
      if (p > limit) break;
      if (num % p === 0) return false;
    }
    return true;
  }
}
​