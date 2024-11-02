/*
Write a function that takes in a binary string and returns the equivalent decoded text (the text is ASCII encoded).

Each 8 bits on the binary string represent 1 character on the ASCII table.

The input string will always be a valid binary string.

Characters can be in the range from "00000000" to "11111111" (inclusive)

Note: In the case of an empty binary string your function should return an empty string.
*/

function binaryToString(binary) {
  if (binary.length === 0) return "";

  let text = "";
  for (let i = 0; i < binary.length; i += 8) {
    const byte = binary.slice(i, i + 8);
    const charCode = parseInt(byte, 2);
    text += String.fromCharCode(charCode);
  }
  return text;
}