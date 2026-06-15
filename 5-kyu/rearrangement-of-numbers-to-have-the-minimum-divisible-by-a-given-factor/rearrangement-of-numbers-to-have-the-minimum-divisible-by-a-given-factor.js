function rearranger(k, arr) {
  const strs = arr.map(String);
  const n = strs.length;
​
  const mods = strs.map((s) => {
    let m = 0;
    for (const ch of s) m = (m * 10 + Number(ch)) % k;
    return m;
  });
​
  const pow10 = Array(Math.max(...strs.map((s) => s.length)) + 1).fill(0);
  pow10[0] = 1 % k;
​
  for (let i = 1; i < pow10.length; i++) {
    pow10[i] = (pow10[i - 1] * 10) % k;
  }
​
  const memo = new Map();
​
  function dfs(mask, mod) {
    const key = `${mask}|${mod}`;
​
    if (memo.has(key)) return memo.get(key);
​
    if (mask === (1 << n) - 1) {
      const res = mod === 0 ? "" : null;
      memo.set(key, res);
      return res;
    }
​
    let best = null;
​
    for (let i = 0; i < n; i++) {
      if (mask & (1 << i)) continue;
​
      const nextMod =
        (mod * pow10[strs[i].length] + mods[i]) % k;
​
      const suffix = dfs(mask | (1 << i), nextMod);
​
      if (suffix === null) continue;
​
      const candidate = strs[i] + suffix;
​