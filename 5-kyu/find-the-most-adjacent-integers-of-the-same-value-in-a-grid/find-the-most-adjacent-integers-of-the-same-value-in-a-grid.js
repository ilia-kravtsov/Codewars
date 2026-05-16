function findMostAdjacent(grid) {
  const n = grid.length;
  const visited = Array.from({ length: n }, () => Array(n).fill(false));
​
  let bestValue = Infinity;
  let bestSize = 0;
​
  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
​
  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      if (visited[r][c]) continue;
​
      const value = grid[r][c];
      let size = 0;
      const stack = [[r, c]];
      visited[r][c] = true;
​
      while (stack.length) {
        const [x, y] = stack.pop();
        size++;
​
        for (const [dx, dy] of dirs) {
          const nx = x + dx;
          const ny = y + dy;
​
          if (
            nx >= 0 &&
            nx < n &&