function squareFreePart(n) {
  let result = 1;
  let d = 2;
​
  while (d * d <= n) {
    if (n % d === 0) {
      result *= d;
      while (n % d === 0) {
        n /= d;
      }
    }
    d++;
  }
​
  if (n > 1) result *= n;
​
  return result;
}