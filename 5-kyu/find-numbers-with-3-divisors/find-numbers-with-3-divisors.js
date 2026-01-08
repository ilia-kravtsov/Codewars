function solution(n, m) {
  n = BigInt(n);
  m = BigInt(m);
​
  const limit = Math.floor(Math.pow(Number(m), 0.25));
​
  const isPrime = new Uint8Array(limit + 1);
  isPrime.fill(1, 2);
​
  for (let i = 2; i * i <= limit; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= limit; j += i) {
        isPrime[j] = 0;
      }
    }
  }
​
  const result = [];
​
  for (let p = 2; p <= limit; p++) {
    if (isPrime[p]) {
      const val = BigInt(p) ** 4n;
      if (val >= n && val <= m) {
        result.push(val);
      }
    }
  }
​
  return result;
}
​