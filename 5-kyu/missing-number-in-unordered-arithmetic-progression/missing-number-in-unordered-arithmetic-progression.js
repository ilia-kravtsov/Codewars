function find(seq) {
  let min = seq[0], max = seq[0], sum = 0;
  for (let i = 0; i < seq.length; i++) {
    const v = seq[i];
    if (v < min) min = v;
    if (v > max) max = v;
    sum += v;
  }
  const n = seq.length + 1;
  const expected = (n * (min + max)) / 2;
  return expected - sum;
}
​