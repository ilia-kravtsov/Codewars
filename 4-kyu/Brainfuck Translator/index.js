/*
Brainfuck is one of the most well-known esoteric programming languages. But it can be hard to understand any code longer that 5 characters. In this kata you have to solve that problem.

Description

In this kata you have to write a function which will do 3 tasks:

Optimize the given Brainfuck code.
Check it for mistakes.
Translate the given Brainfuck programming code into C programming code.
More formally about each of the tasks:

Your function has to remove from the source code all useless command sequences such as: '+-', '<>', '[]'. Also it must erase all characters except +-<>,.[].
Example:
"++--+." -> "+."
"[][+++]" -> "[+++]"
"<>><" -> ""
If the source code contains unpaired braces, your function should return "Error!" string.
Your function must generate a string of the C programming code as follows:

Sequences of the X commands + or - must be replaced by \*p += X;\n or \*p -= X;\n.
Example:
"++++++++++" -> "\*p += 10;\n"
"------" -> "\*p -= 6;\n"
Sequences of the Y commands > or < must be replaced by p += Y;\n or p -= Y;\n.
Example:
">>>>>>>>>>" -> "p += 10;\n"
"<<<<<<" -> "p -= 6;\n"
. command must be replaced by putchar(\*p);\n.
Example:
".." -> "putchar(\*p);\nputchar(\*p);\n"
, command must be replaced by \*p = getchar();\n.
Example:
"," -> "\*p = getchar();\n"
[ command must be replaced by if (\*p) do {\n. ] command must be replaced by } while (\*p);\n.
Example:
"[>>]" ->
if (\*p) do {\n
  p += 2;\n
} while (\*p);\n
Each command in the code block must be shifted 2 spaces to the right accordingly to the previous code block.
Example:
"[>>[<<]]" ->
if (\*p) do {\n
  p += 2;\n
  if (\*p) do {\n
    p -= 2;\n
  } while (\*p);\n
} while (\*p);\n
Examples

Input:
+++++[>++++.<-]
Output:
*p += 5;
if (*p) do {
  p += 1;
  *p += 4;
  putchar(*p);
  p -= 1;
  *p -= 1;
} while (*p);
*/

function brainfuck_to_c(sc) {
  let allowed = sc.match(/[+\-<>\[\].,]/g);
  if (!allowed) return "";
  let code = allowed.join("");

  let prev;
  do {
    prev = code;
    code = code.replace(/\+\-|\-\+|\<\>|\>\<|\[\]/g, "");
  } while (code !== prev);

  let balance = 0;
  for (let ch of code) {
    if (ch === "[") balance++;
    else if (ch === "]") {
      balance--;
      if (balance < 0) return "Error!";
    }
  }
  if (balance !== 0) return "Error!";

  let output = "";
  let indent = 0;
  const indentStr = () => "  ".repeat(indent);

  for (let i = 0; i < code.length; ) {
    let ch = code[i];

    if (ch === "+" || ch === "-") {
      let net = 0;
      while (i < code.length && (code[i] === "+" || code[i] === "-")) {
        net += code[i] === "+" ? 1 : -1;
        i++;
      }
      if (net !== 0) {
        if (net > 0) output += indentStr() + `*p += ${net};\n`;
        else output += indentStr() + `*p -= ${-net};\n`;
      }
      continue;
    }

    if (ch === ">" || ch === "<") {
      let net = 0;
      while (i < code.length && (code[i] === ">" || code[i] === "<")) {
        net += code[i] === ">" ? 1 : -1;
        i++;
      }
      if (net !== 0) {
        if (net > 0) output += indentStr() + `p += ${net};\n`;
        else output += indentStr() + `p -= ${-net};\n`;
      }
      continue;
    }

    if (ch === ".") {
      output += indentStr() + "putchar(*p);\n";
      i++;
      continue;
    }
    if (ch === ",") {
      output += indentStr() + "*p = getchar();\n";
      i++;
      continue;
    }
    if (ch === "[") {
      output += indentStr() + "if (*p) do {\n";
      indent++;
      i++;
      continue;
    }
    if (ch === "]") {
      indent--;
      output += indentStr() + "} while (*p);\n";
      i++;
      continue;
    }
  }

  return output;
}