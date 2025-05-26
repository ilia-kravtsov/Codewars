/*
Given a name, turn that name into a perfect square matrix (nested array with the amount of arrays equivalent to the length of each array).

You will need to add periods (.) to the end of the name if necessary, to turn it into a matrix.

If the name has a length of 0, return "name must be at least one letter"

Examples
"Bill" ==> [ ["B", "i"],
             ["l", "l"] ]

"Frank" ==> [ ["F", "r", "a"],
              ["n", "k", "."],
              [".", ".", "."] ]
*/

const matrixfy = (str) => {
  if (str.length === 0) return "name must be at least one letter";

  const length = Math.ceil(Math.sqrt(str.length));
  const matrix = Array(length)
    .fill(".")
    .map(() => Array(length).fill("."));

  for (let i = 0; i < str.length; i++) {
    const row = Math.floor(i / length);
    const col = i % length;
    matrix[row][col] = str[i];
  }

  return matrix;
};
