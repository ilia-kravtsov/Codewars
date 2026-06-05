class FiveCommands {
  constructor() {}
​
  read(input, debug) {
    let tape = [0];
    let ptr = 0;
    let output = "";
​
    for (const cmd of input) {
      switch (cmd) {
        case "+":
          ptr++;
          if (ptr >= tape.length) tape.push(0);
          break;
​
        case "-":
          if (ptr === 0) {
            tape.unshift(0);
          } else {
            ptr--;
          }
          break;
​
        case "^":
          tape[ptr]++;
          break;
​
        case "v":
          tape[ptr]--;
          break;
​
        case "*":
          output += tape[ptr];
          break;
      }
    }
​
    const debugOutput = debug
      ? tape.map((value, index) => `${index}->${value}`)
      : [];
​
    return new Output(output, debugOutput);
  }
}