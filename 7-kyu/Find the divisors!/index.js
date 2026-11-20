function divisors(integer) {
  const result = [];
  
  for (let i = 2; i <= Math.sqrt(integer); i++) {
    if (integer % i === 0) {
      result.push(i);
      
      const paired = integer / i;
      
      if (paired !== i) {
        result.push(paired);
      }
    }
  }
  
  if (result.length === 0) {
    return `${integer} is prime`;
  }
  
  return result.sort((a, b) => a - b);
}