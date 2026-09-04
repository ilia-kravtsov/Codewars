function zeroPlentiful(arr) {
  let count = 0;
  let zeros = 0;
​
  for (const num of arr) {
    if (num === 0) {
      zeros++;
    } else {
      if (zeros > 0) {
        if (zeros < 4) return 0;
        count++;
        zeros = 0;
      }
    }
  }
​
  if (zeros > 0) {
    if (zeros < 4) return 0;
    count++;
  }
​
  return count;
}