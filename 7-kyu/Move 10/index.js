/*
Move every letter in the provided string forward 10 letters through the alphabet.

If it goes past 'z', start again at 'a'.

Input will be a string with length > 0.
*/
function moveTen(s){
  let result = "";
  for (let i = 0; i < s.length; i++) {
    let charCode = s.charCodeAt(i);
    let shiftedCharCode = ((charCode - 97 + 10) % 26) + 97;
    result += String.fromCharCode(shiftedCharCode);
  }
  return result
}