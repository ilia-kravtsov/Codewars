const BigNumber = require('bignumber.js');
​
const digits = [null, 1];
const powers = [0n];
​
function buildUntil(maxTerm) {
  for (let term = digits.length; term <= maxTerm; term++) {
    const n = term - 1;
    let sum = 0n;
​
    for (let k = 1; k < n; k++) {
      powers[k] *= BigInt(k);
      sum += powers[k];
    }
​
    powers[n] = BigInt(n);
    sum += powers[n];
​
    digits[term] = sum.toString().length;
  }
}
​
function minLengthNum(numDig, ordMax) {
  buildUntil(ordMax);
​
  for (let term = 1; term <= ordMax; term++) {
    if (digits[term] === numDig) {
      return [true, term];
    }
  }
​
  return [false, -1];
}