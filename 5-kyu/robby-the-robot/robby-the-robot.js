function getCommands(field, power) {
  const n = Math.sqrt(field.length)
  const grid = []
  for (let i = 0; i < n; i++) grid.push(field.slice(i * n, i * n + n))
​
  let sx, sy, tx, ty
  for (let y = 0; y < n; y++) {
    for (let x = 0; x < n; x++) {
      if (grid[y][x] === 'S') { sx = x; sy = y }
      if (grid[y][x] === 'T') { tx = x; ty = y }
    }
  }
​
  const dirs = [
    [0, -1],
    [1, 0],
    [0, 1],
    [-1, 0]
  ]
​
  const queue = [[sx, sy, 0]]
  const dist = Array.from({ length: n }, () =>
    Array.from({ length: n }, () => Array(4).fill(Infinity))