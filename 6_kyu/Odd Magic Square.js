/*
Your task is to create a magic square for any positive odd integer N. The magic square contains the integers from 1 to N * N, arranged in an NxN matrix, such that the columns, rows and both main diagonals add up to the same number.

Note: use have to use the Siamese method for this task.

Examples:
n = 3
result = [
  [8, 1, 6],
  [3, 5, 7],
  [4, 9, 2]
]


n = 5
result = [
  [17, 24,  1,  8, 15],
  [23,  5,  7, 14, 16],
  [ 4,  6, 13, 20, 22],
  [10, 12, 19, 21,  3],
  [11, 18, 25,  2,  9]
]
*/
function magicSquare(n) {
  if (n % 2 === 0) {
    throw new Error('The input must be an odd number.');
  }

  const magic = Array.from({ length: n }, () => Array(n).fill(0));
  
  let num = 1;
  let row = 0;
  let col = Math.floor(n / 2); 

  while (num <= n * n) {
    magic[row][col] = num; 

    const newRow = (row - 1 + n) % n; 
    const newCol = (col + 1) % n;     

    if (magic[newRow][newCol] !== 0) {
      row = (row + 1) % n;
    } else {
      row = newRow;
      col = newCol;
    }

    num++;
  }

  return magic;
}

