function solve(str) {
  function expand(s, i = 0) {
    let res = "";
    let num = 0;
    while (i < s.length) {
      let ch = s[i];
      if (/\d/.test(ch)) {
        num = num * 10 + +ch;
      } else if (ch === '(') {
        let [sub, j] = expand(s, i + 1);
        res += (sub.repeat(num || 1));
        num = 0;
        i = j;
      } else if (ch === ')') {
        return [res, i];
      } else {
        res += ch;
      }
      i++;
    }
    return [res, i];
  }
  return expand(str)[0];
}