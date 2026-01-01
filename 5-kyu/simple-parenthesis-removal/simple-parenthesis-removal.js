function solve(s) {
  let res = '';
  let stack = [1];
  let sign = 1;
​
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
​
    if (c === '+') {
      sign = stack[stack.length - 1];
    } else if (c === '-') {
      sign = -stack[stack.length - 1];
    } else if (c === '(') {
      stack.push(sign);
      sign = stack[stack.length - 1];
    } else if (c === ')') {
      stack.pop();
      sign = stack[stack.length - 1];
    } else {
      if (res && sign === 1) res += '+';
      if (sign === -1) res += '-';
      res += c;
    }
  }
​
  return res[0] === '+' ? res.slice(1) : res;
}
​