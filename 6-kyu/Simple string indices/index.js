function solve(str, idx) {
  if (str[idx] !== '(') {
    return -1;
  }
  
  let count = 0;
  
  for (let i = idx; i < str.length; i++) {
    if (str[i] === '(') {
      count++;
    } else if (str[i] === ')') {
      count--;
      if (count === 0) {
        return i;
      }
    }
  }
  
  return -1;
}