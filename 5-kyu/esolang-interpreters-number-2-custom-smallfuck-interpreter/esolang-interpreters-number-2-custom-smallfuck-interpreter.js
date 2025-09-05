function interpreter(code, tape) {
  
  tape = tape.split("").map(Number);
  const n = tape.length;
  const cmds = code.split("").filter(c => "><*[]".includes(c));
  const stack = [];
  const jump = {};
  
  cmds.forEach((c, i) => {
    if (c === "[") stack.push(i);
    if (c === "]") {
      const open = stack.pop();
      jump[open] = i;
      jump[i] = open;
    }
  });
  
  let ptr = 0;
  let ip = 0;
  
  while (ip < cmds.length && ptr >= 0 && ptr < n) {
    const c = cmds[ip];
    switch (c) {
      case ">": ptr++; break;
      case "<": ptr--; break;
      case "*": tape[ptr] ^= 1; break;
      case "[": if (tape[ptr] === 0) ip = jump[ip]; break;
      case "]": if (tape[ptr] !== 0) ip = jump[ip]; break;
    }
    ip++;
  }
  return tape.join("");
}