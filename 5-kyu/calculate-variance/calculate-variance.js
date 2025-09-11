var variance = function(numbers) {
  const mean = numbers.reduce((a, b) => a + b, 0) / numbers.length;
​
  const squaredDiffs = numbers.map(x => Math.pow(x - mean, 2));
​
  const result = squaredDiffs.reduce((a, b) => a + b, 0) / numbers.length;
​
  return parseFloat(result.toFixed(4));
};