function connectedComponents(image) {
  const grid = image.trim().split("\n").map(r => r.split(""));
  const h = grid.length;
  const w = grid[0].length;

  const visited = new Set();

  function key(x, y) {
    return x + "," + y;
  }

  function dfs(x, y) {
    const stack = [[x, y]];

    while (stack.length) {
      const [i, j] = stack.pop();

      const k = key(i, j);
      if (visited.has(k)) continue;

      visited.add(k);

      const dirs = [
        [1, 0], [-1, 0],
        [0, 1], [0, -1]
      ];

      for (const [dx, dy] of dirs) {
        const ni = i + dx;
        const nj = j + dy;

        if (
          ni >= 0 && ni < h &&
          nj >= 0 && nj < w &&
          grid[ni][nj] === "*" &&
          !visited.has(key(ni, nj))
        ) {
          stack.push([ni, nj]);
        }
      }
    }
  }

  let count = 0;

  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (grid[i][j] === "*" && !visited.has(key(i, j))) {
        dfs(i, j);
        count++;
      }
    }
  }

  return count;
}