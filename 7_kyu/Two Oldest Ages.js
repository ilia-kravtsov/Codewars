/*
The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument and return the two highest numbers within the array. The returned value should be an array in the format [second oldest age,  oldest age].

The order of the numbers passed in could be any order. The array will always include at least 2 items. If there are two or more oldest age, then return both of them in array format.

For example (Input --> Output):

[1, 2, 10, 8] --> [8, 10]
[1, 5, 87, 45, 8, 8] --> [45, 87]
[1, 3, 10, 0]) --> [3, 10]
*/
function twoOldestAges(ages){
  let firstMax = Math.max.apply(null, ages)
  let newArray = ages.filter((num, i) => i !== ages.indexOf(firstMax))
  let secondMax = Math.max.apply(null, newArray)
  return [secondMax, firstMax]
}

function twoOldestAges(ages){
  return ages.sort(function(a,b){return a-b;}).slice(-2);
}