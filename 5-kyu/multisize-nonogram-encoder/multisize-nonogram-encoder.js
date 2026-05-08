function encode(sol) {
  const getClues = arr => {
    const clues = [];
    let count = 0;
​
    for (const cell of arr) {
      if (cell === 1) {
        count++;
      } else if (count > 0) {
        clues.push(count);
        count = 0;
      }
    }
​
    if (count > 0) clues.push(count);
​
    return clues;
  };
​
  const rowClues = sol.map(getClues);
​
  const columnClues = sol[0].map((_, col) => {
    const column = sol.map(row => row[col]);
    return getClues(column);
  });
​
  return [columnClues, rowClues];
}