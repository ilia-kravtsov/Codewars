/*
Find the longest substring in alphabetical order.

Example: the longest alphabetical substring in "asdfaaaabbbbcttavvfffffdf" is "aaaabbbbctt".

There are tests with strings up to 10 000 characters long so your code will need to be efficient.

The input will only consist of lowercase characters and will be at least one letter long.

If there are multiple solutions, return the one that appears first.
*/

function longest(str) {
  let maxSubstring = "";
  let currentSubstring = "";

  for (let i = 0; i < str.length; i++) {
    if (i === 0 || str[i] >= str[i - 1]) {
      currentSubstring += str[i];
    } else {
      if (currentSubstring.length > maxSubstring.length) {
        maxSubstring = currentSubstring;
      }
      currentSubstring = str[i];
    }
  }

  if (currentSubstring.length > maxSubstring.length) {
    maxSubstring = currentSubstring;
  }

  return maxSubstring;
}