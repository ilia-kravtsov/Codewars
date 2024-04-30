/*
A palindrome is a series of characters that read the same forwards as backwards such as "hannah", "racecar" and "lol".

For this Kata you need to write a function that takes a string of characters and returns the length, as an integer value, of longest alphanumeric palindrome that could be made by combining the characters in any order but using each character only once. The function should not be case sensitive.

For example if passed "Hannah" it should return 6 and if passed "aabbcc_yYx_" it should return 9 because one possible palindrome would be "abcyxycba".
*/

function longestPalindrome(str) {
  const cleanStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  const charMap = new Map();
  for (let char of cleanStr) {
    charMap.set(char, (charMap.get(char) || 0) + 1);
  }

  let oddFound = false;
  let length = 0;

  for (let count of charMap.values()) {
    if (count % 2 === 0) {
      length += count;
    } else {
      length += count - 1;
      oddFound = true;
    }
  }

  if (oddFound) {
    length++;
  }

  return length;
}
