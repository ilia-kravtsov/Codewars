function digitwiseAddition(N, K) {
  const MOD = 1000000007;
​
  const dp = Array(K + 10).fill(0);
​
  for (let i = 0; i < 10; i++) {
    dp[i] = 1;
  }
​
  for (let i = 10; i < dp.length; i++) {
    dp[i] = (dp[i - 9] + dp[i - 10]) % MOD;
  }
​
  let answer = 0;
​
  for (const ch of String(N)) {
    answer = (answer + dp[K + Number(ch)]) % MOD;
  }
​
  return answer;
}