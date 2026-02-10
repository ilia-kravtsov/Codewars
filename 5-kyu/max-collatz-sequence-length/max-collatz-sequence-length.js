function MaxCollatzLength(n) {
  if (!Number.isInteger(n) || n <= 0) return [];
​
  const memo = new Map();
  memo.set(1, 1);
​
  function collatzLen(x) {
    if (memo.has(x)) return memo.get(x);
​
    const path = [];
    let cur = x;
​
    while (!memo.has(cur)) {
      path.push(cur);
      if ((cur & 1) === 0) {
        cur = cur / 2;
      } else {
        cur = (3 * cur + 1) / 2;
      }
    }
​
    let len = memo.get(cur);
​
    for (let i = path.length - 1; i >= 0; i--) {
      const v = path[i];
      len += ((v & 1) === 0) ? 1 : 2;
      memo.set(v, len);
    }
​
    return memo.get(x);
  }
​
  let start = Math.floor(n / 2) + 1;
  if (n === 1) start = 1;
​
  let bestNum = 1;
  let bestLen = 1;
​
  for (let i = start; i <= n; i++) {
    const L = collatzLen(i);
    if (L > bestLen || (L === bestLen && i < bestNum)) {
      bestLen = L;
      bestNum = i;
    }
  }
​
  return [bestNum, bestLen];
}
​