/*
Write a function that determines whether a string is a valid guess in a Boggle board, as per the rules of Boggle. A Boggle board is a 2D array of individual characters, e.g.:

[ ["I","L","A","W"],
  ["B","N","G","E"],
  ["I","U","A","O"],
  ["A","S","R","L"] ]
Valid guesses are strings which can be formed by connecting adjacent cells (horizontally, vertically, or diagonally) without re-using any previously used cells.

For example, in the above board "BINGO", "LINGO", and "ILNBIA" would all be valid guesses, while "BUNGIE", "BINS", and "SINUS" would not.

Your function should take two arguments (a 2D array and a string) and return true or false depending on whether the string is found in the array as per Boggle rules.

Test cases will provide various array and string sizes (squared arrays up to 150x150 and strings up to 150 uppercase letters). You do not have to check whether the string is a real word or not, only if it's a valid guess.
*/

function checkWord(board, word) {
  const dx = [-1, -1, -1, 0, 0, 1, 1, 1];
  const dy = [-1, 0, 1, -1, 1, -1, 0, 1];

  function isInRange(x, y) {
      return 0 <= x && x < board.length && 0 <= y && y < board[0].length;
  }

  function dfs(x, y, index) {
      if (!isInRange(x, y) || board[x][y] !== word[index] || visited[x][y]) {
          return false;
      }

      if (index === word.length - 1) {
          return true;
      }

      visited[x][y] = true;

      for (let i = 0; i < 8; i++) {
          if (dfs(x + dx[i], y + dy[i], index + 1)) {
              return true;
          }
      }

      visited[x][y] = false;

      return false;
  }

  const visited = Array.from({ length: board.length }, () => Array(board[0].length).fill(false));

  for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[0].length; j++) {
          if (dfs(i, j, 0)) {
              return true;
          }
      }
  }

  return false;
}