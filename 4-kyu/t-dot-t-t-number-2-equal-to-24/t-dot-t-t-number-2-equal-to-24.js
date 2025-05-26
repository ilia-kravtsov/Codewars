function equalTo24(a, b, c, d) {
  const nums = [a, b, c, d];
  const ops = ['+', '-', '*', '/'];
​
  function permute(arr) {
    if (arr.length === 1) return [arr];
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      const rest = arr.slice(0, i).concat(arr.slice(i + 1));
      for (const p of permute(rest)) {
        result.push([arr[i], ...p]);
      }
    }
    return result;
  }
​
  function combine(a, b, op) {
    return `(${a}${op}${b})`;
  }
​
  function tryExpressions(nums) {
    for (const op1 of ops)
      for (const op2 of ops)
        for (const op3 of ops) {
          const [n1, n2, n3, n4] = nums.map(String);
​
          const expressions = [
            combine(combine(combine(n1, n2, op1), n3, op2), n4, op3),
            combine(combine(n1, n2, op1), combine(n3, n4, op2), op3),
            combine(n1, combine(combine(n2, n3, op2), n4, op3), op1),
            combine(n1, combine(n2, combine(n3, n4, op3), op2), op1),
            combine(combine(n1, combine(n2, n3, op2), op1), n4, op3),
          ];
​
          for (const expr of expressions) {
            try {
              if (Math.abs(eval(expr) - 24) < 1e-6) {
                return expr.replace(/\s+/g, '');
              }
            } catch (_) {}
          }
        }
​
    return null;
  }
​
  for (const perm of permute(nums)) {
    const result = tryExpressions(perm);
    if (result) return result;
  }
​
  return "It's not possible!";
}
​