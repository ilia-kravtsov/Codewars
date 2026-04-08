function maximizeEarnings(earnings, k) {
  const n = earnings.length;
  if (n === 0) return 0;
​
  const dp = Array.from({ length: n + 1 }, () => Array(k + 1).fill(0));
​
  for (let i = 0; i < n; i++) {
    for (let streak = 0; streak <= k; streak++) {
      dp[i + 1][0] = Math.max(dp[i + 1][0], dp[i][streak]);
​
      if (streak < k) {
        dp[i + 1][streak + 1] = Math.max(
          dp[i + 1][streak + 1],
          dp[i][streak] + earnings[i]
        );
      }
    }
  }
​
  return Math.max(...dp[n]);
}