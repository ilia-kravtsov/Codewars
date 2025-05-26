/*
For a given positive integer convert it into its English representation. All words are lower case and are separated with one space. No trailing spaces are allowed.

To keep it simple, hyphens and the writing of the word 'and' both aren't enforced. (But if you are looking for some extra challenge, such an output will pass the tests.)

Large number reference: http://en.wikipedia.org/wiki/Names_of_large_numbers (U.S., Canada and modern British)

Input range: 1 -> 10**26 (10**16 for JS)

Examples:

intToEnglish(1) == 'one'

intToEnglish(10) == 'ten'

intToEnglish(25161045656) == 'twenty five billion one hundred sixty one million forty five thousand six hundred fifty six'
or

intToEnglish(25161045656) == 'twenty five billion one hundred sixty-one million forty-five thousand six hundred and fifty-six'
*/

function intToEnglish(number) {
  const ones = [
    "",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ];
  const tens = [
    "",
    "",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];
  const scales = [
    "",
    "thousand",
    "million",
    "billion",
    "trillion",
    "quadrillion",
    "quintillion",
  ];

  if (number === 0) return "zero";

  const chunkify = (num) => {
    const chunks = [];
    while (num > 0) {
      chunks.unshift(num % 1000);
      num = Math.floor(num / 1000);
    }
    return chunks;
  };

  const chunkToWords = (chunk) => {
    const hundreds = Math.floor(chunk / 100);
    const remainder = chunk % 100;
    const tensPart = Math.floor(remainder / 10);
    const onesPart = remainder % 10;

    let words = [];
    if (hundreds > 0) {
      words.push(ones[hundreds], "hundred");
    }
    if (remainder > 0) {
      if (remainder < 20) {
        words.push(ones[remainder]);
      } else {
        words.push(tens[tensPart]);
        if (onesPart > 0) {
          words.push(ones[onesPart]);
        }
      }
    }
    return words.join(" ");
  };

  const chunks = chunkify(number);
  const words = chunks.map((chunk, index) => {
    if (chunk === 0) return "";
    const scale = scales[chunks.length - 1 - index];
    return `${chunkToWords(chunk)} ${scale}`.trim();
  });

  return words.filter(Boolean).join(" ");
}