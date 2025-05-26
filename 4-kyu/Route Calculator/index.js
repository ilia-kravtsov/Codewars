/*
This calculator takes values that could be written in a browsers route path as a single string. It then returns the result as a number (or an error message).

Route paths use the '/' symbol so this can't be in our calculator. Instead we are using the '$' symbol as our divide operator.

You will be passed a string of any length containing numbers and operators:

'+' = add
'-' = subtract
'*' = multiply
'$' = divide
Your task is to break the string down and calculate the expression using this order of operations. (division => multiplication => subtraction => addition)

If you are given an invalid input (i.e. any character except .0123456789+-*$) you should return the error message:'400: Bad request'

Remember:
The number of operations isn't limited
Order of operations is imperative
No eval or equivalent functions
convert the number to floats, not to integers
Examples:

calculate('1+1')     => '2'
calculate('10$2')    => '5'
calculate('1.5*3')   => '4.5'

calculate('5+5+5+5') => '20'

calculate('1000$2.5$5+5-5+6$6') =>'81'

calculate('10-9p')   =>  '400: Bad request'
Further Notes - Parameters outside of this challenge:
Brackets e.g. 10*(1+2)
Square root, log, % or any other operators
Unary minus (10*-1)
Bad mathematical input (10**$10 or 5+5$)
You may have to deal with floats
If enjoy this and want something harder please see http://www.codewars.com/kata/evaluate-mathematical-expression/ for making a much more complicated calculator. This is a good kata leading up to that.
*/

function calculate(sum) {
  if (/[^0-9+\-\*\$\.]/.test(sum)) return "400: Bad request";
  if (!/^\d+(\.\d+)?([+\-\*\$]\d+(\.\d+)?)*$/.test(sum))
    return "400: Bad request";

  let tokens = sum
    .match(/\d+(\.\d+)?|[+\-\*\$]/g)
    .map((t) => (/^[+\-\*\$]$/.test(t) ? t : parseFloat(t)));

  const precedence = ["$", "*", "-", "+"];

  for (let op of precedence) {
    let i = 0;
    while (i < tokens.length) {
      if (tokens[i] === op) {
        const left = tokens[i - 1],
          right = tokens[i + 1];
        let res;
        if (op === "$") res = left / right;
        else if (op === "*") res = left * right;
        else if (op === "-") res = left - right;
        else if (op === "+") res = left + right;
        tokens.splice(i - 1, 3, res);
        i = 0;
      } else {
        i++;
      }
    }
  }

  return tokens[0];
}