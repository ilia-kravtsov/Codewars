function prime(num) {
  if (num < 2) return [];
  
  let isPrime = new Array(num + 1).fill(true);
  isPrime[0] = false;
  isPrime[1] = false;
  
  for (let i = 2; i * i <= num; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= num; j += i) {
        isPrime[j] = false;
      }
    }
  }
  
  let primes = [];
  for (let i = 2; i <= num; i++) {
    if (isPrime[i]) {
      primes.push(i);
    }
  }
  
  return primes;
}