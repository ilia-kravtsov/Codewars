function playOX3D(moves) {
  const size = 4;
  const board = Array.from({ length: size }, () =>
    Array.from({ length: size }, () =>
      Array(size).fill(null)
    )
  );
​
  const lines = [];
​
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      lines.push([...Array(size)].map((_, k) => [k, i, j]));
      lines.push([...Array(size)].map((_, k) => [i, k, j]));
      lines.push([...Array(size)].map((_, k) => [i, j, k]));
    }
  }
​
  for (let i = 0; i < size; i++) {
    lines.push([...Array(size)].map((_, k) => [k, k, i]));
    lines.push([...Array(size)].map((_, k) => [k, size - 1 - k, i]));
    lines.push([...Array(size)].map((_, k) => [k, i, k]));
    lines.push([...Array(size)].map((_, k) => [k, i, size - 1 - k]));
    lines.push([...Array(size)].map((_, k) => [i, k, k]));
    lines.push([...Array(size)].map((_, k) => [i, k, size - 1 - k]));
  }
​
  lines.push([...Array(size)].map((_, k) => [k, k, k]));
  lines.push([...Array(size)].map((_, k) => [k, k, size - 1 - k]));
  lines.push([...Array(size)].map((_, k) => [k, size - 1 - k, k]));
  lines.push([...Array(size)].map((_, k) => [size - 1 - k, k, k]));
​
  function checkWin(player) {
    return lines.some(line =>