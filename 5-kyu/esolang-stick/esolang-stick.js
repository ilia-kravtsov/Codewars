function interpreter(tape) {
  const stack = [0];
  let output = '';
  let ip = 0;
​
  while (ip < tape.length) {
    const cmd = tape[ip];
​
    switch (cmd) {
      case '^':
        if (stack.length === 0) throw new Error('Stack is empty');
        stack.pop();
        break;
​
      case '!':
        stack.push(0);
        break;
​
      case '+':
        if (stack.length === 0) throw new Error('Stack is empty');
        stack[stack.length - 1] = (stack[stack.length - 1] + 1) & 255;
        break;
​
      case '-':
        if (stack.length === 0) throw new Error('Stack is empty');
        stack[stack.length - 1] =
          (stack[stack.length - 1] + 255) & 255;
        break;
​
      case '*':
        if (stack.length === 0) throw new Error('Stack is empty');
        output += String.fromCharCode(stack[stack.length - 1]);
        break;
​
      case '[':
        if (stack.length === 0) throw new Error('Stack is empty');
        if (stack[stack.length - 1] === 0) {
          ip++;
          while (tape[ip] !== ']' && ip < tape.length) ip++;
        }