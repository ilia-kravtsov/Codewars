function game(n) {
  const sq = n * n;
  if (sq === 0) return [0];
  if (sq % 2 === 0) return [sq / 2];
  return [sq, 2];
}