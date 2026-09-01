function anagramCounter(wordsArray) {
  const groups = new Map();
​
  for (const word of wordsArray) {
    const key = word.split('').sort().join('');
​
    groups.set(key, (groups.get(key) || 0) + 1);
  }
​
  let result = 0;
​
  for (const count of groups.values()) {
    result += count * (count - 1) / 2;
  }
​
  return result;
}