/*
Create a function isAlt() that accepts a string as an argument and validates whether the vowels (a, e, i, o, u) and consonants are in alternate order.

isAlt("amazon")
// true
isAlt("apple")
// false
isAlt("banana")
// true
Arguments consist of only lowercase letters.
*/

function isAlt(word) {
  const isVowel = (char) => "aeiou".includes(char);

  for (let i = 0; i < word.length - 1; i++) {
    if (isVowel(word[i]) === isVowel(word[i + 1])) {
      return false;
    }
  }
  return true;
}