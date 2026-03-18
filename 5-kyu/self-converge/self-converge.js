function selfConverge(number) {
  const width = String(number).length;
​
  function nextValue(n) {
    const digits = String(n).padStart(width, '0').split('');
    const asc = digits.slice().sort().join('');
    const desc = digits.slice().sort().reverse().join('');
    return Number(desc) - Number(asc);
  }
​
  function go(n, seen, count) {
    const nxt = nextValue(n);
​
    if (nxt === 0) return -1;
    if (seen.has(nxt)) return count + 1;
​
    seen.add(nxt);
    return go(nxt, seen, count + 1);
  }
​
  return go(number, new Set([number]), 0);
}