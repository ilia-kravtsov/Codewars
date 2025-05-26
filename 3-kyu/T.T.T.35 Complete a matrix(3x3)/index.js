/*
Description
Here is a matrix(3x3), each element is a positive integer. We don't know all of their values, but we know the sum of each row and each column are equal. This matrix is not complete, please fill in all the numbers.

Task
Complete function completeMatrix() that accepts a argument matrix. This matrix has some null values. Please fill in the correct number and return it.

If the matrix is not possible to complete (the condition is not enough or the value is wrong), please return null.

Examples
matrix=[
[ 10 ,null, 3  ],
[ 4  ,null, 16 ],
[null, 12 ,null]
]
completeMatrix(matrix) should return:
[
[10, 8, 3],
[ 4, 1,16],
[ 7,12, 2]
]
because: 10+8+3=21,4+1+16=21,7+12+2=21  //rows
         10+4+7=21,8+1+12=21,3+16+2=21  //columns

matrix=[
[ 10 ,null, 8  ],
[ null,11, 6 ],
[null, 7 ,null]
]
completeMatrix(matrix) should return null
because the condition is not enough

matrix=[
[ 10 ,null,  8 ],
[null,null,  6 ],
[ 8  ,  7 ,null]
]
completeMatrix(matrix) should return null
because the value is wrong, 
8+6+num and 8+7+num is not possible equal

matrix=[
[null,17,4],
[null,3,null],
[null,1,18]
] 
completeMatrix(matrix) should return null
because the value is wrong, 
the possible result contains negative number
*/

function completeMatrix(matrix) {
  const n = 3;
  const base = matrix.map((row) => row.slice());

  let S = null;
  for (let i = 0; i < n; i++) {
    if (base[i].every((x) => x !== null)) {
      const sum = base[i].reduce((a, b) => a + b, 0);
      if (S === null) S = sum;
      else if (S !== sum) return null;
    }
  }
  for (let j = 0; j < n; j++) {
    let col = [base[0][j], base[1][j], base[2][j]];
    if (col.every((x) => x !== null)) {
      const sum = col.reduce((a, b) => a + b, 0);
      if (S === null) S = sum;
      else if (S !== sum) return null;
    }
  }

  let lowerBound = 0;
  for (let i = 0; i < n; i++) {
    let known = 0,
      missing = 0;
    for (let j = 0; j < n; j++) {
      if (base[i][j] === null) missing++;
      else known += base[i][j];
    }
    lowerBound = Math.max(lowerBound, known + missing);
  }
  for (let j = 0; j < n; j++) {
    let known = 0,
      missing = 0;
    for (let i = 0; i < n; i++) {
      if (base[i][j] === null) missing++;
      else known += base[i][j];
    }
    lowerBound = Math.max(lowerBound, known + missing);
  }

  const maxCandidate = S === null ? lowerBound + 100 : S;
  let solution = null;

  for (
    let candidate = S === null ? lowerBound : S;
    candidate <= maxCandidate;
    candidate++
  ) {
    let M = base.map((row) => row.slice());
    let progress = true;
    let valid = true;

    while (progress) {
      progress = false;

      for (let i = 0; i < n; i++) {
        let missingIndices = [];
        let sumKnown = 0;
        for (let j = 0; j < n; j++) {
          if (M[i][j] === null) missingIndices.push(j);
          else sumKnown += M[i][j];
        }
        if (missingIndices.length === 1) {
          let val = candidate - sumKnown;
          if (val <= 0) {
            valid = false;
            break;
          }
          M[i][missingIndices[0]] = val;
          progress = true;
        }
      }
      if (!valid) break;

      for (let j = 0; j < n; j++) {
        let missingIndices = [];
        let sumKnown = 0;
        for (let i = 0; i < n; i++) {
          if (M[i][j] === null) missingIndices.push(i);
          else sumKnown += M[i][j];
        }
        if (missingIndices.length === 1) {
          let val = candidate - sumKnown;
          if (val <= 0) {
            valid = false;
            break;
          }
          M[missingIndices[0]][j] = val;
          progress = true;
        }
      }
    }
    if (!valid) continue;

    if (M.some((row) => row.some((x) => x === null))) continue;

    let ok = true;
    for (let i = 0; i < n && ok; i++) {
      const sum = M[i].reduce((a, b) => a + b, 0);
      if (sum !== candidate) ok = false;
    }
    for (let j = 0; j < n && ok; j++) {
      let colSum = 0;
      for (let i = 0; i < n; i++) colSum += M[i][j];
      if (colSum !== candidate) ok = false;
    }
    if (!ok) continue;

    if (solution !== null) return null;
    solution = M;
  }

  return solution;
}