function lookAndSay(data, len) {
  const result = [];
​
  for (let i = 0; i < len; i++) {
    let current = String(data);
    let next = '';
    let count = 1;
​
    for (let j = 1; j <= current.length; j++) {
      if (current[j] === current[j - 1]) {
        count++;
      } else {
        next += count + current[j - 1];
        count = 1;
      }
    }
​
    result.push(next);
    data = next;
  }
​
  return result;
}