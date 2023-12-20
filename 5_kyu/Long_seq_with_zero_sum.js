// Longest sequence with zero sum

/*
Description

Write a method that takes an array of signed integers, and returns the longest contiguous subsequence of this array that has a total sum of elements of exactly 0.

If more than one equally long subsequences have a zero sum, return the one starting at the highest index.

For example:
maxZeroSequenceLength([25, -35, 12, 6, 92, -115, 17, 2, 2, 2, -7, 2, -9, 16, 2, -11]) should return
[92, -115, 17, 2, 2, 2], because this is the longest zero-sum sequence in the array.

*/

var maxZeroSequence = function(arr) {
    const sumMap = new Map();
    let sum = 0;
    let maxLength = 0;
    let result = [];
  
    sumMap.set(0, -1);
  
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
  
      if (sumMap.has(sum)) {
        if (i - sumMap.get(sum) > maxLength || (i - sumMap.get(sum) === maxLength && i > result[1])) {
          result = [sumMap.get(sum) + 1, i];
          maxLength = i - sumMap.get(sum);
        }
      } else {
        sumMap.set(sum, i);
      }
    }
  
    return arr.slice(result[0], result[1] + 1);
  }