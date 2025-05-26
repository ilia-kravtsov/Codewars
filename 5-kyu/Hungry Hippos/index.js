/*
Hungry Hungry Hippos is a tabletop game made for 2–4 players, produced by Hasbro, under the brand of its subsidiary, Milton Bradley. The idea for the game was published in 1967 by toy inventor Fred Kroll and it was introduced in 1978. The objective of the game is for each player to collect as many marbles as possible with their 'hippo' (a toy hippo model). (Source Wikipedia)
Squares
Task
Your task is to write a simple class called Game that checks how many times a hippo has to leap into the centre of the arena to collect some food. You will be given an integer array called board that defines where all the food can be found. You have to return an integer for the amount of leaps a hippo has to do to eat all of the food.
Rules
1.  The board array contains 0’s for spaces and 1’s for food

2.  The board is n x n in size, where n is between 5 and 50.

3.  One leap consists of food items that are either horizontally or vertically connected to each other. If they are not connected, then another leap is needed.
Returns
Return an integer for the amount of leaps needed to collect all of the food.
Example
Initialise
board = [[1,1,0,0,0],
         [1,1,0,0,0],
         [0,0,0,0,0],
         [0,0,0,1,1],
         [0,0,0,1,1]]

game = new Game(board)
game.play()
Result
There are 2 blocks of food connected horizontally or vertically so you must return 2.

Good luck and enjoy!
*/

class Game {
  constructor(board) {
    this.board = board;
  }

  play() {
    let leaps = 0;
    const n = this.board.length;

    while (this.hasFood()) {
      const [row, col] = this.findFood();
      this.removeFood(row, col);
      this.leap(row, col, n);
      leaps++;
    }

    return leaps;
  }

  hasFood() {
    return this.board.some(row => row.includes(1));
  }

  findFood() {
    const n = this.board.length;
    for (let row = 0; row < n; row++) {
      for (let col = 0; col < n; col++) {
        if (this.board[row][col] === 1) {
          return [row, col];
        }
      }
    }
  }

  removeFood(row, col) {
    this.board[row][col] = 0;
  }

  leap(row, col, n) {
    if (row - 1 >= 0 && this.board[row - 1][col] === 1) {
      this.removeFood(row - 1, col);
      this.leap(row - 1, col, n);
    }
    if (row + 1 < n && this.board[row + 1][col] === 1) {
      this.removeFood(row + 1, col);
      this.leap(row + 1, col, n);
    }
    if (col - 1 >= 0 && this.board[row][col - 1] === 1) {
      this.removeFood(row, col - 1);
      this.leap(row, col - 1, n);
    }
    if (col + 1 < n && this.board[row][col + 1] === 1) {
      this.removeFood(row, col + 1);
      this.leap(row, col + 1, n);
    }
  }
}