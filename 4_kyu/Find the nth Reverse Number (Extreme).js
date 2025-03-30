/*
Reverse Number is a number which is the same when reversed.

For example, the first 20 Reverse Numbers are:

0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 22, 33, 44, 55, 66, 77, 88, 99, 101
TASK:

You need to return the nth reverse number. (Assume that reverse numbers start from 0 as shown in the example.)
NOTES:

1 < n <= 100000000000
You need to use BigInt as return type in JS since it exceeds max integer size.
If this is too hard, you can try https://www.codewars.com/kata/600bfda8a4982600271d6069

```if:rust

1 < n <= 10000000000
*/

function findReverseNumber(n) {
  n = BigInt(n) - 1n;
  if (n < 10n) return n;
  let cumulative = 10n;
  let length = 1;
  while (cumulative <= n) {
    length++;
    let count;
    if (length % 2 === 0) {
      let halfLength = BigInt(length / 2);
      count = 9n * 10n ** (halfLength - 1n);
    } else {
      let halfLength = BigInt((length + 1) / 2);
      count = 9n * 10n ** (halfLength - 1n);
    }
    cumulative += count;
  }
  let prev = 10n;
  for (let L = 2; L < length; L++) {
    let count;
    if (L % 2 === 0) {
      let halfLength = BigInt(L / 2);
      count = 9n * 10n ** (halfLength - 1n);
    } else {
      let halfLength = BigInt((L + 1) / 2);
      count = 9n * 10n ** (halfLength - 1n);
    }
    prev += count;
  }
  let offset = n - prev;
  let halfLength =
    length % 2 === 0 ? BigInt(length / 2) : BigInt((length + 1) / 2);
  let base = 10n ** (halfLength - 1n);
  let leftHalf = base + offset;
  let leftStr = leftHalf.toString();
  let palindromeStr;
  if (length % 2 === 0) {
    palindromeStr = leftStr + leftStr.split("").reverse().join("");
  } else {
    palindromeStr = leftStr + leftStr.slice(0, -1).split("").reverse().join("");
  }
  return BigInt(palindromeStr);
}