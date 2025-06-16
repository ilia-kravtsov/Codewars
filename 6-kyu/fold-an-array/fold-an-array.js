function foldArray(array, runs) {
  let result = array.slice(); 
​
  for (let i = 0; i < runs; i++) {
    const folded = [];
    const len = result.length;
​
    for (let j = 0; j < Math.floor(len / 2); j++) {
      folded.push(result[j] + result[len - 1 - j]);
    }
​
    if (len % 2 !== 0) {
      folded.push(result[Math.floor(len / 2)]);
    }
​
    result = folded;
  }
​
  return result;
}
​