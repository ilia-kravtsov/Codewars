/*
Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata.
*/
const words = str.trim().split(/\s+/);
  
// Loop through the words and reverse every other word
for (let i = 1; i < words.length; i += 2) {
  words[i] = words[i].split('').reverse().join('');
}

// Join the words into a string with exactly one space between each word
return words.join(' ');