function longestComb(arr, command) {
  const inc = command.includes('<');
  const n = arr.length;
​
  const dp = Array(n).fill(1);
  const prev = Array.from({ length: n }, () => []);
​
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      const ok = inc ? arr[j] < arr[i] : arr[j] > arr[i];
      if (!ok) continue;
​
      if (dp[j] + 1 > dp[i]) {
        dp[i] = dp[j] + 1;
        prev[i] = [j];
      } else if (dp[j] + 1 === dp[i]) {
        prev[i].push(j);
      }
    }
  }
​
  const max = Math.max(...dp);
  if (max < 3) return [];
​
  const ends = [];
  for (let i = 0; i < n; i++) if (dp[i] === max) ends.push(i);
​
  const res = [];
​
  function dfs(i, path) {
    path.push(i);
​
    if (!prev[i].length) {
      if (path.length === max) {
        res.push([...path].reverse());