function square_sums_row(n) {
  const squares = new Set();
  for (let i = 1; i * i <= 2 * n; i++) squares.add(i * i);
​
  const adj = Array.from({ length: n + 1 }, () => []);
  for (let i = 1; i <= n; i++) {
    for (let j = i + 1; j <= n; j++) {
      if (squares.has(i + j)) {
        adj[i].push(j);
        adj[j].push(i);
      }
    }
  }
​
  const used = Array(n + 1).fill(false);
  let result = null;
​
  function dfs(path) {
    if (result) return; 
    if (path.length === n) {
      result = path.slice();
      return;
    }
    const last = path[path.length - 1];
    for (const next of adj[last]) {
      if (!used[next]) {
        used[next] = true;
        path.push(next);
        dfs(path);
        path.pop();
        used[next] = false;
      }
    }
  }
​
  const order = Array.from({ length: n }, (_, i) => i + 1)
    .sort((a, b) => adj[a].length - adj[b].length);
​
  for (const start of order) {
    used[start] = true;
    dfs([start]);
    used[start] = false;
    if (result) break;
  }
​
  return result || false;
}
​