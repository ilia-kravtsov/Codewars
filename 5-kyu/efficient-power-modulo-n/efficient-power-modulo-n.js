function modpow(x, y, n) {
  x = x % n;
  let result = 1n;
  let base = BigInt(x);
  let exponent = BigInt(y);
  let mod = BigInt(n);
​
  while (exponent > 0n) {
    if (exponent % 2n === 1n) { 
      result = (result * base) % mod;
    }
    base = (base * base) % mod;
    exponent = exponent / 2n;
  }
​
  return Number(result);
}
​