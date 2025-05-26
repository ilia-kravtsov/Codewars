// Connecting Values

/*
Given a two-dimensional array of non negative integers arr, a value val, and a coordinate coord in the form (row, column), return an iterable (depending on the language) of all of the coordinates that contain the given value and are connected to the original coordinate by the given value. Connections may be made horizontally, vertically, and diagonally. If the value of arr at coord is not equal to val, return an empty iterable. The coordinates must include the original coordinate and may be in any order.

Examples:
With the following array:

    [1,0,2,0,2,1]
    [1,0,2,1,5,7]
    [4,1,1,0,1,9]
With val 1 and coord (0, 0), the output should contain (the order doesn't matter and the actual data structure depends on the language):

[(2, 4), (2, 1), (0, 0), (2, 2), (1, 0), (1, 3)]
With value 2 and coord (0,  2):

[(0, 2), (1, 2)]
With value 0 and coord (0, 0), the output should be empty.
*/

function connectedValues(arr, val, coord) {
  const result = [];
  const visited = new Set();

  // Helper function to check if a coordinate is valid and unvisited
  function isValidCoordinate(row, col) {
    return (
      row >= 0 &&
      row < arr.length &&
      col >= 0 &&
      col < arr[row].length &&
      !visited.has(`${row},${col}`)
    );
  }

  // Helper function to perform depth-first search
  function dfs(row, col) {
    visited.add(`${row},${col}`);
    result.push([row, col]);

    // Check neighboring coordinates
    const neighbors = [
      [-1, 0], // Up
      [1, 0], // Down
      [0, -1], // Left
      [0, 1], // Right
      [-1, -1], // Diagonal Up-Left
      [-1, 1], // Diagonal Up-Right
      [1, -1], // Diagonal Down-Left
      [1, 1], // Diagonal Down-Right
    ];

    for (const [dr, dc] of neighbors) {
      const newRow = row + dr;
      const newCol = col + dc;

      if (isValidCoordinate(newRow, newCol) && arr[newRow][newCol] === val) {
        dfs(newRow, newCol);
      }
    }
  }

  // Check if the initial coordinate is valid and has the given value
  const [startRow, startCol] = coord;
  if (
    isValidCoordinate(startRow, startCol) &&
    arr[startRow][startCol] === val
  ) {
    dfs(startRow, startCol);
  }

  return result;
}