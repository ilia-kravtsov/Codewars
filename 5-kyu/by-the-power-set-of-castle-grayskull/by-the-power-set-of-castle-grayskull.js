function power(array) {
  let result = [[]];
  
  for (let el of array) {
    result = result.concat(result.map(sub => sub.concat(el)));
  }
  
  return result;
}