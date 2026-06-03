const operatorInsertor = (() => {
  const best = new Map();
​
  (function dfs(d, sum, term, ops) {
    if (d === 10) {
      const v = sum + term;
      if (!best.has(v) || ops < best.get(v)) best.set(v, ops);
      return;
    }
​
    dfs(
      d + 1,
      sum,
      term >= 0 ? term * 10 + d : term * 10 - d,
      ops
    );
​
    dfs(d + 1, sum + term, d, ops + 1);
    dfs(d + 1, sum + term, -d, ops + 1);
  })(2, 0, 1, 0);
​
  return n => best.has(n) ? best.get(n) : null;
})();