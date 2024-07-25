/*
Write a function intersect that takes any number of arguments. The function must return an array containing all the values that is present in every argument given to the function.

All arguments given will be arrays.
The first argument determines the order of the returned values.
Return an empty array for empty result set.
Example

var a = ['dog', 'bar', 'foo'];
var b = ['foo', 'bar', 'cat'];
var c = ['gin', 'bar', 'foo'];

intersect(a, b, c); // ['bar', 'foo']
*/

var intersect = function (...args) {
  if (args.length === 0) return [];

  return args[0].filter(function(item) {
    return args.every(function(array) {
      return array.includes(item);
    });
  });
};