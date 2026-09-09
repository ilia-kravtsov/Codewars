function displayBoard(board, width) {
  const rows = [];
​
  for (let i = 0; i < board.length; i += width) {
    const row = board
      .slice(i, i + width)
      .map(cell => ` ${cell} `)
      .join("|");
​
    rows.push(row);
  }
​
  const separator = "-".repeat(width * 4 - 1);
​
  return rows.join(`\n${separator}\n`);
}