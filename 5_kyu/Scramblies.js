/*
Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

Notes:

Only lower case letters will be used (a-z). No punctuation or digits will be included.
Performance needs to be considered.
Examples
scramble('rkqodlw', 'world') ==> True
scramble('cedewaraaossoqqyt', 'codewars') ==> True
scramble('katas', 'steak') ==> False
*/

function scramble(word_1, word_2) {
  const count_1 = {};
  const count_2 = {};

  for (const char of word_1) {
    count_1[char] = (count_1[char] || 0) + 1;
  }

  for (const char of word_2) {
    count_2[char] = (count_2[char] || 0) + 1;
  }

  for (const char in count_2) {
    if (!count_1[char] || count_1[char] < count_2[char]) {
      return false;
    }
  }

  return true;
}