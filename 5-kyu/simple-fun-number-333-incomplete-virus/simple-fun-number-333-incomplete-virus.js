function incompleteVirus(n) {
  const len = n.length;
  let ans = 0n;
​
  if (len > 1) {
    ans += (1n << BigInt(len - 1)) - 1n;
  }
​
  if (n[0] > "1") {
    ans += 1n << BigInt(len - 1);
    return ans <= BigInt(Number.MAX_SAFE_INTEGER) ? Number(ans) : ans.toString();
  }
​
  if (n[0] === "0") {
    return 0;
  }
​
  for (let i = 1; i < len; i++) {
    const rem = len - i - 1;
​
    if (n[i] === "1") {
      ans += 1n << BigInt(rem);
    } else if (n[i] > "1") {
      ans += 1n << BigInt(rem + 1);
      return ans <= BigInt(Number.MAX_SAFE_INTEGER) ? Number(ans) : ans.toString();
    }
  }
​
  ans += 1n;
  return ans <= BigInt(Number.MAX_SAFE_INTEGER) ? Number(ans) : ans.toString();
}