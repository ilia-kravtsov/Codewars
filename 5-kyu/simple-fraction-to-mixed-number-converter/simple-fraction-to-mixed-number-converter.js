function mixedFraction(s) {
  let [num, den] = s.split('/').map(Number);
​
  if (den === 0) throw new Error("ZeroDivisionError");
  if (num === 0) return "0";
​
  const sign = (num * den < 0) ? "-" : "";
​
  num = Math.abs(num);
  den = Math.abs(den);
​
  const integer = Math.floor(num / den);
  let remainder = num % den;
​
  if (remainder === 0) {
    return sign + integer.toString(); 
  }
​
  const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
  const g = gcd(remainder, den);
  remainder /= g;
  den /= g;
​
  if (integer === 0) {
    return sign + `${remainder}/${den}`;
  } else {
    return sign + `${integer} ${remainder}/${den}`;
  }
}