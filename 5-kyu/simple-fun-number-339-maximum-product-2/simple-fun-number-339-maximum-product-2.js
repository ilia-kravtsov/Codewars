function maximumProduct(n) {
  const dp = Array(n + 1).fill(0);
  dp[0] = 1;
​
  for (let x = 2; x <= n; x++) {
    for (let sum = n; sum >= x; sum--) {
      if (dp[sum - x] > 0) {
        dp[sum] = Math.max(dp[sum], dp[sum - x] * x);
      }
    }
  }
​
  return dp[n];
}