/*
This is the first part. You can solve the second part here when you are done with this. Multiply two numbers! Simple!

The arguments are passed as strings.
The numbers may be way very large
Answer should be returned as a string
The returned "number" should not start with zeros e.g. 0123 is invalid
Note: 100 randomly generated tests!

Usage of BigInt is disallowed and will be checked in the full test suite.
*/

function multiply(a, b) {
  if (a === "0" || b === "0") return "0";
  const num1 = a.split("").reverse();
  const num2 = b.split("").reverse();
  const result = Array(num1.length + num2.length).fill(0);
  for (let i = 0; i < num1.length; i++) {
    for (let j = 0; j < num2.length; j++) {
      const product = num1[i] * num2[j];
      result[i + j] += product;
      if (result[i + j] >= 10) {
        result[i + j + 1] += Math.floor(result[i + j] / 10);
        result[i + j] %= 10;
      }
    }
  }
  while (result[result.length - 1] === 0) {
    result.pop();
  }

  return result.reverse().join("");
}