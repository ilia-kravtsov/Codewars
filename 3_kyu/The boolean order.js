/*
In this Kata, you will be given boolean values and boolean operators. Your task will be to return the number of arrangements that evaluate to True.

t,f will stand for true, false and the operators will be Boolean AND (&), OR (|), and XOR (^).

For example, solve("tft","^&") = 2, as follows:

"((t ^ f) & t)" = True
"(t ^ (f & t))" = True
Notice that the order of the boolean values and operators does not change. What changes is the position of braces.

More examples in the test cases.
*/

function solve(s, ops) {
  const memo = new Map();

  function countWays(start, end, target) {
    const key = `${start}-${end}-${target}`;
    if (memo.has(key)) return memo.get(key);

    if (start === end) {
      const result = (s[start] === "t") === target ? 1 : 0;
      memo.set(key, result);
      return result;
    }

    let ways = 0;
    for (let i = start; i < end; i++) {
      const op = ops[i];
      for (const leftTrue of [true, false]) {
        for (const rightTrue of [true, false]) {
          const evalResult = evaluate(leftTrue, rightTrue, op);
          if (evalResult === target) {
            ways +=
              countWays(start, i, leftTrue) * countWays(i + 1, end, rightTrue);
          }
        }
      }
    }

    memo.set(key, ways);
    return ways;
  }

  function evaluate(a, b, op) {
    switch (op) {
      case "&":
        return a && b;
      case "|":
        return a || b;
      case "^":
        return a !== b;
      default:
        return false;
    }
  }

  return countWays(0, s.length - 1, true);
}