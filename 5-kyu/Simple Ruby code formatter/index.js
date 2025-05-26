/*
You need to try formatting some Ruby code with no indentations (they're probably from some beginner's attempt at golfing in Ruby or something).

In Ruby, a code block is opened roughly when this happens:

A line begins with class, module, def, if, unless, case, while, until, for or begin, not connected by any other letters
A code block is terminated when one of these happens:

A line with a single end is reached. This permanently ends a code block
A line beginning with else is reached. This ends a preceeding code block and opens a new proceeding one
Note that all keywords are case-sensitive.

For every nested code block, you need to indent the code block by some indentation indent (default to 2 whitespaces).

Also, you should remove all the empty lines from the code (empty as in, there are no characters in the line).

You don't need to check for syntax validity, but you need to check for valid code nesting. If you encounter an end/else without any code blocks to end, or if you reach the end of the code with dangling code blocks, you should throw an Error.
*/

function format(code, indent = "  ") {
  let lines = code.split("\n").filter((line) => line.trim() !== "");
  let formattedCode = [];
  let level = 0;
  const startKeywords = new Set([
    "class",
    "module",
    "def",
    "if",
    "unless",
    "case",
    "while",
    "until",
    "for",
    "begin",
  ]);
  for (let i = 0; i < lines.length; i++) {
    let line = lines[i].trim();
    if (startKeywords.has(line.split(" ")[0])) {
      formattedCode.push(indent.repeat(level) + line);
      level++;
    } else if (line === "else") {
      if (level === 0) {
        throw new Error('Unexpected "else" with no preceding block.');
      }
      level--;
      formattedCode.push(indent.repeat(level) + line);
      level++;
    } else if (line === "end") {
      if (level === 0) {
        throw new Error('Unexpected "end" with no preceding block.');
      }
      level--;
      formattedCode.push(indent.repeat(level) + line);
    } else {
      formattedCode.push(indent.repeat(level) + line);
    }
  }

  if (level !== 0) {
    throw new Error("Unmatched code block. There are unclosed blocks.");
  }

  return formattedCode.join("\n");
}