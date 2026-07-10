function countZeroRowsAndColumns(arr1, arr2) {
  const rows = arr1.length;
  const cols = arr1[0].length;
  
  const rowSums = new Array(rows).fill(0);
  const colSums = new Array(cols).fill(0);
  
  for (let i = 0; i < rows; i++) {
    const row1 = arr1[i];
    const row2 = arr2[i];
    for (let j = 0; j < cols; j++) {
      const sum = row1[j] + row2[j];
      rowSums[i] += sum;
      colSums[j] += sum;
    }
  }
  
  let count = 0;
  for (let i = 0; i < rows; i++) {
    if (rowSums[i] === 0) count++;
  }
  
  for (let j = 0; j < cols; j++) {
    if (colSums[j] === 0) count++;
  }
  
  return count;
}