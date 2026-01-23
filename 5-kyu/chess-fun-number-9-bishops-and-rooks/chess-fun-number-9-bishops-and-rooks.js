function bishopsAndRooks(chessboard) {
  const n = 8;
  const attacked = Array.from({ length: n }, () => Array(n).fill(false));
  const dirsRook = [[1,0],[-1,0],[0,1],[0,-1]];
  const dirsBishop = [[1,1],[1,-1],[-1,1],[-1,-1]];
​
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const piece = chessboard[i][j];
      if (piece === 0) continue;
​
      const dirs = piece === 1 ? dirsRook : dirsBishop;
​
      for (const [dx, dy] of dirs) {
        let x = i + dx, y = j + dy;
        while (x >= 0 && x < n && y >= 0 && y < n) {
          if (chessboard[x][y] !== 0) break;
          attacked[x][y] = true;
          x += dx;
          y += dy;
        }
      }
    }
  }
​
  let safe = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (chessboard[i][j] === 0 && !attacked[i][j]) safe++;
    }
  }
​
  return safe;
}
​