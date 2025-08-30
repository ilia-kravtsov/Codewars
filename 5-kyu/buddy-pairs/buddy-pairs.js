function buddy(start, limit) {
  
  function sumDivisors(n) {
    if (n === 1) return 0;
    let sum = 1;
    let sqrt = Math.sqrt(n);
    
    for (let i = 2; i <= sqrt; i++) {
      if (n % i === 0) {
        sum += i;
        let other = n / i;
        
        if (other !== i) sum += other;
      }
    }
    
    return sum;
  }
​
  for (let n = start; n <= limit; n++) {
    let m = sumDivisors(n) - 1;
    
    if (m > n && sumDivisors(m) === n + 1) {
      return [n, m];
    }
  }
  
  return "Nothing";
}