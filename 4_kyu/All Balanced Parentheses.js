/*
Write a function which makes a list of strings representing all of the ways you can balance n pairs of parentheses

Examples
balancedParens(0) => [""]
balancedParens(1) => ["()"]
balancedParens(2) => ["()()","(())"]
balancedParens(3) => ["()()()","(())()","()(())","(()())","((()))"]
*/

function balancedParens(n) {
  const result = [];

  function generate(current, open, close) {
    if (current.length === n * 2) {
      result.push(current);
      return;
    }

    if (open < n) {
      generate(current + "(", open + 1, close);
    }

    if (close < open) {
      generate(current + ")", open, close + 1);
    }
  }

  generate("", 0, 0);
  return result;
}