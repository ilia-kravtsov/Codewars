/*
Given the string representations of two integers, return the string representation of the sum of those integers.

For example:

sumStrings('1','2') // => '3'
A string representation of an integer will contain no characters besides the ten numerals "0" to "9".

I have removed the use of BigInteger and BigDecimal in java

Python: your solution need to work with huge numbers (about a milion digits), converting to int will not work.
*/

function sumStrings(a, b) {
  a = a.replace(/^0+/, "");
  b = b.replace(/^0+/, "");
  let carry = 0;
  let result = [];
  if (b.length > a.length) [a, b] = [b, a];
  let aIndex = a.length - 1;
  let bIndex = b.length - 1;

  while (aIndex >= 0 || bIndex >= 0 || carry) {
    const digitA = aIndex >= 0 ? parseInt(a[aIndex--], 10) : 0;
    const digitB = bIndex >= 0 ? parseInt(b[bIndex--], 10) : 0;

    const sum = digitA + digitB + carry;
    carry = Math.floor(sum / 10);
    result.push(sum % 10);
  }

  return result.reverse().join("");
}