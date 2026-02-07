function getGoodOldDay(input) {
  const [d, m, y] = input.split('-').map(Number);
  const date = new Date(y, m - 1, d);
  date.setFullYear(y);
  return date.toLocaleDateString('en-US', { weekday: 'long' });
}
​