function bigPrimefacDiv(n) {
  const msg = "The number has a decimal part.";
  if (typeof n !== "number" || !Number.isFinite(n)) return msg;
​
  const eps = 1e-12;
  const rounded = Math.round(n);
  if (Math.abs(n - rounded) > eps) return msg;
​
  const N = Math.abs(rounded);
  if (N < 2) return [];
​
  let x = N;
  let spf = 0;
  let lpf = 0;
​
  if (x % 2 === 0) {
    spf = 2;
    lpf = 2;
    while (x % 2 === 0) x /= 2;
  }
​
  for (let d = 3; d * d <= x; d += 2) {
    if (x % d === 0) {
      if (!spf) spf = d;
      lpf = d;
      while (x % d === 0) x /= d;
    }
  }
​
  if (x > 1) {
    if (!spf) spf = x; 
    lpf = x;
  }
​
  if (spf === N) return []; 
​
  const maxDiv = N / spf; 
  return [lpf, maxDiv];
}