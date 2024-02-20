/* 
Connect Four is a game in which two players take turns dropping red or yellow colored discs into a vertically suspended 7 x 6 grid. Discs fall to the bottom of the grid, occupying the next available space.

A player wins by connecting four of their discs horizontally, vertically or diagonally.

Given a multidimensional array representing a Connect Four board, your task is to create a function which can determine who won the game.

Your connectFour function will be passed an array matrix similar to this:

[['-','-','-','-','-','-','-'],
 ['-','-','-','-','-','-','-'],
 ['-','-','-','R','R','R','R'],
 ['-','-','-','Y','Y','R','Y'],
 ['-','-','-','Y','R','Y','Y'],
 ['-','-','Y','Y','R','R','R']];
'R' represents a red disc

'Y' represents a yellow disc

'-' represents an unoccupied space

In this example the red player won by making a horizontal line of 4 red discs.

If the red player won, your connectFour function should return 'R'. If the yellow player won, it should return 'Y'. If the board is full and no one won it should return 'draw'. If the game is still in progress it should return 'in progress'.

You can learn more about how Connect Four is played here:
*/

function connectFour(board) {
  function checkLine(a, b, c, d) {
    return (a !== '-') && (a === b && a === c && a === d);
  }

  for (let r = 0; r < board.length; r++) { 
    for (let c = 0; c < board[r].length; c++) { 
      if (r + 3 < board.length) {
        if (checkLine(board[r][c], board[r + 1][c], board[r + 2][c], board[r + 3][c])) {
          return board[r][c];
        }
        if (c + 3 < board[r].length) {
          if (checkLine(board[r][c], board[r + 1][c + 1], board[r + 2][c + 2], board[r + 3][c + 3])) {
            return board[r][c]; 
          }
        }
      }
      if (c + 3 < board[r].length) {
        if (checkLine(board[r][c], board[r][c + 1], board[r][c + 2], board[r][c + 3])) {
          return board[r][c]; 
        }
      }
      if (r - 3 >= 0 && c + 3 < board[r].length) {
        if (checkLine(board[r][c], board[r - 1][c + 1], board[r - 2][c + 2], board[r - 3][c + 3])) {
          return board[r][c]; 
        }
      }
    }
  }

  let isFull = true;
  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[r].length; c++) {
      if (board[r][c] === '-') {
        isFull = false; 
      }
    }
  }

  return isFull ? 'draw' : 'in progress';
}
