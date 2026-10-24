function solve(a, b) {
  function isPrime(n) {
    if (n < 2) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
      if (n % i === 0) return false;
    }
    return true;
  }
  
  let sequence = '';
  let num = 2;
  
  while (sequence.length < a + b) {
    if (isPrime(num)) {
      sequence += num.toString();
    }
    num++;
  }
  
  return sequence.substring(a, a + b);
}