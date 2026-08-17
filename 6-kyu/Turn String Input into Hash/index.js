function strToHash(str) {
  const result = {};
​
  if (!str) return result;
​
  for (const pair of str.split(',')) {
    const [key, value] = pair.trim().split('=');
    result[key] = Number(value);
  }
​
  return result;
}