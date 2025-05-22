    switch (cmd) {
      case '>':
        dp++;
        break;
      case '<':
        dp--;
        break;
      case '+':
        tape[dp] = (tape[dp] + 1) & 255;
        break;
      case '-':
        tape[dp] = (tape[dp] - 1 + 256) & 255;
        break;
      case '.':
        output += String.fromCharCode(tape[dp]);
        break;
      case ',':
        tape[dp] = input.charCodeAt(inputIndex++);
        break;
      case '[':
        if (tape[dp] === 0) {
          ip = loopMap[ip];
        }
        break;
      case ']':
        if (tape[dp] !== 0) {
          ip = loopMap[ip];
        }
        break;
    }
    ip++;
  }
​
  return output;
}
​