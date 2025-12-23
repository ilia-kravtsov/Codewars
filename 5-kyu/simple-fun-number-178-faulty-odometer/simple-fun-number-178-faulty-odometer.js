function faultyOdometer(n) {
  let res = 0;
  let base = 1;
​
  while (n > 0) {
    let d = n % 10;
    if (d > 4) d--;
    res += d * base;
    base *= 9;
    n = Math.floor(n / 10);
  }
​
  return res;
}
​