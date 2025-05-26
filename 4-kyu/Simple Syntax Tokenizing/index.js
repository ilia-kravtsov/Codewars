/*
In this kata, you must create a function, called tokenise, which takes a string and turns it into a list of tokens. For example:

tokenise(String) => [ String | [ String | .. ] ] // arrays may be nested and/or empty

tokenise("A + B * C") === [ "A", "+", "B", "*", "C" ]

tokenise("function a(arg, arg)") === [ "function", "a", [ "arg", ",", "arg" ] ]
This function does not reduce, and is completely ignorant of context. It simply splits up a string, as a sort of parsing precursor. However, it does understand parentheses. To demonstrate:

tokenise(", () +&") === [ ",", [], "+&" ]

tokenise("Mismatched bracket )") === null
A token can be either a series of alphabetical characters or a string whose characters are all one of !#$%&*+-/<=>@^_.,;. These can be thought of as 'identifiers' and 'operators'. Tokens are seperated either by character type or whitespace. For example:

tokenise("i++") === [ "i", "++" ]

tokenise("a b@c") === [ "a", "b", "@", "c" ]
More examples are given in the example test cases.
*/

function tokenise(string) {
  const identifierRegex = /[a-zA-Z]+/;
  const operatorRegex = /[!#$%&*+\-/<=>@^_.,;]+/;
  const tokens = [];
  const stack = [tokens];
  let current = "";

  for (let i = 0; i < string.length; i++) {
    const char = string[i];

    if (char === " ") {
      if (current) {
        stack[stack.length - 1].push(current);
        current = "";
      }
      continue;
    }

    if (char === "(") {
      if (current) {
        stack[stack.length - 1].push(current);
        current = "";
      }
      const newArray = [];
      stack[stack.length - 1].push(newArray);
      stack.push(newArray);
      continue;
    }

    if (char === ")") {
      if (current) {
        stack[stack.length - 1].push(current);
        current = "";
      }
      if (stack.length === 1) return null;
      stack.pop();
      continue;
    }

    if (identifierRegex.test(char)) {
      if (current && !identifierRegex.test(current)) {
        stack[stack.length - 1].push(current);
        current = "";
      }
      current += char;
      continue;
    }

    if (operatorRegex.test(char)) {
      if (current && !operatorRegex.test(current)) {
        stack[stack.length - 1].push(current);
        current = "";
      }
      current += char;
      continue;
    }

    return null;
  }

  if (current) stack[stack.length - 1].push(current);

  return stack.length === 1 ? tokens : null;
}