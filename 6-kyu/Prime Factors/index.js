function primeFactors(n) {
  const factors = [];
  
  if (n <= 1) {
    return factors;
  }
  
  while (n % 2 === 0) {
    factors.push(2);
    n = n / 2;
  }
  
  let factor = 3;
  while (factor * factor <= n) {
    while (n % factor === 0) {
      factors.push(factor);
      n = n / factor;
    }
    factor += 2; 
  }
  
  if (n > 1) {
    factors.push(n);
  }
  
  return factors;
}