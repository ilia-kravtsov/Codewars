function getNum(arr) {
  const cnt = {};
  let n = 1;
​
  for (const p of arr) {
    n *= p;
    cnt[p] = (cnt[p] || 0) + 1;
  }
​
  let total = 1;
  for (const e of Object.values(cnt)) {
    total *= e + 1;
  }
​
  if (arr.length === 1) {
    return [n, 1, n, 1];
  }
​
  const min = Math.min(...arr);
  const max = n / min;
​
  return [n, total - 1, min, max];
}