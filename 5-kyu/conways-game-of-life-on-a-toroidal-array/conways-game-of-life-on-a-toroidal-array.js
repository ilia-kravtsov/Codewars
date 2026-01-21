function getGeneration(cells, generations) {
  const h = cells.length
  const w = cells[0].length
​
  const next = grid =>
    grid.map((row, y) =>
      row.map((cell, x) => {
        let n = 0
​
        for (let dy = -1; dy <= 1; dy++) {
          for (let dx = -1; dx <= 1; dx++) {
            if (dx === 0 && dy === 0) continue
            n += grid[(y + dy + h) % h][(x + dx + w) % w]
          }
        }
​
        return cell ? +(n === 2 || n === 3) : +(n === 3)
      })
    )
​
  let grid = cells
  for (let i = 0; i < generations; i++) {
    grid = next(grid)
  }
​
  return grid
}
​