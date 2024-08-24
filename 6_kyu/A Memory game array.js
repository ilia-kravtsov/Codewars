/*
Memory games basics
In the memory game, numbers are randomly placed face-down in a grid. Each turn, the player chooses a number to peek at, and then replace, face down. If they choose two of the same number in a row, those numbers are removed from the grid. The aim is to clear the board!

Your job is to produce an array of pairs of numbers, placed in a random spot in the array.

The array (and result) could look somthing like:

[3,1,2,1,3,2,4,4]
for an 8 tile memory game. (4 pairs). createTiles(8)

Your task is to implement the function createTiles(n) where n is the number of tiles. The function should return an array with the length n containing randomized, paired, integers starting with 1. Duplicate pairs are not allowed.

Notes:

If n is odd or zero, an empty array should be returned
A shuffled array should be returned. This will be tested, but rarely a proper shuffle can accidentally put the array back in the original order, which will fail the tests. Try again if you think this has happened.
0 <= n < 1000 for all tests.
*/

function createTiles(n) {
  if (n === 0 || n % 2 !== 0) {
    return [];
  }

  const half = n / 2;
  const result = [];

  for (let i = 1; i <= half; i++) {
    result.push(i, i);
  }

  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
}