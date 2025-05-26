/*
Your objective is to complete a function createSpiral(N) that receives an integer N and returns an NxN two-dimensional array with numbers 1 through NxN represented as a clockwise spiral.

Return an empty array if N < 1 or N is not int / number

Examples:

N = 3 Output: [[1,2,3],[8,9,4],[7,6,5]]

1    2    3    
8    9    4    
7    6    5    
N = 4 Output: [[1,2,3,4],[12,13,14,5],[11,16,15,6],[10,9,8,7]]

1   2   3   4
12  13  14  5
11  16  15  6
10  9   8   7
N = 5 Output: [[1,2,3,4,5],[16,17,18,19,6],[15,24,25,20,7],[14,23,22,21,8],[13,12,11,10,9]]

1   2   3   4   5    
16  17  18  19  6    
15  24  25  20  7    
14  23  22  21  8    
13  12  11  10  9
*/
function createSpiral(N) {
  if (typeof N !== 'number' || N < 1 || !Number.isInteger(N)) {
    return [];
  }

  let spiral = Array.from({ length: N }, () => Array.from({ length: N }, () => 0));

  let left = 0,
    right = N - 1,
    top = 0,
    bottom = N - 1;
  let direction = 0; 
  let num = 1; 

  while (left <= right && top <= bottom) {
    if (direction === 0) {
      for (let i = left; i <= right; i++) {
        spiral[top][i] = num++;
      }
      top++;
    } else if (direction === 1) {
      for (let i = top; i <= bottom; i++) {
        spiral[i][right] = num++;
      }
      right--;
    } else if (direction === 2) {
      for (let i = right; i >= left; i--) {
        spiral[bottom][i] = num++;
      }
      bottom--;
    } else if (direction === 3) {
      for (let i = bottom; i >= top; i--) {
        spiral[i][left] = num++;
      }
      left++;
    }
    direction = (direction + 1) % 4;
  }

  return spiral;
}