/**
Check if the elements of an array form an arithmetic progression or if the array contains a sequence of elements that form an arithmetic progression.

If the entire array forms an arithmetic sequence, the function returns true. If it's not an arithmetic progression itself but it contains at least one, return the index of the element where the first arithmetic sequence starts. If it's not one itself and it doesn't contain any, return false.

An arithmetic sequence will always consist of at least 3 numbers. If this condition is not satisfied, the function will return undefined.

The function hasArithmProg takes a single parameter, arr, and can return a boolean, a number(the index) or undefined.

An arithmetic progression is a sequence of numbers such that the difference between two consecutive terms is a constant quantity.

e.g. 1, 2, 3, 4,... constant = 1 e.g. 9, 7, 5, 3,... constant = -2
*/

function hasArithmProg(arr) {
  if (arr.length < 3) {
    return undefined;
  }

  function isArithmeticProgression(subArr) {
    let diff = subArr[1] - subArr[0];
    for (let i = 2; i < subArr.length; i++) {
      if (subArr[i] - subArr[i - 1] !== diff) {
        return false;
      }
    }
    return true;
  }

  if (isArithmeticProgression(arr)) {
    return true;
  }

  for (let i = 0; i <= arr.length - 3; i++) {
    for (let j = i + 3; j <= arr.length; j++) {
      let subArr = arr.slice(i, j);
      if (isArithmeticProgression(subArr)) {
        return i; 
      }
    }
  }

  return false;
}