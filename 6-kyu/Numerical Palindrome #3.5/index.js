/*
A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward as forward. Examples of numerical palindromes are: 2332, 110011, 54322345

For a given number num, write a function which returns an array of all the numerical palindromes contained within each number. The array should be sorted in ascending order and any duplicates should be removed.

In this kata, single digit numbers and numbers which start or end with zeros (such as 010 and 00) are NOT considered valid numerical palindromes.

If num contains no valid palindromes, return "No palindromes found". Otherwise, return "Not valid" if the input is not an integer or is less than 0.

Examples
palindrome(1221)      =>  [22, 1221]
palindrome(34322122)  =>  [22, 212, 343, 22122]
palindrome(1001331)   =>  [33, 1001, 1331]
palindrome(1294)      =>  "No palindromes found"
palindrome("1221")    =>  "Not valid"
*/

function palindrome(num) {
  if (typeof num !== "number" || num < 0 || num % 1 !== 0) {
    return "Not valid";
  }

  const numStr = num.toString();
  const palindromes = [];

  for (let i = 0; i < numStr.length; i++) {
    for (let j = i + 2; j <= numStr.length; j++) {
      const subNum = numStr.substring(i, j);
      if (
        subNum.length > 1 &&
        subNum === subNum.split("").reverse().join("") &&
        !subNum.startsWith("0")
      ) {
        palindromes.push(parseInt(subNum, 10));
      }
    }
  }

  const uniquePalindromes = Array.from(new Set(palindromes)).sort(
    (a, b) => a - b
  );

  return uniquePalindromes.length > 0
    ? uniquePalindromes
    : "No palindromes found";
}
