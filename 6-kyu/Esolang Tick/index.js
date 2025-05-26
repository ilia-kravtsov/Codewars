/*
Task
Make a custom esolang interpreter for the language Tick. Tick is a descendant of Ticker but also very different data and command-wise.

Syntax/Info
Commands are given in character format. Non-command characters should be ignored. Tick has an potentially infinite memory as opposed to Ticker(which you have a special command to add a new cell) and only has 4 commands(as opposed to 7). Read about this esolang here.

Commands
>: Move data selector right

<: Move data selector left(infinite in both directions)

+: Increment memory cell by 1. 255+1=0

*: Add ascii value of memory cell to the output tape.

Examples
Hello world!

'++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*>+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*>++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++**>+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*>++++++++++++++++++++++++++++++++*>+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*<<*>>>++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*<<<<*>>>>>++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*>+++++++++++++++++++++++++++++++++*'
*/

function interpreter(tape) {
  const memory = [0];
  let pointer = 0;
  let output = "";

  for (let i = 0; i < tape.length; i++) {
    const command = tape[i];
    if (command === ">") {
      pointer++;
      if (pointer === memory.length) {
        memory.push(0);
      }
    } else if (command === "<") {
      pointer--;
      if (pointer < 0) {
        memory.unshift(0);
        pointer = 0;
      }
    } else if (command === "+") {
      memory[pointer] = (memory[pointer] + 1) % 256;
    } else if (command === "*") {
      output += String.fromCharCode(memory[pointer]);
    }
  }

  return output;
}
