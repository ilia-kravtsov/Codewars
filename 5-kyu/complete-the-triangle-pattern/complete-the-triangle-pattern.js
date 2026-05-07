function makeTriangle(m, n) {
  const len = n - m + 1;
  const rows = (Math.sqrt(8 * len + 1) - 1) / 2;
​
  if (rows % 1 !== 0) return "";
​
  const triangle = Array.from({ length: rows }, (_, i) => Array(i + 1));
  let num = m;
  let top = 0;
  let left = 0;
  let size = rows;
​
  while (size > 0) {
    if (size === 1) {
      triangle[top][left] = num % 10;
      break;
    }
​
    triangle[top][left] = num++ % 10;
​
    for (let i = 1; i < size; i++) {
      triangle[top + i][left + i] = num++ % 10;
    }
​
    for (let j = size - 2; j >= 0; j--) {
      triangle[top + size - 1][left + j] = num++ % 10;
    }
​
    for (let i = size - 2; i >= 1; i--) {
      triangle[top + i][left] = num++ % 10;
    }
​
    top += 2;
    left += 1;
    size -= 3;
  }
​
  return triangle
    .map((row, i) => " ".repeat(rows - i - 1) + row.join(" "))
    .join("\n");
}