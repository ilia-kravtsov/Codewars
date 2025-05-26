decodeMorse = function (morseCode) {
  var MorseStorage = {
    ".-": "A",
    "-...": "B",
    "-.-.": "C",
    "-..": "D",
    ".": "E",
    "..-.": "F",
    "--.": "G",
    "....": "H",
    "..": "I",
    ".---": "J",
    "-.-": "K",
    ".-..": "L",
    "--": "M",
    "-.": "N",
    "---": "O",
    ".--.": "P",
    "--.-": "Q",
    ".-.": "R",
    "...": "S",
    "-": "T",
    "..-": "U",
    "...-": "V",
    ".--": "W",
    "-..-": "X",
    "-.--": "Y",
    "--..": "Z",
    ".----": "1",
    "..---": "2",
    "...--": "3",
    "....-": "4",
    ".....": "5",
    "-....": "6",
    "--...": "7",
    "---..": "8",
    "----.": "9",
    "-----": "0",
    "..--..": "?",
    "-.-.--": "!",
    ".-.-.-": ".",
    "--..--": ",",
    "-.-.-.": ";",
    "---...": ":",
    ".-.-.": "+",
    "-....-": "-",
    "-..-.": "/",
    "-...-": "=",
    "...---...": "SOS",
  };

  let morseCodeArr = morseCode.trim().split(" ");

  let a = [1, 2, 3, 4, 5];

  let result = [];
  let space = false;

  for (let i = 0; i < morseCodeArr.length; i++) {
    let letter = MorseStorage[morseCodeArr[i]];
    console.log(letter);
    if (letter) {
      result.push(letter);
      space = false;
    } else {
      if (space) continue;
      result.push(" ");
    }
  }

  return result.join("");
};

console.log(decodeMorse(".... . -.--   .--- ..- -.. ."));

// var decodeBits = function (bits) {
//   // Remove leading and trailing zeros
//   bits = bits.replace(/^0+|0+$/g, "");

//   // Find the transmission rate by finding the shortest sequence of 1s or 0s
//   const rate = Math.min(...bits.match(/0+|1+/g).map((x) => x.length));

//   // Decode the message to dots, dashes and spaces
//   return bits
//     .replace(new RegExp(`1{${rate * 3}}`, "g"), "-")
//     .replace(new RegExp(`1{${rate}}`, "g"), ".")
//     .replace(new RegExp(`0{${rate * 7}}`, "g"), "   ")
//     .replace(new RegExp(`0{${rate * 3}}`, "g"), " ")
//     .replace(new RegExp(`0{${rate}}`, "g"), "");
// };

// var decodeMorse = function (morseCode) {
//   // Split the Morse code into words and decode each word
//   return morseCode
//     .trim()
//     .split("   ")
//     .map((word) =>
//       word
//         .split(" ")
//         .map((character) => MORSE_CODE[character])
//         .join("")
//     )
//     .join(" ");
// };
