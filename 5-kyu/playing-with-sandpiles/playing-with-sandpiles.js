class Sandpile {
  constructor(piles) {
    if (!piles) {
      this.grid = Array.from({ length: 3 }, () => Array(3).fill(0));
    } else {
      this.grid = piles
        .split('\n')
        .map(row => [...row].map(Number));
​
      this.grid = Sandpile.stabilize(this.grid);
    }
​
    Object.freeze(this.grid);
  }
​
  static stabilize(grid) {
    grid = grid.map(row => [...row]);
​
    let changed = true;
​
    while (changed) {
      changed = false;
      const next = grid.map(row => [...row]);
​
      for (let r = 0; r < 3; r++) {
        for (let c = 0; c < 3; c++) {
          if (grid[r][c] > 3) {
            changed = true;
​
            next[r][c] -= 4;
​
            if (r > 0) next[r - 1][c]++;
            if (r < 2) next[r + 1][c]++;
            if (c > 0) next[r][c - 1]++;
            if (c < 2) next[r][c + 1]++;
          }
        }
      }
​