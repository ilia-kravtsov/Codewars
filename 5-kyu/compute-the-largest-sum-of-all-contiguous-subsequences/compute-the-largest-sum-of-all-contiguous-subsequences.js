function largestSum(arr) {
  if (!arr.length) return 0;
​
  let maxSoFar = 0;
  let currentSum = 0;
​
  for (let num of arr) {
    currentSum = Math.max(0, currentSum + num);
    maxSoFar = Math.max(maxSoFar, currentSum);
  }
​
  return maxSoFar;
}
​