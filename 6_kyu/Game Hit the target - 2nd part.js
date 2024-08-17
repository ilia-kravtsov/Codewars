/*
This is the second part of the kata :3 🎈🎆🎇🎆🎈
given a matrix n x n (2-7), determine if the arrow is directed to the target (x).
Now there are one of 4 types of arrows ( '^', '>', 'v', '<' ) and only one target (x)
An empty spot will be denoted by a space " ", the target with a cross "x", and the scope ">"
Examples:
given matrix 4x4:
[

  [' ', 'x', ' ', ' '],

  [' ', ' ', ' ', ' '], --> return true

  [' ', '^', ' ', ' '],

  [' ', ' ', ' ', ' ']

] 
given matrix 4x4:
[

  [' ', ' ', ' ', ' '],

  [' ', 'v', ' ', ' '], --> return false

  [' ', ' ', ' ', 'x'],

  [' ', ' ', ' ', ' ']

] 
given matrix 4x4:
[

  [' ', ' ', ' ', ' '],

  ['>', ' ', ' ', 'x'], --> return true

  [' ', '', ' ', ' '],

  [' ', ' ', ' ', ' ']

] 

In this example, only a 4x4 matrix was used, the problem will have matrices of dimensions from 2 to 7
And here is the first part of this kata - click me ●v●
Happy hacking as they say! 💻
*/

const solution = mtrx => {
  let arrowPosition = null;
  let targetPosition = null;

  for (let i = 0; i < mtrx.length; i++) {
      for (let j = 0; j < mtrx[i].length; j++) {
          if (mtrx[i][j] === '>' || mtrx[i][j] === '<' || mtrx[i][j] === '^' || mtrx[i][j] === 'v') {
              arrowPosition = [i, j];
          } else if (mtrx[i][j] === 'x') {
              targetPosition = [i, j];
          }
      }
  }

  if (!arrowPosition || !targetPosition) {
      return false; 
  }

  const [arrowRow, arrowCol] = arrowPosition;
  const [targetRow, targetCol] = targetPosition;

  switch (mtrx[arrowRow][arrowCol]) {
      case '>':
          return arrowRow === targetRow && arrowCol < targetCol;
      case '<':
          return arrowRow === targetRow && arrowCol > targetCol;
      case '^':
          return arrowCol === targetCol && arrowRow > targetRow;
      case 'v':
          return arrowCol === targetCol && arrowRow < targetRow;
      default:
          return false;
  }
}