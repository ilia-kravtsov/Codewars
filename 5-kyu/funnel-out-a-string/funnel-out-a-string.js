function funnelOut(funnel) {
  const rows = funnel.map((row) => row.slice());
  const lastRow = rows.length - 1;
  const total = rows.reduce((sum, row) => sum + row.length, 0);
​
  let result = '';
​
  function fillGap(r, c) {
    if (r === 0) return;
​
    const left = rows[r - 1][c];
    const right = rows[r - 1][c + 1];
​
    if (left == null && right == null) return;
​
    let chosenIndex;
​
    if (left == null) {
      chosenIndex = c + 1;
    } else if (right == null) {
      chosenIndex = c;
    } else {
      chosenIndex = left < right ? c : c + 1;
    }
​
    rows[r][c] = rows[r - 1][chosenIndex];
    rows[r - 1][chosenIndex] = null;
​
    fillGap(r - 1, chosenIndex);
  }
​
  for (let i = 0; i < total; i++) {
    result += rows[lastRow][0];
    rows[lastRow][0] = null;
    fillGap(lastRow, 0);
  }
​
  return result;
}