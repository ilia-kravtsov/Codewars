/*
Businesses use keypad letters in creative ways to spell out a phone number and make it more memorable. Example: http://en.wikipedia.org/wiki/File:Telephone-keypad2.svg

Create a mapping for your dialer as given in the above link. Constraints:

letters are all uppercase
digits 0, 1 are mapped to 0, 1 respectively
Write a function that takes four digits of a phone number, and returns a list of all of the words that can be written with that number. (You should return all permutations, not only English words.)
*/

function telephoneWords(digitString) {
  const phoneDigitsToLetters = {
    0: "0",
    1: "1",
    2: "ABC",
    3: "DEF",
    4: "GHI",
    5: "JKL",
    6: "MNO",
    7: "PQRS",
    8: "TUV",
    9: "WXYZ",
  };

  const wordsArr = [];

  const addDigitLetter = (letter, digit) => {
    if (letter.length === digitString.length) {
      wordsArr.push(letter);
      return;
    }

    const digitLetter = phoneDigitsToLetters[digitString[digit]];

    for (let i = 0; i < digitLetter.length; i++) {
      addDigitLetter(letter + digitLetter[i], digit + 1);
    }
  };

  addDigitLetter("", 0);

  return wordsArr;
}
