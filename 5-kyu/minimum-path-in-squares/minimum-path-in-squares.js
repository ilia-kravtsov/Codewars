function minPath(grid, x, y) {
  const dp = Array.from({ length: y + 1 }, () => Array(x + 1).fill(Infinity))
​
  dp[0][0] = grid[0][0]
​
  for (let i = 0; i <= y; i++) {
    for (let j = 0; j <= x; j++) {
      if (i === 0 && j === 0) continue
​
      const fromTop = i > 0 ? dp[i - 1][j] : Infinity
      const fromLeft = j > 0 ? dp[i][j - 1] : Infinity
​
      dp[i][j] = grid[i][j] + Math.min(fromTop, fromLeft)
    }
  }
​
  return dp[y][x]
}
​