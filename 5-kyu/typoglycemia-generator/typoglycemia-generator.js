ScrambleWords = function (str) {
  return str.split(' ').map(word => {
    if (word.length < 3) return word;
​
    let chars = word.split('');
    let letters = chars.map((c, i) => /[a-z]/i.test(c) ? { c, i } : null).filter(Boolean);
​
    if (letters.length < 3) return word;
​
    let first = letters[0].i;
    let last = letters[letters.length - 1].i;
​
    let middle = letters.slice(1, -1)
      .map(l => l.c.toLowerCase())
      .sort();
​
    let midIndex = 0;
    let result = chars.slice();
​
    for (let k = 1; k < letters.length - 1; k++) {
      result[letters[k].i] = middle[midIndex++];
    }
​
    return result.join('');
  }).join(' ');
};
​