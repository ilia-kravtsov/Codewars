function getLines(n) {
  if (n === 0) return '';
  let seq = ['1'];
  for (let i = 1; i < n; i++) {
    let prev = seq[i - 1], next = '', count = 1;
    for (let j = 1; j <= prev.length; j++) {
      if (prev[j] === prev[j - 1]) count++;
      else {
        next += count + prev[j - 1];
        count = 1;
      }
    }
    seq.push(next);
  }
  return seq.join(',');
}
​