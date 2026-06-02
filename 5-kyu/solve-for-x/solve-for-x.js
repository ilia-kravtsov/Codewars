function solveForX(equation) {
  const [leftStr, rightStr] = equation.split('=').map(s => s.trim());
​
  function tokenize(s) {
    return s.match(/x|\d+|[()+\-*/]/g);
  }
​
  function parseExpression(tokens) {
    let i = 0;
​
    function expr() {
      let res = term();
​
      while (i < tokens.length && (tokens[i] === '+' || tokens[i] === '-')) {
        const op = tokens[i++];
        const rhs = term();
​
        if (op === '+') {
          res = { a: res.a + rhs.a, b: res.b + rhs.b };
        } else {
          res = { a: res.a - rhs.a, b: res.b - rhs.b };
        }
      }
​
      return res;
    }
​
    function term() {
      let res = factor();
​
      while (i < tokens.length && (tokens[i] === '*' || tokens[i] === '/')) {
        const op = tokens[i++];
        const rhs = factor();