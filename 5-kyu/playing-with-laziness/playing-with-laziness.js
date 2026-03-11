function findTrue(mat) {
  for (let s = 0; ; s++) {
    for (let y = 0; y <= s; y++) {
      const x = s - y;
      if (mat[y][x]) return [y, x];
    }
  }
}