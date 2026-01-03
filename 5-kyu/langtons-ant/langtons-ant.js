function ant(grid, column, row, n, dir = 0) {
  const dirs = [
    [0, -1],  
    [1, 0],   
    [0, 1],   
    [-1, 0],  
  ];
​
  for (let i = 0; i < n; i++) {
    if (grid[row][column] === 1) {
      dir = (dir + 1) % 4;
      grid[row][column] = 0;
    } else {
      dir = (dir + 3) % 4;
      grid[row][column] = 1;
    }
​
    column += dirs[dir][0];
    row += dirs[dir][1];
​
    if (row < 0) {
      grid.unshift(Array(grid[0].length).fill(0));
      row = 0;
    } else if (row >= grid.length) {
      grid.push(Array(grid[0].length).fill(0));
    }
​
    if (column < 0) {
      for (let r of grid) r.unshift(0);
      column = 0;
    } else if (column >= grid[0].length) {
      for (let r of grid) r.push(0);
    }
  }
​
  return grid;
}
​