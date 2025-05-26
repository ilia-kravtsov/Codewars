/* 
Write a function that merges two sorted arrays into a single one. The arrays only contain integers. Also, the final outcome must be sorted and not have any duplicate.
*/

// 1
function mergeArrays(a, b) {
  let result = [];
  
  function pusher(array) {
    for (let i = 0; i < array.length; i++) {
      if (!result.includes(array[i])) {
        result.push(array[i])
      }
    }
  }
  
  pusher(a);
  pusher(b);
  
  return result.sort((a,b) => a - b);
};

// 2
// function mergeArrays(a, b) {
//      return [...new Set(a.concat(b))].sort((a,b) => a - b);
// };

// 3
// const mergeArrays = (a,b) => [...new Set(a.concat(b))].sort((a,b) => a - b);