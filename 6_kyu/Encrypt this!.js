/*
Acknowledgments:
I thank yvonne-liu for the idea and for the example tests :)

Description:
Encrypt this!

You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

Your message is a string containing space separated words.
You need to encrypt each word in the message using the following rules:
The first letter must be converted to its ASCII code.
The second letter must be switched with the last letter
Keepin' it simple: There are no special characters in the input.
Examples:
encryptThis("Hello") === "72olle"
encryptThis("good") === "103doo"
encryptThis("hello world") === "104olle 119drlo"
*/
var encryptThis = function(text) {
  let words = text.split(' ');

  let encodedWords = words.map(function(word) {
    let firstChar = word.charCodeAt(0);

    if (word.length === 1) {
      return firstChar;
    }

    let secondChar = word.charAt(1);
    let lastChar = word.charAt(word.length - 1);

    if (word.length === 2) {
      return firstChar + lastChar;
    }

    let middle = word.slice(2, -1);
    return firstChar + lastChar + middle + secondChar;
  });

  return encodedWords.join(' ');
}