function sumDifRev(n) {
  const seq = [];
  let i = 10;
  while (seq.length < n) {
    const rev = +[...String(i)].reverse().join('');
    if (String(rev).length !== String(i).length) {
      i++;
      continue;
    }
    const sum = i + rev;
    const diff = Math.abs(i - rev);
    if (diff !== 0 && sum % diff === 0) seq.push(i);
    i++;
  }
  return seq[n - 1];
}
​