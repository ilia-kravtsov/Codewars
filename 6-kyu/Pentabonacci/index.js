function countOddPentaFib(n) {
  if (n === 0) return 0;
​
  const terms = n + 1;
  const fullBlocks = Math.floor(terms / 6);
  const remainder = terms % 6;
​
  const oddTerms =
    fullBlocks * 2 +
    Math.min(Math.max(remainder - 1, 0), 2);
​
  return oddTerms - (n >= 2 ? 1 : 0);
}