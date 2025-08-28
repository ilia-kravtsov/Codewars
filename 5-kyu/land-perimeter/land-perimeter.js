function landPerimeter(arr) {
  let rows = arr.length;
  let cols = arr[0].length;
  let perimeter = 0;
​
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (arr[r][c] === 'X') {
        perimeter += 4;
​
        if (r > 0 && arr[r - 1][c] === 'X') perimeter -= 2;
​
        if (c > 0 && arr[r][c - 1] === 'X') perimeter -= 2;
      }
    }
  }
​
  return `Total land perimeter: ${perimeter}`;
}