/*
Create two functions, max and min which, given an "iterable" as argument would return maximum (and minimum) value of this argument.

eg :

max([1,2,3]) // -> 3
min([5,3,4]) // -> 3
"Iterable" argument may be an array, a string or a set.

eg :

max([1,2,3]) // -> 3   ...array 
max("AZBYC") // -> "Z" ...string
min({5,6,7}) // -> 5   ...set
Items/elements of array or set may be number, string or date.

eg :

min([1,2,3]) // -> 1    ...array of integers
min(["zzz","bb","aaaa"]) // -> "aaaa"   ...array of strings
max([new Date(2017,1,1), new Date(2015,2,2), new Date(2013,3,3)]) // -> new Date(2017,1,1)   ...array of dates
Note You may assume each items/elements of an iterable will be of same type ( no [ 1, 2, "a", "foo", new Date()] )
*/

function max(iterable) {
  if (typeof iterable === "string" || iterable instanceof Set) {
    iterable = [...iterable];
  }

  return iterable.reduce((a, b) => (a > b ? a : b));
}

function min(iterable) {
  if (typeof iterable === "string" || iterable instanceof Set) {
    iterable = [...iterable];
  }

  return iterable.reduce((a, b) => (a < b ? a : b));
}
