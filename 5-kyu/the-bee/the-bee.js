function theBee(n) {
  let m = 2 * n - 1, h = [], a = [1n];
  for (let x = 0; x < m; x++) h[x] = n + Math.min(x, m - 1 - x);
  for (let x = 0; x < m - 1; x++) {
    for (let i = 1; i < h[x]; i++) a[i] = (a[i] || 0n) + a[i - 1];
    let b = Array(h[x + 1]).fill(0n);
    if (h[x + 1] > h[x]) {
      for (let i = 0; i < h[x]; i++) b[i] += a[i], b[i + 1] += a[i];
    } else {
      for (let i = 0; i < h[x]; i++) {
        if (i) b[i - 1] += a[i];
        if (i < h[x + 1]) b[i] += a[i];
      }
    }
    a = b;
  }
  for (let i = 1; i < n; i++) a[i] += a[i - 1];
  return a[n - 1];
}