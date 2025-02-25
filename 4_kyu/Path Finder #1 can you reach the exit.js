/*
You are at position [0, 0] in maze NxN and you can only move in one of the four cardinal directions (i.e. North, East, South, West). Return true if you can reach position [N-1, N-1] or false otherwise.

Empty positions are marked ..
Walls are marked W.
Start and exit positions are empty in all test cases.
*/

function pathFinder(maze) {
  const rows = maze.split("\n");
  const n = rows.length;

  const queue = [[0, 0]];
  const visited = new Set();
  visited.add("0,0");

  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  while (queue.length > 0) {
    const [x, y] = queue.shift();

    if (x === n - 1 && y === n - 1) return true;

    for (const [dx, dy] of directions) {
      const newX = x + dx;
      const newY = y + dy;

      if (newX >= 0 && newX < n && newY >= 0 && newY < n) {
        if (rows[newX][newY] !== "W" && !visited.has(`${newX},${newY}`)) {
          visited.add(`${newX},${newY}`);
          queue.push([newX, newY]);
        }
      }
    }
  }

  return false;
}