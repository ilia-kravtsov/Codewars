function canCast(pool, ...costs) {
  const parse = (str) => {
    let num = '';
    const res = { C: 0, B: 0, G: 0, R: 0, U: 0, W: 0 };
​
    for (const ch of str) {
      if (ch >= '0' && ch <= '9') {
        num += ch;
      } else {
        if (num) {
          res.C += +num;
          num = '';
        }
        res[ch]++;
      }
    }
​
    if (num) res.C += +num;
    return res;
  };
​
  const poolMana = parse(pool);
​
  for (const cost of costs) {
    const need = parse(cost);
​
    for (const color of ['B', 'G', 'R', 'U', 'W']) {
      if (poolMana[color] < need[color]) return false;
      poolMana[color] -= need[color];
    }
​
    let totalColorless =
      poolMana.C +
      poolMana.B +
      poolMana.G +
      poolMana.R +
      poolMana.U +
      poolMana.W;
​
    if (totalColorless < need.C) return false;
​
    let remaining = need.C;
​
    const usedFromC = Math.min(poolMana.C, remaining);
    poolMana.C -= usedFromC;
    remaining -= usedFromC;
​
    for (const color of ['B', 'G', 'R', 'U', 'W']) {
      if (remaining === 0) break;
      const used = Math.min(poolMana[color], remaining);
      poolMana[color] -= used;
      remaining -= used;
    }
  }
​
  return true;
}