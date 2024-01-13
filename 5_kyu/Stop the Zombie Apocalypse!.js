// Stop the Zombie Apocalypse!

/*
You are a number. But that's good for you since you live in the beautiful world, where the only living creatures are numbers. Unfortunately, a nasty zombie virus is spreading out in the digital cities. You work at the digital CDC and your job is to look over the city maps and tell which areas are contaminated by the zombie virus so the digital army would know where to drop the bombs. They are the new kind of digital zombies which can travel only in vertical and horizontal directions and infect only numbers same as them, but don't let it fool you, they're still very dangerous. Time is running out...

You'll be given two-dimensional array with numbers in it. For some mysterious reason patient zero is always found in north west area of the city (element [0][0] of the matrix) and the plague spreads from there to other cells by moving left, right, up or down. You must create a function that returns a map (2-dimensional array) with all the contaminated areas marked as 1 and virus-free marked as 0.

In other words: find all the matrix elements with the same value as [0][0] that you can go to by moving only down, up, right or left from [0][0] - without going into a field storing any other value.

For example:

var city1 = [
    [7, 2, 3],
    [7, 2, 3],
    [1, 2, 7]
];

var contaminatedInCity1 = [
    [1, 0, 0],
    [1, 0, 0],
    [0, 0, 0]
];// number 7 is a zombie, but the 7 in bottom right corner is not a zombie yet - the virus didn't get there.

var city2 = [
    [9, 1, 2],
    [9, 9, 9],
    [7, 4, 9],
    [7, 9, 7]
]; 

var contaminatedInCity2 = [
    [1, 0, 0],
    [1, 1, 1],
    [0, 0, 1],
    [0, 0, 0]
];//infection inflicted the 9s, but the virus didn't get to the one in the south of the city yet.
*/

function findZombies(matrix) {
  const n = matrix.length;
  const m = matrix[0].length;
  const visited = Array.from({ length: n }, () => Array(m).fill(false));
  const result = Array.from({ length: n }, () => Array(m).fill(0));

  const dfs = (row, col, value) => {
    if (
      row < 0 ||
      row >= n ||
      col < 0 ||
      col >= m ||
      visited[row][col] ||
      matrix[row][col] !== value
    ) {
      return;
    }

    visited[row][col] = true;
    result[row][col] = 1;

    dfs(row - 1, col, value); // Up
    dfs(row + 1, col, value); // Down
    dfs(row, col - 1, value); // Left
    dfs(row, col + 1, value); // Right
  };

  dfs(0, 0, matrix[0][0]);

  return result;
}