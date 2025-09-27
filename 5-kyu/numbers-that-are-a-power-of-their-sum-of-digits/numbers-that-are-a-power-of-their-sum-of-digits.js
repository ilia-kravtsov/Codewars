function powerSumDigTerm(n) {
  const results = [];
​
  for (let base = 2; base < 100; base++) {        
    for (let exp = 2; exp < 12; exp++) {          
      const num = Math.pow(base, exp);
      const digitSum = [...String(num)].reduce((a, b) => a + +b, 0);
​
      if (digitSum === base && num > 9) {
        results.push(num);
      }
    }
  }
​
  results.sort((a, b) => a - b);
​
  return results[n - 1]; 
}