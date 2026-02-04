function subtract(a, b) {
  function strip(s) {
    let i = 0;
    while (i < s.length - 1 && s[i] === '0') i++;
    return s.slice(i);
  }
​
  function cmp(x, y) {
    if (x.length !== y.length) return x.length - y.length;
    return x === y ? 0 : x > y ? 1 : -1;
  }
​
  function sub(x, y) {
    let res = '';
    let borrow = 0;
    let i = x.length - 1;
    let j = y.length - 1;
​
    while (i >= 0) {
      let d = x[i] - borrow - (j >= 0 ? y[j] : 0);
      if (d < 0) {
        d += 10;
        borrow = 1;
      } else {
        borrow = 0;
      }
      res = d + res;
      i--;
      j--;