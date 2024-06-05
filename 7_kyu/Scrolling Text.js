/*
Let's create some scrolling text!

Your task is to complete the function which takes a string, and returns an array with all possible rotations of the given string, in uppercase.

Example
scrollingText("codewars") should return:

[ "CODEWARS",
  "ODEWARSC",
  "DEWARSCO",
  "EWARSCOD",
  "WARSCODE",
  "ARSCODEW"
  "RSCODEWA",
  "SCODEWAR" ]
*/
function scrollingText(text){
  text = text.toUpperCase();
  let rotations = [];
  for (let i = 0; i < text.length; i++) {
    let rotation = text.slice(i) + text.slice(0, i);
    rotations.push(rotation);
  }
  return rotations;
}