function middlePermutation(s) {
  let arr = s.split("").sort();
  const n = arr.length;

  let factorials = [1n];
  for (let i = 1; i <= n; i++) {
    factorials[i] = factorials[i - 1] * BigInt(i);
  }

  let index = factorials[n] / 2n - 1n;
  let result = "";

  for (let i = n; i > 0; i--) {
    const f = factorials[i - 1];
    let pos = index / f;
    pos = Number(pos);
    result += arr[pos];
    arr.splice(pos, 1);
    index %= f;
  }

  return result;
}
