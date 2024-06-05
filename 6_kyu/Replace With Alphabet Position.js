/*
In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example
Input = "The sunset sets at twelve o' clock."
Output = "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
*/

function alphabetPosition(text) {
  let result = '';
  for (let i = 0; i < text.length; i++) {
      let charCode = text.charCodeAt(i);
      if (charCode >= 97 && charCode <= 122) {
          result += (charCode - 96) + ' ';
      } else if (charCode >= 65 && charCode <= 90) {
          result += (charCode - 64) + ' ';
      }
  }
  return result.trim();
}