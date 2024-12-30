/*
This is the advanced version of the Vigenère Cipher Helper kata. The following assumes that you have already completed that kata -- if you haven't done it yet, you should start there.

The basic concept is the same as in the previous kata (see the detailed explanation there). However, there is a major difference:

With the basic Vigenère Cipher, we assume the key is repeated for the length of the text. In this kata, the key is only used once, and then complemented by the decoded text. Thus every encoding and decoding is independent (still using the same key to begin with). Furthermore, the key index is only incremented if the current letter is in the provided alphabet.

Visual representation:

"password"                         // original key
"my secret code i want to secure"  // message
"pa ssword myse c retc od eiwant"  // full key used
Write a class that, when given a key and an alphabet, can be used to encode and decode from the cipher.

Examples
var alphabet = 'abcdefghijklmnopqrstuvwxyz';
var key = 'password';

// creates a cipher helper with each letter substituted
// by the corresponding character in the key
var c = new VigenèreCipher(key, alphabet);

c.encode('codewars'); // returns 'rovwsoiv'
c.decode('laxxhsj');  // returns 'waffles'

c.encode('amazingly few discotheques provide jukeboxes')
// returns 'pmsrebxoy rev lvynmylatcwu dkvzyxi bjbswwaib'

c.decode('pmsrebxoy rev lvynmylatcwu dkvzyxi bjbswwaib')
// returns 'amazingly few discotheques provide jukeboxes'
Any character not in the alphabet should be left alone. For example (following from above):

c.encode('CODEWARS'); // returns 'CODEWARS'
*/

function VigenèreAutokeyCipher(key, abc) {
  function shiftChar(char, shift, alphabet) {
    const index = alphabet.indexOf(char);
    if (index === -1) return char;

    const newIndex = (index + shift + alphabet.length) % alphabet.length;
    return alphabet[newIndex];
  }

  function generateFullKey(str, initialKey, alphabet) {
    let fullKey = initialKey;
    for (const char of str) {
      if (alphabet.includes(char)) {
        fullKey += char;
      }
    }
    return fullKey;
  }

  this.encode = function (str) {
    let fullKey = key;
    let encoded = "";

    for (const char of str) {
      if (abc.includes(char)) {
        const shift = abc.indexOf(fullKey[0]);
        encoded += shiftChar(char, shift, abc);
        fullKey += char;
        fullKey = fullKey.slice(1);
      } else {
        encoded += char;
      }
    }

    return encoded;
  };

  this.decode = function (str) {
    let fullKey = key;
    let decoded = "";

    for (const char of str) {
      if (abc.includes(char)) {
        const shift = abc.indexOf(fullKey[0]);
        const decodedChar = shiftChar(char, -shift, abc);
        decoded += decodedChar;
        fullKey += decodedChar;
        fullKey = fullKey.slice(1);
      } else {
        decoded += char;
      }
    }

    return decoded;
  };
}