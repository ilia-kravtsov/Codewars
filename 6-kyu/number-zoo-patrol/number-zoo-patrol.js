function findNumber(array) {
  const n = array.length + 1;
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = array.reduce((sum, num) => sum + num, 0);
  return expectedSum - actualSum;
}