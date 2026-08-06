function addBinary(a,b) {
  let sum = a + b;
  let binary = '';
  
  if (sum === 0) return '0';
  
  while (sum > 0) {
    binary = (sum % 2) + binary;
    sum = Math.floor(sum / 2);
  }
  
  return binary;
}