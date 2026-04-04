function bigModulo(numString, divisor) {
  let mod = 0;
​
  for (let i = 0; i < numString.length; i++) {
    mod = (mod * 10 + (numString.charCodeAt(i) - 48)) % divisor;
  }
​
  return mod;
}