function findSubarrMaxSum(arr) {
  let maxSum = 0;
  let currentSum = 0;
  let start = 0;
  let result = [];
​
  for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i];
​
    if (currentSum > maxSum) {
      maxSum = currentSum;
      result = [arr.slice(start, i + 1)];
    } else if (currentSum === maxSum && currentSum > 0) {
      result.push(arr.slice(start, i + 1));
    }
​
    if (currentSum < 0) {
      currentSum = 0;
      start = i + 1;
    }
  }
​
  return maxSum > 0 ? [result.length === 1 ? result[0] : result, maxSum] : [[], 0];
}
​