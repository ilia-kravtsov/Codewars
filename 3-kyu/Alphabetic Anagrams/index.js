/*
Consider a "word" as any sequence of capital letters A-Z (not limited to just "dictionary words"). For any word with at least two different letters, there are other words composed of the same letters but in a different order (for instance, STATIONARILY/ANTIROYALIST, which happen to both be dictionary words; for our purposes "AAIILNORSTTY" is also a "word" composed of the same letters as these two).

We can then assign a number to every word, based on where it falls in an alphabetically sorted list of all words made up of the same group of letters. One way to do this would be to generate the entire list of words and find the desired one, but this would be slow if the word is long.

Given a word, return its number. Your function should be able to accept any word 25 letters or less in length (possibly with some letters repeated), and take no more than 500 milliseconds to run. To compare, when the solution code runs the 27 test cases in JS, it takes 101ms.

For very large words, you'll run into number precision issues in JS (if the word's position is greater than 2^53). For the JS tests with large positions, there's some leeway (.000000001%). If you feel like you're getting it right for the smaller ranks, and only failing by rounding on the larger, submit a couple more times and see if it takes.

Python, Java and Haskell have arbitrary integer precision, so you must be precise in those languages (unless someone corrects me).

C# is using a long, which may not have the best precision, but the tests are locked so we can't change it.

Sample words, with their rank:
ABAB = 2
AAAB = 1
BAAA = 4
QUESTION = 24572
BOOKKEEPER = 10743
*/

function listPosition(word) {
  function removeLeadingZeros(s) {
    let i = 0;
    while (i < s.length - 1 && s[i] === "0") i++;
    return s.slice(i);
  }

  function compareStrings(a, b) {
    a = removeLeadingZeros(a);
    b = removeLeadingZeros(b);
    if (a.length < b.length) return -1;
    if (a.length > b.length) return 1;
    return a === b ? 0 : a < b ? -1 : 1;
  }

  function addStrings(a, b) {
    let res = "";
    let carry = 0;
    a = a.split("").reverse();
    b = b.split("").reverse();
    const n = Math.max(a.length, b.length);
    for (let i = 0; i < n; i++) {
      const d1 = i < a.length ? parseInt(a[i], 10) : 0;
      const d2 = i < b.length ? parseInt(b[i], 10) : 0;
      const sum = d1 + d2 + carry;
      res = (sum % 10) + res;
      carry = Math.floor(sum / 10);
    }
    if (carry > 0) res = carry + res;
    return removeLeadingZeros(res);
  }

  function subtractStrings(a, b) {
    let res = "";
    a = a.split("").reverse();
    b = b.split("").reverse();
    let carry = 0;
    for (let i = 0; i < a.length; i++) {
      const d1 = parseInt(a[i], 10);
      const d2 = i < b.length ? parseInt(b[i], 10) : 0;
      let sub = d1 - d2 - carry;
      if (sub < 0) {
        sub += 10;
        carry = 1;
      } else {
        carry = 0;
      }
      res = sub + res;
    }
    return removeLeadingZeros(res);
  }

  function multiplyStringByInt(a, n) {
    if (n === 0 || a === "0") return "0";
    let res = "";
    let carry = 0;
    for (let i = a.length - 1; i >= 0; i--) {
      const prod = parseInt(a[i], 10) * n + carry;
      res = (prod % 10) + res;
      carry = Math.floor(prod / 10);
    }
    if (carry > 0) res = carry.toString() + res;
    return removeLeadingZeros(res);
  }

  function multiplyStrings(a, b) {
    if (a === "0" || b === "0") return "0";
    const result = Array(a.length + b.length).fill(0);
    for (let i = a.length - 1; i >= 0; i--) {
      for (let j = b.length - 1; j >= 0; j--) {
        const mul = parseInt(a[i], 10) * parseInt(b[j], 10);
        const sum = result[i + j + 1] + mul;
        result[i + j + 1] = sum % 10;
        result[i + j] += Math.floor(sum / 10);
      }
    }
    const resStr = result.join("");
    return removeLeadingZeros(resStr);
  }

  function divideStrings(dividend, divisor) {
    dividend = removeLeadingZeros(dividend);
    divisor = removeLeadingZeros(divisor);
    if (compareStrings(dividend, divisor) < 0) return "0";
    let quotient = "";
    let remainder = "";
    for (let i = 0; i < dividend.length; i++) {
      remainder += dividend[i];
      remainder = removeLeadingZeros(remainder);
      let count = 0;
      while (compareStrings(remainder, divisor) >= 0) {
        remainder = subtractStrings(remainder, divisor);
        count++;
      }
      quotient += count.toString();
    }
    quotient = removeLeadingZeros(quotient);
    return quotient;
  }

  const n = word.length;
  const fact = [];
  fact[0] = "1";
  for (let i = 1; i <= n; i++) {
    fact[i] = multiplyStringByInt(fact[i - 1], i);
  }

  const freq = {};
  for (const char of word) {
    freq[char] = (freq[char] || 0) + 1;
  }

  function permutationsCount() {
    let total = 0;
    for (const key in freq) {
      total += freq[key];
    }
    const numerator = fact[total];
    let denom = "1";
    for (const key in freq) {
      if (freq[key] > 0) {
        denom = multiplyStrings(denom, fact[freq[key]]);
      }
    }
    return divideStrings(numerator, denom);
  }

  let rank = "0";
  for (let i = 0; i < n; i++) {
    const current = word[i];
    for (let c = 65; c < current.charCodeAt(0); c++) {
      const letter = String.fromCharCode(c);
      if (freq[letter] > 0) {
        freq[letter]--;
        const count = permutationsCount();
        rank = addStrings(rank, count);
        freq[letter]++;
      }
    }
    freq[current]--;
  }
  rank = addStrings(rank, "1");

  const maxSafe = "9007199254740991";
  if (compareStrings(rank, maxSafe) <= 0) {
    return Number(rank);
  }
  return rank;
}