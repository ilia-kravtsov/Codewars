/*
Imagine an alphabetically sorted list of all unique anagrams of a given word. Return the n-th anagram in such list (counting from 0). If n is bigger than the list length return empty string.

Total number of anagrams and n value are within a safe integer range (below Number.MAX_SAFE_INTEGER for js).

It's a reverse problem of Alphabetic Anagrams. You may want to solve it first.
*/

function factorial(n) {
  return n <= 1 ? 1 : n * factorial(n - 1);
}

function countOccurrences(arr) {
  let count = {};
  for (let char of arr) {
    count[char] = (count[char] || 0) + 1;
  }
  return count;
}

function uniqueFactorial(count) {
  let denom = 1;
  for (let key in count) {
    denom *= factorial(count[key]);
  }
  return denom;
}

function permutationByNumber(word, n) {
  let chars = [...word].sort();
  let length = chars.length;
  let count = countOccurrences(chars);
  let totalAnagrams = factorial(length) / uniqueFactorial(count);

  if (n >= totalAnagrams) return "";

  let result = "";
  while (length > 0) {
    let fact = factorial(length - 1) / uniqueFactorial(count);
    let index = 0;
    for (let char in count) {
      if (count[char] === 0) continue;
      let tempCount = { ...count };
      tempCount[char]--;
      let tempFact = factorial(length - 1) / uniqueFactorial(tempCount);

      if (n < tempFact) {
        result += char;
        count[char]--;
        break;
      } else {
        n -= tempFact;
      }
    }
    length--;
  }

  return result;
}