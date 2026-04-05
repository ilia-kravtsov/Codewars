function slogans(p, r) {
  const n = r.length;
  const m = p.length;
  const dp = Array(n + 1).fill(Infinity);
​
  dp[n] = 0;
​
  for (let i = n - 1; i >= 0; i--) {
    for (let len = 1; len <= m && i + len <= n; len++) {
      if (r.slice(i, i + len) === p.slice(m - len)) {
        dp[i] = Math.min(dp[i], 1 + dp[i + len]);
      }
    }
  }
​
  return dp[0];
}