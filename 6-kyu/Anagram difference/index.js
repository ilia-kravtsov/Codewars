function anagramDifference(w1, w2) {
  const count = {};
​
  for (const char of w1) {
    count[char] = (count[char] || 0) + 1;
  }
​
  for (const char of w2) {
    count[char] = (count[char] || 0) - 1;
  }
​
  return Object.values(count)
    .reduce((sum, value) => sum + Math.abs(value), 0);
}