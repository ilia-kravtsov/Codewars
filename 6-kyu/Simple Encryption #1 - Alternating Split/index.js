
/*
Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.

Examples:

encrypt("012345", 1)  =>  "135024"
encrypt("012345", 2)  =>  "135024"  ->  "304152"
encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

encrypt("01234", 1)  =>  "13024"
encrypt("01234", 2)  =>  "13024"  ->  "32104"
encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
Together with the encryption function, you should also implement a decryption function which reverses the process.

If the string S is an empty value or the integer N is not positive, return the first argument without changes.
*/
function encrypt(text, n) {
  if (!text || n <= 0) {
    return text;
  }

  let textArray = text.split('');

  while (n > 0) {
    let evenIndexArray = [];
    let oddIndexArray = [];

    for (let i = 0; i < textArray.length; i++) {
      if (i % 2 === 0) {
        evenIndexArray.push(textArray[i]);
      } else {
        oddIndexArray.push(textArray[i]);
      }
    }

    textArray = oddIndexArray.concat(evenIndexArray);
    n--;
  }

  return textArray.join('');
}

function decrypt(encryptedText, n) {
 if (!encryptedText || n <= 0) {
    return encryptedText;
  }

  while (n > 0) {
    let decryptedTextArray = new Array(encryptedText.length);

    for (let i = 0, j = 0, k = Math.floor((encryptedText.length) / 2); i < encryptedText.length; i += 2, j++, k++) {
      decryptedTextArray[i] = encryptedText[k];

      if (i === encryptedText.length - 1) {
        continue;
      }

      decryptedTextArray[i+1] = encryptedText[j];
    }

    encryptedText = decryptedTextArray.join('');
    n--;
  }

  return encryptedText;
}