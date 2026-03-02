function crossword2x2(puzzle) {
  const grid = [puzzle[0].split(""), puzzle[1].split("")];
​
  let acrossRow = -1;
  for (let r = 0; r < 2; r++) {
    if (grid[r][0] !== "#" && grid[r][1] !== "#") {
      acrossRow = r;
      break;
    }
  }
​
  let downCol = -1;
  for (let c = 0; c < 2; c++) {
    if (grid[0][c] !== "#" && grid[1][c] !== "#") {
      downCol = c;
      break;
    }
  }
​
  const cell = (r, c) => grid[r][c];
​
  const fitsAcross = (w) => {
    const a0 = cell(acrossRow, 0);
    const a1 = cell(acrossRow, 1);
    if (a0 !== "_" && a0 !== w[0]) return false;
    if (a1 !== "_" && a1 !== w[1]) return false;
    return true;
  };
​
  const fitsDown = (w) => {
    const d0 = cell(0, downCol);
    const d1 = cell(1, downCol);
    if (d0 !== "_" && d0 !== w[0]) return false;
    if (d1 !== "_" && d1 !== w[1]) return false;
    return true;
  };
​
  const scoreWord = (w) => values[w[0]] + values[w[1]];