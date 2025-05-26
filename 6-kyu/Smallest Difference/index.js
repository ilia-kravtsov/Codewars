/**
Given two arrays of integers, find the pair of values with the smallest difference and return that difference.

If both arrays are empty, return -1.

If one array is empty, return the smallest value from the non-empty array.

Note: Try to solve this without brute force.

Example:

  arr1 = [1, 3, 5, 23, 5]
  arr2 = [45, 34, 67, 2, 0]
  
  Output = 1
  
Example empty array:

  arr1 = [1, 3, 5, 23, 5]
  arr2 = []
  
  Output = 1
  
Example two empty arrays:

  arr1 = []
  arr2 = []
  
  Output = -1
*/

function smallestDiff(arr1, arr2) {
  if (arr1.length === 0 && arr2.length === 0) return -1;

  if (arr1.length === 0) return Math.min(...arr2);
  if (arr2.length === 0) return Math.min(...arr1);

  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);

  let i = 0, j = 0;
  let minDiff = Infinity;

  while (i < arr1.length && j < arr2.length) {
      const diff = Math.abs(arr1[i] - arr2[j]);
      minDiff = Math.min(minDiff, diff);

      if (arr1[i] < arr2[j]) {
          i++;
      } else {
          j++;
      }
  }

  return minDiff;
}