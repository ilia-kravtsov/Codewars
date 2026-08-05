function fibonacci(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];

  const result = [0, 1];

  while (result.length < n) {
    result.push(result[result.length - 1] + result[result.length - 2]);
  }

  return result;
}