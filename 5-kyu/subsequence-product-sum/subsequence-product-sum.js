function productSum(a, m) {
  const MOD = 1000000007n;
​
  const dp = Array(m + 1).fill(0n);
  dp[0] = 1n;
​
  for (const x of a) {
    const v = BigInt(x);
​
    for (let k = m; k >= 1; k--) {
      dp[k] = (dp[k] + dp[k - 1] * v) % MOD;
    }
  }
​
  return Number(dp[m]);
}