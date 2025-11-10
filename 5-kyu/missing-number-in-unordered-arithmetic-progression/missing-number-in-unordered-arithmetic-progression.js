function find(seq) {
  const n = seq.length + 1;
  const min = Math.min(...seq);
  const max = Math.max(...seq);
  const expected = (n * (min + max)) / 2;
  const actual = seq.reduce((a, b) => a + b, 0);
  return expected - actual;
}
​