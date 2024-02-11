/* 
Your job is to write a function which increments a string, to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string.
Examples:

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered.
*/

function incrementString (strng) {
  if (/\d$/.test(strng)) {
    const number = strng.match(/\d+$/)[0];
    const incrementedNumber = String(Number(number) + 1);
    const paddedNumber = incrementedNumber.padStart(number.length, '0');
    return strng.replace(/\d+$/, paddedNumber);
  } else {
    return strng + '1';
  }
}