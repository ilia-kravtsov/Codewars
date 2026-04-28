function subsetSum(xs, target) {
  if (target === 0) return [];
​
  const dp = Array(target + 1).fill(null);
  dp[0] = [];
​
  for (let i = 0; i < xs.length; i++) {
    const x = xs[i];
​
    for (let sum = target; sum >= x; sum--) {
      if (dp[sum] === null && dp[sum - x] !== null) {
        dp[sum] = [...dp[sum - x], x];
      }
    }
  }
​
  return dp[target];
}