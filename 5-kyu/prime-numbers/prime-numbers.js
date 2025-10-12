function isPrime(number) {
  if (number < 2) return false;
  if (number === 2) return true;
  if (number % 2 === 0) return false;
​
  const limit = Math.sqrt(number);
  
  for (let i = 3; i <= limit; i += 2) {
    if (number % i === 0) return false;
  }
  
  return true;
}
​
function getPrimes(start, finish) {
  const [min, max] = start < finish ? [start, finish] : [finish, start];
  const primes = [];
​
  for (let i = min; i <= max; i++) {
    if (isPrime(i)) primes.push(i);
  }
​
  return primes;
}