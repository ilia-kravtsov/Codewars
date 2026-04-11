function frogsJumping(stones) {
  const set = new Set(stones);
  const last = stones[stones.length - 1];
  const dist = new Map();
  const next = new Map();
​
  dist.set(last, 0);
​
  for (let i = stones.length - 2; i >= 0; i--) {
    const x = stones[i];
    let best = Infinity;
    let bestJump = '';
​
    for (const jump of [1, 2]) {
      const y = x + jump;
      if (!set.has(y) || !dist.has(y)) continue;
​
      const cand = dist.get(y) + 1;
      if (cand < best || (cand === best && String(jump) < bestJump)) {
        best = cand;
        bestJump = String(jump);
      }
    }
​
    dist.set(x, best);
    next.set(x, bestJump);
  }
​
  let res = '';
  let cur = 0;
​
  while (cur !== last) {
    const jump = next.get(cur);
    res += jump;
    cur += +jump;
  }
​
  return res;
}