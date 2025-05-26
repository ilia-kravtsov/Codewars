/*
Write a function that gets a sequence and value and returns true/false depending on whether the variable exists in a multidimentional sequence.

Example:

locate(['a','b',['c','d',['e']]],'e'); // should return true
locate(['a','b',['c','d',['e']]],'a'); // should return true
locate(['a','b',['c','d',['e']]],'f'); // should return false
*/

var locate = function (arr, value) {
  if (!Array.prototype.flat) {
    Array.prototype.flat = function (depth) {
      var flattend = [];
      (function flat(array, depth) {
        for (var i = 0; i < array.length; i++) {
          if (Array.isArray(array[i]) && depth > 0) {
            flat(array[i], depth - 1);
          } else {
            flattend.push(array[i]);
          }
        }
      })(this, Math.floor(depth) || 1);
      return flattend;
    };
  }

  const flattenedArray = arr.flat(Infinity);
  return flattenedArray.includes(value);
};
