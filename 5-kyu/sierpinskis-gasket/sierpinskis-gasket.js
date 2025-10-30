function sierpinski(n) {
  let size = 1 << n;
  let rows = [];
  for (let r = 0; r < size; r++) {
    let entries = [];
    for (let k = 0; k <= r; k++) entries.push(((r & k) === k) ? 'L' : ' ');
    rows.push(entries.join(' '));
  }
  return rows.join('\n');
}
​