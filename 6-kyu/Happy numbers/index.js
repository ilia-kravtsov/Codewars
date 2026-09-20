function isHappy(n) {
  const seen = new Set();
​
  while (n !== 1) {
    if (seen.has(n)) {
      return false;
    }
​
    seen.add(n);
​
    n = String(n)
      .split('')
      .reduce((sum, digit) => sum + Number(digit) ** 2, 0);
  }
​
  return true;
}