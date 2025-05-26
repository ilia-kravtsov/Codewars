/*
Given a string, remove any characters that are unique from the string.

Example:

input: "abccdefee"

output: "cceee"
*/

function onlyDuplicates(str) {
  let result = "";
  let storage = {};
  for (let i = 0; i < str.length; i++) {
    if (storage.hasOwnProperty(str[i])) {
      storage[str[i]] = storage[str[i]] + 1;
    } else {
      storage[str[i]] = 1;
    }
  }
  for (let i = 0; i < str.length; i++) {
    if (storage[str[i]] > 1) {
      result += str[i];
    }
  }
  return result;
}