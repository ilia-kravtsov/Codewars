function triBicolorTiling(n, r, g, b) {
  const MOD = 12345787;
​
  function countPair(a, b) {
    const dp = Array.from({ length: n + 1 }, () => [0, 0, 0, 0]);
    dp[0][0] = 1;
​
    for (let i = 0; i <= n; i++) {
      for (let mask = 0; mask < 4; mask++) {
        const cur = dp[i][mask];
        if (!cur) continue;
​
        if (i + 1 <= n) {
          dp[i + 1][mask] = (dp[i + 1][mask] + cur) % MOD;
        }
​
        if (i + a <= n) {
          dp[i + a][mask | 1] = (dp[i + a][mask | 1] + cur) % MOD;
        }
​
        if (i + b <= n) {
          dp[i + b][mask | 2] = (dp[i + b][mask | 2] + cur) % MOD;
        }
      }
    }
​
    return dp[n][3];
  }
​
  return (
    countPair(r, g) +
    countPair(r, b) +
    countPair(g, b)
  ) % MOD;
}