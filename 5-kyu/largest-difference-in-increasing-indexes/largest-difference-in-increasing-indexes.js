var largestDifference = function(data) {
  let n = data.length;
  let maxDiff = 0;
​
  let maxFromRight = new Array(n);
  maxFromRight[n - 1] = data[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    maxFromRight[i] = Math.max(data[i], maxFromRight[i + 1]);
  }
​
  let i = 0, j = 0;
  while (i < n && j < n) {
    if (data[i] <= maxFromRight[j]) {
      maxDiff = Math.max(maxDiff, j - i);
      j++;
    } else {
      i++;
    }
  }
​
  return maxDiff;
};