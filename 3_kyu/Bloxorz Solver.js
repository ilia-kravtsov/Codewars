/*
This kata is inspired by Bloxorz, a flash-based 3D puzzle game where the objective is to maneuver a block to have it fall through a square hole.

Objective
Your goal is to maneuver a rectangular cuboid with dimensions 1 x 1 x 2 on a 2-dimensional grid made up of 1 x 1 square tiles. While moving the cuboid around, your block must never, at any point, have any part of its bottom-facing surface exposed to open air.

Input
Your function will receive an array of strings describing the layout of the grid to be traversed. A 1 represents solid ground (tiles), a 0 represents open air, a B represents your starting position, and an X represents the square hole (destination).

Output
Your function must return a string representing the minimum sequence of moves required to get the block into the square hole. It will consist of a combination of the following characters: U (up), D (down), L (left), R (right).

Block Movement


The block can cover either one or two tiles with each movement, depending on whether it is standing upright or on its long end. The image above shows an overhead view; the yellow squares represent the tiles occupied by the block and the green squares represent the tiles occupied when moved toward a given cardinal direction.

In Fig. 1, the block's position is standing upright, and in Fig. 2, the block is on its long end.

Test Example
let level1 = ['1110000000',
              '1B11110000',
              '1111111110',
              '0111111111',
              '0000011X11',
              '0000001110'];

bloxSolver(level1); //'RRDRRRD' or 'RDDRRDR'
An overhead view of the game grid for the example level1 is shown below, with a green square representing the starting position of the block, the red square representing the square hole, the light grey squares representing the platform tiles, and the dark grey areas representing open air:

grid layout of level1

Below is the sequence of moves to solve this map, numbered and highlighted in blue.

sequence of moves for level1

and another possible solution:

alternative sequence of moves for level1

Technical Details
Input will always be valid and there will always be a solution.
The block always begins in an upright position.
The destination exit does not count as open air.
The maximum grid size will be 15 x 20 (rows x colums)
If you enjoyed this kata, be sure to check out my other katas.
*/

function bloxSolver(arr) {
  const rows = arr.length;
  const cols = arr[0].length;

  function valid(r, c) {
    return r >= 0 && r < rows && c >= 0 && c < cols && "1BX".includes(arr[r][c]);
  }

  let start = null;
  let dest = null;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const ch = arr[r][c];
      if (ch === 'B') start = { r, c };
      if (ch === 'X') dest = { r, c };
    }
  }
  if (!start || !dest) return "";

  function canonical(state) {
    const { r1, c1, r2, c2 } = state;
    if (r1 === r2 && c1 === c2) return `${r1},${c1},${r2},${c2}`;
    if (r1 < r2 || (r1 === r2 && c1 < c2))
      return `${r1},${c1},${r2},${c2}`;
    else
      return `${r2},${c2},${r1},${c1}`;
  }

  function isGoal(state) {
    return (state.r1 === state.r2 && state.c1 === state.c2 &&
            state.r1 === dest.r && state.c1 === dest.c);
  }

  function moveState(state, dir) {
    let { r1, c1, r2, c2 } = state;
    let newState;
    const standing = (r1 === r2 && c1 === c2);
    const horizontal = (r1 === r2 && Math.abs(c1 - c2) === 1);
    const vertical = (c1 === c2 && Math.abs(r1 - r2) === 1);

    if (standing) {
      if (dir === 'U') {
        newState = { r1: r1 - 2, c1: c1, r2: r1 - 1, c2: c1 };
      } else if (dir === 'D') {
        newState = { r1: r1 + 1, c1: c1, r2: r1 + 2, c2: c1 };
      } else if (dir === 'L') {
        newState = { r1: r1, c1: c1 - 2, r2: r1, c2: c1 - 1 };
      } else if (dir === 'R') {
        newState = { r1: r1, c1: c1 + 1, r2: r1, c2: c1 + 2 };
      }
    } else if (horizontal) {
      const left = (c1 < c2) ? { r: r1, c: c1 } : { r: r2, c: c2 };
      const right = (c1 < c2) ? { r: r2, c: c2 } : { r: r1, c: c1 };
      if (dir === 'U') {
        newState = { r1: left.r - 1, c1: left.c, r2: right.r - 1, c2: right.c };
      } else if (dir === 'D') {
        newState = { r1: left.r + 1, c1: left.c, r2: right.r + 1, c2: right.c };
      } else if (dir === 'L') {
        newState = { r1: left.r, c1: left.c - 1, r2: left.r, c2: left.c - 1 };
      } else if (dir === 'R') {
        newState = { r1: right.r, c1: right.c + 1, r2: right.r, c2: right.c + 1 };
      }
    } else if (vertical) {
      const top = (r1 < r2) ? { r: r1, c: c1 } : { r: r2, c: c2 };
      const bottom = (r1 < r2) ? { r: r2, c: c2 } : { r: r1, c: c1 };
      if (dir === 'L') {
        newState = { r1: top.r, c1: top.c - 1, r2: bottom.r, c2: bottom.c - 1 };
      } else if (dir === 'R') {
        newState = { r1: top.r, c1: top.c + 1, r2: bottom.r, c2: bottom.c + 1 };
      } else if (dir === 'U') {
        newState = { r1: top.r - 1, c1: top.c, r2: top.r - 1, c2: top.c };
      } else if (dir === 'D') {
        newState = { r1: bottom.r + 1, c1: bottom.c, r2: bottom.r + 1, c2: bottom.c };
      }
    }
    if (!newState) return null;

    const cells = [
      { r: newState.r1, c: newState.c1 },
      { r: newState.r2, c: newState.c2 }
    ];
    for (const cell of cells) {
      if (!valid(cell.r, cell.c)) return null;
    }
    return newState;
  }

  const queue = [];
  const visited = new Set();
  const startState = { r1: start.r, c1: start.c, r2: start.r, c2: start.c };
  queue.push({ state: startState, path: "" });
  visited.add(canonical(startState));

  const directions = ['U', 'D', 'L', 'R'];

  while (queue.length) {
    const { state, path } = queue.shift();
    if (isGoal(state)) return path;

    for (const d of directions) {
      const nextState = moveState(state, d);
      if (nextState === null) continue;
      const key = canonical(nextState);
      if (visited.has(key)) continue;
      visited.add(key);
      queue.push({ state: nextState, path: path + d });
    }
  }

  return "";
}
