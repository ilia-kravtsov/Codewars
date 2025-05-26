/*
An array is said to be hollow if it contains 3 or more 0s in the middle that are preceded and followed by the same number of non-zero elements. Furthermore, all the zeroes in the array must be in the middle of the array.

Write a function named isHollow/is_hollow/IsHollow that accepts an integer array and returns true if it is a hollow array,else false.
*/

function isHollow(arr) {
  let n = arr.length;
  let leadingNonZeros = 0;
  let trailingNonZeros = 0;
  let zeroCount = 0;

  while (leadingNonZeros < n && arr[leadingNonZeros] !== 0) {
    leadingNonZeros++;
  }

  while (trailingNonZeros < n && arr[n - 1 - trailingNonZeros] !== 0) {
    trailingNonZeros++;
  }

  for (let i = leadingNonZeros; i < n - trailingNonZeros; i++) {
    if (arr[i] === 0) {
      zeroCount++;
    } else {
      return false;
    }
  }

  return zeroCount >= 3 && leadingNonZeros === trailingNonZeros;
}
