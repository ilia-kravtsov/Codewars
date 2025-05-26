/*
In this kata you are expected to recover a scattered password in a (m x n) grid (you'll be given directions of all password pieces in the array)

The array will contain pieces of the password to be recovered, you'll get directions on how to get all the the pieces, your initial position in the array will be the character "x".

Heres what the array looks like

[
  ["p", "x", "m"],
  ["a", "$", "$"],
  ["k", "i", "t"]
]
The given directions would consist of [left, right, up, down] and [leftT, rightT, upT, downT], the former would be used to move around the grid while the latter would be used when you have a password to that direction of you.( E.g if you are in a position and the move to make is leftT it means theres a password to the left of you, so take the value and move there)

So in the 2d array example above, you will be given the directions ["lefT", "downT", "rightT", "rightT"], making for the word "pa$$".

Remember you initial position is the character "x".

So you write the function getPassword(grid, directions) that uses the directions to get a password in the grid.

Another example.

grid = [
  ["a", "x", "c"],
  ["g", "l", "t"],
  ["o", "v", "e"]
];

directions = ["downT", "down", "leftT", "rightT", "rightT", "upT"]

getPassword(grid, directions) // => "lovet"
Once again, Your initial position is the character "x", so from the position of "x" you follow the directions given and get all pieces in the grid.
*/

function getPassword(grid, directions) {
  let position = { x: 0, y: 0 };
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === "x") {
        position = { x: i, y: j };
        break;
      }
    }
  }

  const movements = {
    left: { x: 0, y: -1 },
    right: { x: 0, y: 1 },
    up: { x: -1, y: 0 },
    down: { x: 1, y: 0 },
    leftT: { x: 0, y: -1 },
    rightT: { x: 0, y: 1 },
    upT: { x: -1, y: 0 },
    downT: { x: 1, y: 0 },
  };

  let password = "";

  for (let direction of directions) {
    position.x += movements[direction].x;
    position.y += movements[direction].y;

    if (direction.endsWith("T")) {
      password += grid[position.x][position.y];
    }
  }

  return password;
}
