function findMult_3(num) {
  const digits = String(num).split('').map(Number);
  const counts = Array(10).fill(0);
​
  for (const d of digits) counts[d]++;
​
  let total = 0;
  let max = -1;
​
  function dfs(value, mod, started) {
    if (started && mod === 0) {
      total++;
      if (value > max) max = value;
    }
​
    for (let d = 0; d <= 9; d++) {
      if (counts[d] === 0) continue;
      if (!started && d === 0) continue;
​
      counts[d]--;
      dfs(value * 10 + d, (mod * 10 + d) % 3, true);
      counts[d]++;
    }
  }
​
  dfs(0, 0, false);
​
  return total === 0 ? [] : [total, max];
}