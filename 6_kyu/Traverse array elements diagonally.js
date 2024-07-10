/*
In this kata you're given an n x n array and you're expected to traverse the elements diagonally from the bottom right to the top left.

Example
  1 6 7
  7 2 4
  3 5 9
your solution should return elements in the following order

9
4 5
7 2 3
6 7
1
//=> [9, 4, 5, 7, 2, 3, 6, 7, 1]

Your task is to write the function diagonal() that returns the array elements in the above manner.

Another Example
arr = [
 [4, 5, 7],
 [3, 9, 1],
 [7, 6, 2]
]

diagonal(arr) //=> [2, 1, 6, 7, 9, 7, 5, 3, 4]
You can assume the test cases are well formed.
*/

function diagonal(arr) {
  let result = [];
  const n = arr.length;
  let diagStart = 2 * n - 1;

  for(let k = diagStart; k >= 0; k--) {
    let iStart = Math.max(0, k - n + 1);
    let iEnd = Math.min(k, n - 1);

    for(let i = iStart; i <= iEnd; i++) {
      let j = k - i;
      result.push(arr[i][j]);
    }
  }
  
  return result;
}