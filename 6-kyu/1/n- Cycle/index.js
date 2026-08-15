function cycle(n) {
  if (n % 2 === 0 || n % 5 === 0) {
    return -1;
  }
  
  let remainder = 1 % n;
  let position = 0;
  const seenRemainders = new Map();
  
  while (remainder !== 0) {
    if (seenRemainders.has(remainder)) {
      return position - seenRemainders.get(remainder);
    }
    
    seenRemainders.set(remainder, position);
    remainder = (remainder * 10) % n;
    position++;
  }
  
  return -1;
}