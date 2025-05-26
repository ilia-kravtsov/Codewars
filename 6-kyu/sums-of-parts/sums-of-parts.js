function partsSums(ls) {
  const result = [];
  let sum = 0;
  
  for (let i = 0; i < ls.length; i++) {
    sum += ls[i];
  }
  
  for (let i = 0; i <= ls.length; i++) {
    result.push(sum);
    if (i < ls.length) {
      sum -= ls[i];
    }
  }
  
  return result;
}