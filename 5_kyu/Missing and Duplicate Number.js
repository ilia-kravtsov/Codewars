// Missing and Duplicate Number

/*
You are given an array containing all integers from 1 to N, except one that is missing.

In order to fill the array, one of the elements of the sequence has been duplicated.

Your mission is to find which number is missing and which one is duplicated.

Example:

solution([2,4,1,6,3,4]) should return [5,4] because 5 is missing and 4 appears twice.

Remarks:

You are not allowed to sort the array.
Your solution should not time out for large values of N.
Ideally, your solution should not use extra space except the one provided by the input array (which can be modified).
*/

function solution(array) {
  var missing = 0, duplicate = 0;
  
  for (var i = 0; i < array.length; i++) {
    var absValue = Math.abs(array[i]);
    
    if (array[absValue - 1] < 0) {
      duplicate = absValue;
    } else {
      array[absValue - 1] = -array[absValue - 1];
    }
  }
  
  for (var i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      missing = i + 1;
      break;
    }
  }
  
  return [missing, duplicate];
}