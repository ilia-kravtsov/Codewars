/*
Construct a function that, when given a string containing an expression in infix notation, will return an identical expression in postfix notation.

The operators used will be +, -, *, /, and ^ with left-associativity of all operators but ^.

The precedence of the operators (most important to least) are : 1) parentheses, 2) exponentiation, 3) times/divide, 4) plus/minus.

The operands will be single-digit integers between 0 and 9, inclusive.

Parentheses may be included in the input, and are guaranteed to be in correct pairs.

toPostfix("2+7*5"); // Should return "275*+"
toPostfix("3*3/(7+1)"); // Should return "33*71+/"
toPostfix("5+(6-2)*9+3^(7-1)"); // Should return "562-9*+371-^+"
toPostfix("1^2^3"); // Should return "123^^"
*/

function toPostfix(infix) {
  let output = [];
  let stack = [];
  
  const prec = { '+': 1, '-': 1, '*': 2, '/': 2, '^': 3 };
  const assoc = { '+': 'L', '-': 'L', '*': 'L', '/': 'L', '^': 'R' };

  for (let i = 0; i < infix.length; i++) {
    let token = infix[i];
    
    if (/[0-9]/.test(token)) {
      output.push(token);
    }
    else if (token === '(') {
      stack.push(token);
    }
    else if (token === ')') {
      while (stack.length && stack[stack.length - 1] !== '(') {
        output.push(stack.pop());
      }
      stack.pop(); 
    }
    else if (token in prec) {
      while (stack.length && stack[stack.length - 1] !== '(' &&
             ((assoc[token] === 'L' && prec[token] <= prec[stack[stack.length - 1]]) ||
              (assoc[token] === 'R' && prec[token] < prec[stack[stack.length - 1]]))) {
        output.push(stack.pop());
      }
      stack.push(token);
    }
  }

  while (stack.length) {
    output.push(stack.pop());
  }
  
  return output.join('');
}