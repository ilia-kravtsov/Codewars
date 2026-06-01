function Canvas(width, height) {
  if (width <= 0 || height <= 0) throw "Out of bounds";
​
  const canvas = Array.from({ length: height }, () => Array(width).fill(" "));
​
  const check = (x, y) => {
    if (x < 0 || x >= width || y < 0 || y >= height) {
      throw "Out of bounds";
    }
  };
​
  this.draw = (x1, y1, x2, y2) => {
    check(x1, y1);
    check(x2, y2);
​
    const minX = Math.min(x1, x2);
    const maxX = Math.max(x1, x2);
    const minY = Math.min(y1, y2);
    const maxY = Math.max(y1, y2);
​
    if (x1 === x2 || y1 === y2) {
      for (let y = minY; y <= maxY; y++) {
        for (let x = minX; x <= maxX; x++) {
          canvas[y][x] = "x";
        }
      }
    } else {
      for (let x = minX; x <= maxX; x++) {
        canvas[minY][x] = "x";
        canvas[maxY][x] = "x";
      }
​
      for (let y = minY; y <= maxY; y++) {
        canvas[y][minX] = "x";