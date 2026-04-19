function series(k, nb) {
  const B = {
    0: 1,
    1: -1 / 2,
    2: 1 / 6,
    4: -1 / 30,
    6: 1 / 42,
    8: -1 / 30,
    10: 5 / 66,
    12: -691 / 2730,
    14: 7 / 6,
    16: -3617 / 510,
    18: 43867 / 798,
    20: -174611 / 330,
    22: 854513 / 138,
    24: -236364091 / 2730,
    26: 8553103 / 6,
    28: -23749461029 / 870,
    30: 8615841276005 / 14322
  };
​
  function bernoulli(n) {
    if (n === 1) return -1 / 2;
    if (n > 1 && n % 2 === 1) return 0;
    return B[n] || 0;
  }
​
  function factorial(n) {
    let res = 1;
    for (let i = 2; i <= n; i++) res *= i;
    return res;
  }
​
  if (k > 1) {
    if (k % 2 === 1) {
      let sum = 0;
      for (let n = 1; n <= nb; n++) {
        sum += 1 / Math.pow(n, k);
      }
      return sum;
    }
​
    const bk = Math.abs(bernoulli(k));
    return 0.5 * bk * Math.pow(2 * Math.PI, k) / factorial(k);
  }
​
  const m = -k;
  return Math.pow(-1, m) * bernoulli(m + 1) / (m + 1);
}