/*
Task
You have been given a matrix filled with 1s and 0s, where 1 represents a wall, and 0 represents empty space.

Your task is to find the largest room in the given matrix, i.e. the largest area filled only with 0s.

Input/Output
[input] 2D integer array rooms
A rectangular matrix filled with 1s and 0s.

[output] an integer
The area of the largest room.

Example
For

rooms = [[1,1,1,1,1,1], 
           [1,0,1,0,0,1],
           [1,0,1,0,0,1],
           [1,1,1,1,1,1]]```
the output should be `4`.

 For
rooms = [[1, 0], [0, 1]]``` the output should be 1.
*/

function largestRoomArea(rooms) {
  if (!rooms.length || !rooms[0].length) return 0;

  const rows = rooms.length;
  const cols = rooms[0].length;
  let maxArea = 0;

  const visited = Array.from({ length: rows }, () => Array(cols).fill(false));

  function dfs(i, j) {
    if (
      i < 0 ||
      i >= rows ||
      j < 0 ||
      j >= cols ||
      rooms[i][j] !== 0 ||
      visited[i][j]
    ) {
      return 0;
    }

    visited[i][j] = true;

    let area = 1;
    area += dfs(i + 1, j);
    area += dfs(i - 1, j);
    area += dfs(i, j + 1);
    area += dfs(i, j - 1);

    return area;
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (rooms[i][j] === 0 && !visited[i][j]) {
        maxArea = Math.max(maxArea, dfs(i, j));
      }
    }
  }

  return maxArea;
}