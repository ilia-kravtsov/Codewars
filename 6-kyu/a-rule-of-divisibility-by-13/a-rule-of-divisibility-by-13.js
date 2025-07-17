function thirt(n) {
  const pattern = [1, 10, 9, 12, 3, 4];
  let prev = -1;
​
  while (n !== prev) {
    prev = n;
    n = String(n)
      .split('')
      .reverse()
      .reduce((sum, digit, i) => sum + digit * pattern[i % pattern.length], 0);
  }
​
  return n;
}
​