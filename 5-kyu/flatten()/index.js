/*
For this exercise you will create a global flatten method. The method takes in any number of arguments and flattens them into a single array. If any of the arguments passed in are an array then the individual objects within the array will be flattened so that they exist at the same level as the other arguments. Any nested arrays, no matter how deep, should be flattened into the single array result.

The following are examples of how this function would be used and what the expected results would be:

flatten(1, [2, 3], 4, 5, [6, [7]]) // returns [1, 2, 3, 4, 5, 6, 7]
flatten('a', ['b', 2], 3, null, [[4], ['c']]) // returns ['a', 'b', 2, 3, null, 4, 'c']
*/
function flatten(...input) {
  // I decided to write a more detailed version of the code...
  let primitives = ['number', 'string', 'boolean', 'undefined', 'symbol']
  let result = []
  
  for (let i = 0; i < input.length; i++) {
      // the line of code below is like this because 'typeof null - "object"' -> this is a known quirk in JavaScript :D
      if (primitives.some(n => typeof input[i] === n) || input[i] === null) { 
          result.push(input[i])
      } else if (Array.isArray(input[i])) {
          // here i wrote a recursive version of the flat() method
          function flattenArray(arr) {
              let flattened = [];

              arr.forEach((element) => {
                  if (Array.isArray(element)) {
                      flattened = flattened.concat(flattenArray(element));
                  } else {
                      flattened.push(element);
                  }
              });

              return flattened;
          }

          for (let j = 0; j < flattenArray(input[i]).length; j++) {
              result.push(flattenArray(input[i])[j])
          }

      }
  }
  return result
}
function flatten(...input) {
  let result = []
  let primitives = ['number', 'string', 'boolean', 'undefined', 'symbol']
  
//     version 1
//     for (let i = 0; i < input.length; i++) {
//         if (primitives.some(n => typeof input[i] === n) || input[i] === null) {
//             result.push(input[i])
//         } else if (Array.isArray(input[i])) {
//             result = result.concat(input[i].flat(Infinity));
//         }
//     }
     
//     version 2
  for (let i = 0; i < input.length; i++) {
      if (primitives.some(n => typeof input[i] === n) || input[i] === null) {
        result.push(input[i]);
      } else if (Array.isArray(input[i])) {
        result = result.concat(flatten(...input[i]));
      }
  }
  return result
}
var flatten=function(...arr){
  return arr.toString().split(",");
}