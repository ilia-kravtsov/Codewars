function solve(str, idx) {
  if (str[idx] !== '(') {
    return -1;
  }
  
  const stack = [];
  
  for (let i = idx; i < str.length; i++) {
    if (str[i] === '(') {
      stack.push(i);
    } else if (str[i] === ')') {
      const openIndex = stack.pop();
      if (openIndex === idx) {
        return i;
      }
    }
  }
  
  return -1;
}