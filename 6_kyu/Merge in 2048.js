/*
The main part of this game is merging identical tiles in a row.

Implement a function that models the process of merging all of the tile values in a single row.
This function takes the array line as a parameter and returns a new array with the tile values from line slid towards the front of the array (index 0) and merged.
A given tile can only merge once.
Empty grid squares are represented as zeros.
Your function should work on arrays containing arbitrary number of elements.
Examples
merge([2,0,2,2])  -->  [4,2,0,0]
Another example with repeated merges:

merge([4,4,8,16])  -->  [8,8,16,0]
merge([8,8,16,0])  -->  [16,16,0,0]
merge([16,16,0,0]) -->  [32,0,0,0]
*/
function merge(line) {
  const result = [];

  for (let i = 0; i < line.length; i++) {
    if (line[i] !== 0) {
      result.push(line[i]);
    }
  }

  for (let i = 0; i < result.length - 1; i++) {
    if (result[i] === result[i + 1]) {
      result[i] *= 2;
      result[i + 1] = 0;
    }
  }

  const mergedResult = result.filter((value) => value !== 0);

  while (mergedResult.length < line.length) {
    mergedResult.push(0);
  }

  return mergedResult;
}
