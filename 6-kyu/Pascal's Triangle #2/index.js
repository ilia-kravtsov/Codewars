function pascal(depth) {
  let triangle = [];
  for (let i = 0; i < depth; i++) {
      let row = [];
      for (let j = 0; j <= i; j++) {
          if (j === 0 || j === i) {
              row[j] = 1;
          } else {
              row[j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
          }
      }
      triangle.push(row);
  }
  return triangle;
}