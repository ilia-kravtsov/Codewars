function wordSquare(letters) {
  const len = letters.length;
  const n = Math.sqrt(len);
  if (!Number.isInteger(n)) return false;
​
  const freq = new Map();
  for (let i = 0; i < len; i++) {
    const ch = letters[i];
    freq.set(ch, (freq.get(ch) || 0) + 1);
  }
​
  let odd = 0;
  for (const c of freq.values()) {
    if (c % 2 !== 0) odd++;
  }
​
  return odd <= n;
}
​