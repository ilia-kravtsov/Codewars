/*
Write a function that rotates a two-dimensional array (a matrix) either clockwise or anti-clockwise by 90 degrees, and returns the rotated array.

The function accepts two parameters: a matrix, and a string specifying the direction or rotation. The direction will be either "clockwise" or "counter-clockwise".

Examples
For matrix:

[
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
Clockwise rotation:

[
  [7, 4, 1],
  [8, 5, 2],
  [9, 6, 3]
]
Counter-clockwise rotation:

[
  [3, 6, 9],
  [2, 5, 8],
  [1, 4, 7]
]
*/
function rotate(matrix, direction) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  const rotatedMatrix = new Array(cols).fill(0).map(() => new Array(rows).fill(0));

  if (direction === 'counter-clockwise') {
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        rotatedMatrix[cols - 1 - j][i] = matrix[i][j];
      }
    }
  } else if (direction === 'clockwise') {
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        rotatedMatrix[j][rows - 1 - i] = matrix[i][j];
      }
    }
  }

  return rotatedMatrix;
}
