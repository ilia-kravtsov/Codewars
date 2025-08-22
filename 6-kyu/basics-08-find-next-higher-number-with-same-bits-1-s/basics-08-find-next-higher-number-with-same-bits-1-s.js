function nextHigher(n) {
  let c = n & -n;
  let r = n + c;
  return (((r ^ n) >> 2) / c) | r;
}