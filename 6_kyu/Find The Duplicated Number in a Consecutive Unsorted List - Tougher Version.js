/*
Spin-off of this kata, here you will have to figure out an efficient strategy to solve the problem of finding the sole duplicate number among an unsorted array/list of numbers starting from 1 up to n.

Hints: a solution in linear time can be found; using the most intuitive ones to search for duplicates that can run in O(n²) time won't work.
*/

var findDup = function(arr) {
  let seen = new Set();
  
  for (let num of arr) {
    if (seen.has(num)) {
      return num;
    } else {
      seen.add(num);
    }
  }
  
  return null; 
};