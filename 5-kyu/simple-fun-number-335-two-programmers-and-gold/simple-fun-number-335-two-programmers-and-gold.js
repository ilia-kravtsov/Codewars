function distributionOf(gold) {
  const n = gold.length;
  if (n === 0) return [0, 0];
​
  const sum = gold.reduce((a, b) => a + b, 0);
​
  const dp = Array.from({ length: n }, () => Array(n).fill(0));
  for (let i = 0; i < n; i++) dp[i][i] = gold[i];
​
  for (let len = 2; len <= n; len++) {
    for (let i = 0; i + len - 1 < n; i++) {
      const j = i + len - 1;
      const takeLeft = gold[i] - dp[i + 1][j];
      const takeRight = gold[j] - dp[i][j - 1];
      dp[i][j] = Math.max(takeLeft, takeRight);
    }
  }
​
  const diff = dp[0][n - 1];
  const a = (sum + diff) / 2;
  const b = sum - a;
  return [a, b];
}