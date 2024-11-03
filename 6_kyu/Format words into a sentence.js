/*
Complete the method so that it formats the words into a single comma separated value. The last word should be separated by the word 'and' instead of a comma. The method takes in an array of strings and returns a single formatted string.

Note:

Empty string values should be ignored.
Empty arrays or null/nil/None values being passed into the method should result in an empty string being returned.
Example: (Input --> output)

['ninja', 'samurai', 'ronin'] --> "ninja, samurai and ronin"
['ninja', '', 'ronin'] --> "ninja and ronin"
[] -->""
*/

function formatWords(words) {
  //___________________________________version 1

  //   if (!words || words.length === 0) return "";
  //   const filteredWords = words.filter(word => word);
  //   if (filteredWords.length === 0) return "";
  //   if (filteredWords.length === 1) return filteredWords[0];
  //   const lastWord = filteredWords.pop();
  //   return `${filteredWords.join(", ")} and ${lastWord}`;

  //___________________________________version 2

  if (!words || !words.length) return "";
  words = words.filter(Boolean);
  if (words.length === 0) return "";
  if (words.length === 1) return words[0];
  return words.slice(0, -1).join(", ") + " and " + words[words.length - 1];

  //___________________________________version 3

  //   if (!words || !words.length) return '';
  //   words = words.filter(Boolean);
  //   let result = '';
  //   for (let i = 0; i < words.length; i++) {
  //     if (words[i] === words[words.length - 2] && words[words.length - 2]) {
  //       result += words[i] + ' and ';
  //     } else if (words[i] === words[words.length - 1]) {
  //       result += words[i];
  //       break
  //     } else if (words[i]) {
  //       result += words[i] + ', ';
  //     }
  //   }
  //   return result;
}