function maxSum(arr, range) {
  let max = -Infinity;
  
  for (let i = 0; i < range.length; i++) {
    const start = range[i][0];
    const end = range[i][1];
    let sum = 0;
    
    for (let j = start; j <= end; j++) {
      sum += arr[j];
    }
    
    if (sum > max) {
      max = sum;
    }
  }
  
  return max;
}