/*
You are given a string of numbers between 0-9. Find the average of these numbers and return it as a floored whole number (ie: no decimal places) written out as a string. Eg:

"zero nine five two" -> "four"

If the string is empty or includes a number greater than 9, return "n/a"
*/

function averageString(str) {
  const numWords = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  const words = str.split(" ");
  if (words.length === 0 || str.trim() === "") return "n/a";
  let sum = 0;
  for (let word of words) {
    const index = numWords.indexOf(word);
    if (index === -1) {
      return "n/a";
    }
    sum += index;
  }
  const average = Math.floor(sum / words.length);
  return numWords[average];
}