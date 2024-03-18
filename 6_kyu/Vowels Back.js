/*
You need to play around with the provided string (s).

Move consonants forward 9 places through the alphabet. If they pass 'z', start again at 'a'.

Move vowels back 5 places through the alphabet. If they pass 'a', start again at 'z'. For our Polish friends this kata does not count 'y' as a vowel.

Exceptions:

If the character is 'c' or 'o', move it back 1 place. For 'd' move it back 3, and for 'e', move it back 4.

If a moved letter becomes 'c', 'o', 'd' or 'e', revert it back to it's original value.

Provided string will always be lower case, won't be empty and will have no special characters.
*/
function vowelBack(s) {
  const moveConsonant = (c) => {
    let code = c.charCodeAt(0) + 9;
    if (code > 'z'.charCodeAt(0)) {
      code -= 26;
    }
    return String.fromCharCode(code);
  };

  const moveVowel = (c) => {
    let code = c.charCodeAt(0) - 5;
    if (code < 'a'.charCodeAt(0)) {
      code += 26;
    }
    return String.fromCharCode(code);
  };

  let result = '';
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    let newChar;

    if ('aeiou'.includes(c)) {
      newChar = moveVowel(c);
    } else if ('bcdfghjklmnpqrstvwxyz'.includes(c)) {
      newChar = moveConsonant(c);
    } else {
      newChar = c;
    }

    switch (c) {
      case 'c':
      case 'o':
        newChar = String.fromCharCode(c.charCodeAt(0) - 1);
        break;
      case 'd':
        newChar = String.fromCharCode(c.charCodeAt(0) - 3);
        break;
      case 'e':
        newChar = String.fromCharCode(c.charCodeAt(0) - 4);
        break;
    }

    if ('code'.includes(newChar)) {
      newChar = c;
    }

    result += newChar;
  }

  return result;
}
