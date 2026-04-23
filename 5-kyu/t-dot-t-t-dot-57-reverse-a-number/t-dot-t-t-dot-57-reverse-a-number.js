function reverseNumber(n) {
  const negative = n[0] === '-';
  const s = negative ? n.slice(1) : n;
  let res = '';
  let i = 0;
​
  while (i < s.length) {
    let j = i;
​
    while (j + 1 < s.length && s[j] === s[j + 1]) {
      j++;
    }
​
    if (j + 1 < s.length) {
      const ascending = s[j] < s[j + 1];
​
      while (
        j + 1 < s.length &&
        (ascending ? s[j] <= s[j + 1] : s[j] >= s[j + 1])
      ) {
        j++;
      }
    }
​
    res += s.slice(i, j + 1).split('').reverse().join('');
    i = j + 1;
  }
​
  res = res.replace(/^0+/, '');
  if (res === '') res = '0';
​
  return negative ? '-' + res : res;
}