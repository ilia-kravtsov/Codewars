function findAdditiveNumbers(num) {
  const n = num.length;
​
  function addStrings(a, b) {
    let i = a.length - 1;
    let j = b.length - 1;
    let carry = 0;
    let res = '';
​
    while (i >= 0 || j >= 0 || carry) {
      const sum =
        (i >= 0 ? a.charCodeAt(i--) - 48 : 0) +
        (j >= 0 ? b.charCodeAt(j--) - 48 : 0) +
        carry;
​
      res = (sum % 10) + res;
      carry = Math.floor(sum / 10);
    }
​
    return res;
  }
​
  for (let i = 1; i <= Math.floor(n / 2); i++) {