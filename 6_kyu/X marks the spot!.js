/*
Write a function x(n) that takes in a number n and returns an nxn array with an X in the middle. The X will be represented by 1's and the rest will be 0's.
E.g.

x(5) === [[1, 0, 0, 0, 1],
          [0, 1, 0, 1, 0],
          [0, 0, 1, 0, 0],
          [0, 1, 0, 1, 0],
          [1, 0, 0, 0, 1]];
          
x(6) === [[1, 0, 0, 0, 0, 1],
          [0, 1, 0, 0, 1, 0],
          [0, 0, 1, 1, 0, 0],
          [0, 0, 1, 1, 0, 0],
          [0, 1, 0, 0, 1, 0],
          [1, 0, 0, 0, 0, 1]];
*/

function x(n) {
  let arr = new Array(n).fill().map(() => new Array(n).fill(0));

  for (let i = 0; i < n; i++) {
    arr[i][i] = 1;
    arr[i][n - i - 1] = 1;
  }

  return arr;
}
