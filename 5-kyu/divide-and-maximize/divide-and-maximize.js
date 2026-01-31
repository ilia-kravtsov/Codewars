function divideAndMultiply(bigints) {
  const MOD = 1_000_000_007n;
​
  let totalPowers = 0n;
  let odds = [];
​
  for (let x of bigints) {
    let v = BigInt(x);
    let count = 0n;
​
    while ((v & 1n) === 0n) {
      v >>= 1n;
      count++;
    }
​
    odds.push(v);
    totalPowers += count;
  }
​
  odds.sort((a, b) => (a > b ? -1 : 1));
​
  let pow2 = 1n;
  let base = 2n;
  let exp = totalPowers;
​
  while (exp > 0n) {
    if (exp & 1n) pow2 = (pow2 * base) % MOD;
    base = (base * base) % MOD;
    exp >>= 1n;
  }
​
  let result = (odds[0] % MOD) * pow2 % MOD;
​
  for (let i = 1; i < odds.length; i++) {
    result = (result + odds[i]) % MOD;
  }
​
  return result;
}
​