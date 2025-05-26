/*
Given a varying number of integer arguments, return the digits that are not present in any of them.

Example:

[12, 34, 56, 78]  =>  "09"
[2015, 8, 26]     =>  "3479"
Note: the digits in the resulting string should be sorted.
*/
function unusedDigits(...numbers) {
  const allDigits = '0123456789';
  const usedDigits = numbers.join('').split('').filter((digit, index, array) => array.indexOf(digit) === index);
  const unusedDigits = allDigits.split('').filter(digit => !usedDigits.includes(digit));
  return unusedDigits.sort().join('');
}