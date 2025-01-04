/*
For encrypting the strings this region of chars is given (in this order!):

all letters (ascending, first all UpperCase, then all LowerCase)
all digits (ascending)
the both chars: " "(space) and "."
These are 64 chars! (This region is zero-based.)
So, every char from this region has 6 bits!

Write two methods:

function encrypt(text)
function decrypt(encryptedText)
Prechecks:

1. If the input-string (for both methods!) has chars, that are not in the region, 
   throw an Exception(C#, C++, Python) or Error(JavaScript).
2. If the input-string is null or empty return exactly this value!
For building the encrypted string:
For every char use these rules:

1. Change the fifth bit of the char and the first bit of the next char. (C1.5 <==> C2.1, only if there is a next char!)
2. Inverse the second and the forth bit of the char.           (2,4 => 0->1 or 1->0)
3. Change the first 3 bit against the last 3 bit of the char.  (1,2,3 <==> 4,5,6)
4. Change every odd bit against the following bit of the char. (1 <==> 2, 3 <==> 4, 5 <==> 6)
5. Reverse the whole line of bits of the char.
6. Change the first against the third bit of the char.         (1 <==> 3)
Of course every rule takes the changed char from the previous rule.
The position of a bit starts from the beginning and not from the end! (So maybe in different order as you thought! See the example.)

Example for the first rule for "B9":

pos: 1 2 3 4 5 6 
B -> 0 0 0 0 0 1
9 -> 1 1 1 1 0 1
Change pos 5 from "B" against pos 1 from "9".
 ->  0 0 0 0 1 1 
 ->  0 1 1 1 0 1 

*/

function encrypt(text) {
  if (!text || text === "") return text;

  const region =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 .";
  if (![...text].every((char) => region.includes(char))) {
    throw new Error("Input contains invalid characters.");
  }

  const chars = [...text].map((char) => region.indexOf(char));
  let bits = chars.map((index) => index.toString(2).padStart(6, "0")).join("");

  let modifiedBits = bits.split("");
  for (let i = 0; i < bits.length - 6; i += 6) {
    const fifthBit = i + 4;
    const nextFirstBit = i + 6;
    [modifiedBits[fifthBit], modifiedBits[nextFirstBit]] = [
      modifiedBits[nextFirstBit],
      modifiedBits[fifthBit],
    ];
  }

  let transformedBits = "";
  for (let i = 0; i < modifiedBits.length; i += 6) {
    let charBits = modifiedBits.slice(i, i + 6);

    [charBits[1], charBits[3]] = [
      charBits[1] === "1" ? "0" : "1",
      charBits[3] === "1" ? "0" : "1",
    ];

    charBits = [...charBits.slice(3), ...charBits.slice(0, 3)];

    for (let j = 0; j < 6; j += 2) {
      [charBits[j], charBits[j + 1]] = [charBits[j + 1], charBits[j]];
    }

    charBits.reverse();

    [charBits[0], charBits[2]] = [charBits[2], charBits[0]];

    transformedBits += charBits.join("");
  }

  const result = [];
  for (let i = 0; i < transformedBits.length; i += 6) {
    const index = parseInt(transformedBits.slice(i, i + 6), 2);
    result.push(region[index]);
  }

  return result.join("");
}

function decrypt(encryptedText) {
  if (!encryptedText || encryptedText === "") return encryptedText;

  const region =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 .";
  if (![...encryptedText].every((char) => region.includes(char))) {
    throw new Error("Input contains invalid characters.");
  }

  const chars = [...encryptedText].map((char) => region.indexOf(char));
  let bits = chars.map((index) => index.toString(2).padStart(6, "0")).join("");

  let transformedBits = "";
  for (let i = 0; i < bits.length; i += 6) {
    let charBits = bits.slice(i, i + 6).split("");

    [charBits[0], charBits[2]] = [charBits[2], charBits[0]];

    charBits.reverse();

    for (let j = 0; j < 6; j += 2) {
      [charBits[j], charBits[j + 1]] = [charBits[j + 1], charBits[j]];
    }

    charBits = [...charBits.slice(3), ...charBits.slice(0, 3)];

    [charBits[1], charBits[3]] = [
      charBits[1] === "1" ? "0" : "1",
      charBits[3] === "1" ? "0" : "1",
    ];

    transformedBits += charBits.join("");
  }

  let modifiedBits = transformedBits.split("");
  for (let i = 0; i < bits.length - 6; i += 6) {
    const fifthBit = i + 4;
    const nextFirstBit = i + 6;
    [modifiedBits[fifthBit], modifiedBits[nextFirstBit]] = [
      modifiedBits[nextFirstBit],
      modifiedBits[fifthBit],
    ];
  }

  const result = [];
  for (let i = 0; i < modifiedBits.length; i += 6) {
    const index = parseInt(modifiedBits.slice(i, i + 6).join(""), 2);
    result.push(region[index]);
  }

  return result.join("");
}