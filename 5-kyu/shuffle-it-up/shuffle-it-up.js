function allPermuted(l) {
  if (l === 0) return 1n;
  if (l === 1) return 0n;
​
  let a = 1n;
  let b = 0n;
​
  for (let i = 2n; i <= BigInt(l); i++) {
    const c = (i - 1n) * (a + b);
    a = b;
    b = c;
  }
​
  return b;
}
​