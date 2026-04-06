function boxesPacking(length, width, height) {
  const boxes = length.map((l, i) => [l, width[i], height[i]].sort((a, b) => a - b));
  boxes.sort((a, b) => {
    if (a[0] !== b[0]) return a[0] - b[0];
    if (a[1] !== b[1]) return a[1] - b[1];
    return a[2] - b[2];
  });
​
  for (let i = 1; i < boxes.length; i++) {
    if (
      boxes[i - 1][0] >= boxes[i][0] ||
      boxes[i - 1][1] >= boxes[i][1] ||
      boxes[i - 1][2] >= boxes[i][2]
    ) {
      return false;
    }
  }
​
  return true;
}