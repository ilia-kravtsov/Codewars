/*
The purpose of this kata is to write a program that can do some algebra.

Write a function expand that takes in an expression with a single, one character variable, and expands it. The expression is in the form (ax+b)^n where a and b are integers which may be positive or negative, x is any single character variable, and n is a natural number. If a = 1, no coefficient will be placed in front of the variable. If a = -1, a "-" will be placed in front of the variable.

The expanded form should be returned as a string in the form ax^b+cx^d+ex^f... where a, c, and e are the coefficients of the term, x is the original one character variable that was passed in the original expression and b, d, and f, are the powers that x is being raised to in each term and are in decreasing order.

If the coefficient of a term is zero, the term should not be included. If the coefficient of a term is one, the coefficient should not be included. If the coefficient of a term is -1, only the "-" should be included. If the power of the term is 0, only the coefficient should be included. If the power of the term is 1, the caret and power should be excluded.

Examples:
expand("(x+1)^2");      // returns "x^2+2x+1"
expand("(p-1)^3");      // returns "p^3-3p^2+3p-1"
expand("(2f+4)^6");     // returns "64f^6+768f^5+3840f^4+10240f^3+15360f^2+12288f+4096"
expand("(-2a-4)^0");    // returns "1"
expand("(-12t+43)^2");  // returns "144t^2-1032t+1849"
expand("(r+0)^203");    // returns "r^203"
expand("(-x-1)^2");     // returns "x^2+2x+1"
*/

https: function expand(expr) {
  const regex = /^\(([+-]?)(\d*)([a-z])([+-]\d+)\)\^(\d+)$/;
  const match = expr.match(regex);
  if (!match) return null;
  let signA = match[1] === "-" ? -1 : 1;
  let coeffAStr = match[2];
  let a = coeffAStr === "" ? 1 : parseInt(coeffAStr, 10);
  a *= signA;
  const variable = match[3];
  let b = parseInt(match[4], 10);
  let n = parseInt(match[5], 10);
  if (n === 0) return "1";
  const Big = (x) => BigInt(x);
  function binom(n, k) {
    let res = Big(1);
    for (let i = 1; i <= k; i++) {
      res = (res * Big(n - i + 1)) / Big(i);
    }
    return res;
  }
  let resStr = "";
  let firstTerm = true;
  for (let k = 0; k <= n; k++) {
    let power = n - k;
    let coeff = binom(n, k) * Big(a) ** Big(power) * Big(b) ** Big(k);
    if (coeff === Big(0)) continue;
    let coeffStr = "";
    let absCoeff = coeff < Big(0) ? -coeff : coeff;
    if (power === 0) {
      coeffStr = absCoeff.toString();
    } else if (power === 1) {
      coeffStr = (absCoeff === Big(1) ? "" : absCoeff.toString()) + variable;
    } else {
      coeffStr =
        (absCoeff === Big(1) ? "" : absCoeff.toString()) +
        variable +
        "^" +
        power;
    }
    let signStr = "";
    if (firstTerm) {
      if (coeff < Big(0)) signStr = "-";
    } else {
      signStr = coeff < Big(0) ? "-" : "+";
    }
    resStr += signStr + coeffStr;
    firstTerm = false;
  }
  return resStr;
}