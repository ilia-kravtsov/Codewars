/*
You are given a secret message you need to decipher. Here are the things you need to know to decipher it:

For each word:

the second and the last letter is switched (e.g. Hello becomes Holle)
the first letter is replaced by its character code (e.g. H becomes 72)
Note: there are no special characters used, only letters and spaces

Examples

decipherThis('72olle 103doo 100ya'); // 'Hello good day'
decipherThis('82yade 115te 103o'); // 'Ready set go'
*/

function decipherThis(str) {
  let words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
      let word = words[i];
      let charCode = parseInt(word);
      word = String.fromCharCode(charCode) + word.slice(String(charCode).length);
      if (word.length > 2) {
          word = word[0] + word[word.length - 1] + word.slice(2, word.length - 1) + word[1];
      }
      words[i] = word;
  }
  return words.join(" ");
}; 