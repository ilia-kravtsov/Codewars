function postfixEvaluator(string) {
  const stack = [];
  const tokens = string.split(' ');
​
  for (const token of tokens) {
    if (!isNaN(token)) {
      stack.push(parseInt(token));
    } else {
      const b = stack.pop();
      const a = stack.pop();
​
      let result;
      switch (token) {
        case '+':
          result = a + b;
          break;
        case '-':
          result = a - b;
          break;
        case '*':
          result = a * b;
          break;
        case '/':
          result = Math.trunc(a / b);
          break;
      }
​
      stack.push(result);
    }
  }
​
  return stack.pop();
}
​