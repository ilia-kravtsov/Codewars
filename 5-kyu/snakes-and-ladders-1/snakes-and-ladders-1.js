    89: 68,
    92: 88,
    95: 75,
    99: 80
  };
}
​
SnakesLadders.prototype.play = function(die1, die2) {
  if (this.gameOver) return "Game over!";
​
  const playerIdx = this.currentPlayer;
  let move = die1 + die2;
  let newPos = this.players[playerIdx] + move;
​
  if (newPos > 100) {
    newPos = 100 - (newPos - 100); 
  }
​
  if (this.snakesLadders[newPos]) {
    newPos = this.snakesLadders[newPos];
  }
​
  this.players[playerIdx] = newPos;
​
  if (newPos === 100) {
    this.gameOver = true;
    return `Player ${playerIdx + 1} Wins!`;
  }
​
  if (die1 !== die2) {
    this.currentPlayer = 1 - this.currentPlayer;
  }
​
  return `Player ${playerIdx + 1} is on square ${newPos}`;
};