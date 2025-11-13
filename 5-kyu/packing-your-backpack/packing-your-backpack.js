function packBagpack(scores, weights, capacity) {
  const n = scores.length;
  const dp = Array(capacity + 1).fill(0);
  for (let i = 0; i < n; i++) {
    for (let w = capacity; w >= weights[i]; w--) {
      dp[w] = Math.max(dp[w], dp[w - weights[i]] + scores[i]);
    }
  }
  return dp[capacity];
}
​