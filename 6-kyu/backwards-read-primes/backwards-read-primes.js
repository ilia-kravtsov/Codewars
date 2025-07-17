function backwardsPrime(start, stop) {
  const result = [];
​
  function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2, sqrt = Math.sqrt(n); i <= sqrt; i++) {
      if (n % i === 0) return false;
    }
    return true;
  }
​
  for (let i = start; i <= stop; i++) {
    if (isPrime(i)) {
      const reversed = parseInt(i.toString().split('').reverse().join(''), 10);
      if (reversed !== i && isPrime(reversed)) {
        result.push(i);
      }
    }
  }
​
  return result;
}
​