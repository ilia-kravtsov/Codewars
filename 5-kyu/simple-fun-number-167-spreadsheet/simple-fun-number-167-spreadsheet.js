function spreadsheet(s) {
  const rc = /^R(\d+)C(\d+)$/.exec(s);
​
  if (rc) {
    const row = rc[1];
    let col = Number(rc[2]);
​
    let letters = '';
    while (col > 0) {
      col--; 
      letters = String.fromCharCode(65 + (col % 26)) + letters;
      col = Math.floor(col / 26);
    }
    return letters + row;
  }
​
  const a1 = /^([A-Z]+)(\d+)$/.exec(s);
  const letters = a1[1];
  const row = a1[2];
​
  let col = 0;
  for (let i = 0; i < letters.length; i++) {
    col = col * 26 + (letters.charCodeAt(i) - 64);
  }
  return `R${row}C${col}`;
}