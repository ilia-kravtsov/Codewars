/*
You are given a string of n lines, each substring being n characters long: For example:

s = "abcd\nefgh\nijkl\nmnop"

We will study some transformations of this square of strings.

Let's now transform this string!

Symmetry with respect to the main diagonal: diag_1_sym (or diag1Sym or diag-1-sym)
diag_1_sym(s) => "aeim\nbfjn\ncgko\ndhlp"
Clockwise rotation 90 degrees: rot_90_clock (or rot90Clock or rot-90-clock)
rot_90_clock(s) => "miea\nnjfb\nokgc\nplhd"
selfie_and_diag1(s) (or selfieAndDiag1 or selfie-and-diag1) It is initial string + string obtained by symmetry with respect to the main diagonal.
s = "abcd\nefgh\nijkl\nmnop" --> 
"abcd|aeim\nefgh|bfjn\nijkl|cgko\nmnop|dhlp"
or printed for the last:
selfie_and_diag1
abcd|aeim
efgh|bfjn
ijkl|cgko 
mnop|dhlp
Task:
Write these functions diag_1_sym, rot_90_clock, selfie_and_diag1
and

high-order function oper(fct, s) where

fct is the function of one variable f to apply to the string s (fct will be one of diag_1_sym, rot_90_clock, selfie_and_diag1)

Examples:
s = "abcd\nefgh\nijkl\nmnop"
oper(diag_1_sym, s) => "aeim\nbfjn\ncgko\ndhlp"
oper(rot_90_clock, s) => "miea\nnjfb\nokgc\nplhd"
oper(selfie_and_diag1, s) => "abcd|aeim\nefgh|bfjn\nijkl|cgko\nmnop|dhlp"
Notes:
The form of the parameter fct in oper changes according to the language. You can see each form according to the language in "Your test cases".

It could be easier to take these katas from number (I) to number (IV)

Bash Note: The output strings should be separated by \r instead of \n. See "Sample Tests".
*/

function diag1Sym(strng) {
  const lines = strng.split("\n");
  const n = lines.length;
  const result = Array.from({ length: n }, () => "");

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      result[j] += lines[i][j];
    }
  }

  return result.join("\n");
}
function rot90Clock(strng) {
  const diag = diag1Sym(strng);
  const lines = diag.split("\n");
  return lines.map((line) => line.split("").reverse().join("")).join("\n");
}
function selfieAndDiag1(strng) {
  const diag = diag1Sym(strng);
  const originalLines = strng.split("\n");
  const diagLines = diag.split("\n");

  return originalLines.map((line, i) => `${line}|${diagLines[i]}`).join("\n");
}
function oper(fct, s) {
  return fct(s);
}