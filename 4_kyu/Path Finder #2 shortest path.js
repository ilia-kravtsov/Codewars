function pathFinder(maze) {
  const grid = maze.split('\n');
  const n = grid.length;
  
  const queue = [[0, 0, 0]];
  const visited = new Set(["0,0"]);
  
  const directions = [
    [-1, 0], 
    [1, 0], 
    [0, -1], 
    [0, 1]  
  ];
  
  while (queue.length > 0) {
    const [row, col, steps] = queue.shift();
    
    if (row === n - 1 && col === n - 1) return steps;
    
    for (const [dr, dc] of directions) {
      const newRow = row + dr;
      const newCol = col + dc;
      const key = newRow + ',' + newCol;
      
      if (
        newRow >= 0 && newRow < n &&
        newCol >= 0 && newCol < n &&
        grid[newRow][newCol] === '.' &&
        !visited.has(key)
      ) {
        visited.add(key);
        queue.push([newRow, newCol, steps + 1]);
      }
    }
  }
  
  return false;
}
