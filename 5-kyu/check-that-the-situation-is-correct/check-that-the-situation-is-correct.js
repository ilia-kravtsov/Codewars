function isItPossible(field) {
  const cells = field.split('');
​
  const countX = cells.filter(c => c === 'X').length;
  const countO = cells.filter(c => c === '0').length;
​
  if (!(countX === countO || countX === countO + 1)) {
    return false;
  }
​
  const wins = [
    [0,1,2], [3,4,5], [6,7,8], 
    [0,3,6], [1,4,7], [2,5,8], 
    [0,4,8], [2,4,6]          
  ];
​
  const isWinner = (player) =>
    wins.some(line => line.every(i => cells[i] === player));
​
  const xWins = isWinner('X');
  const oWins = isWinner('0');
​
  if (xWins && oWins) {
    return false;
  }
​
  if (xWins && countX !== countO + 1) {
    return false;
  }
​
  if (oWins && countX !== countO) {
    return false;
  }
​
  return true;
}
​