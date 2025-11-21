function zoom(n) {
  const outer = n % 4 === 1 ? '■' : '□';
  const inner = outer === '■' ? '□' : '■';
  const rows = [];
  
  for (let i = 0; i < n; i++) {
    let row = '';
    for (let j = 0; j < n; j++) {
      const layer = Math.min(i, j, n - 1 - i, n - 1 - j);
      row += layer % 2 === 0 ? outer : inner;
    }
    rows.push(row);
  }
  
  return rows.join('\n');
}
​