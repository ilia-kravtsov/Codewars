function solve(x, y) {
  const rotated = {
    '0': '0',
    '1': '1',
    '6': '9',
    '8': '8',
    '9': '6'
  };
​
  let count = 0;
​
  for (let n = x; n < y; n++) {
    const str = String(n);
​
    if (![...str].every(digit => rotated[digit] !== undefined)) {
      continue;
    }
​
    const upsideDown = [...str]
      .reverse()
      .map(digit => rotated[digit])
      .join('');
​
    if (upsideDown === str) {
      count++;
    }
  }
​
  return count;
}