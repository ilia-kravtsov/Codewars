/*
Write a function that determines whether the passed in sequences are similar. Similar means they contain the same elements, and the same number of occurrences of elements.

var arr1 = [1, 2, 2, 3, 4],
    arr2 = [2, 1, 2, 4, 3],
    arr3 = [1, 2, 3, 4],
    arr4 = [1, 2, 3, "4"]
arraysSimilar(arr1, arr2); // Should equal true
arraysSimilar(arr2, arr3); // Should equal false
arraysSimilar(arr3, arr4); // Should equal false
*/
function arraysSimilar(arr1, arr2) {
  if (arr1.length === arr2.length) {
    arr1.sort((a,b) => a - b)
    arr2.sort((a,b) => a - b)
    const newArr1 = JSON.stringify(arr1)
    const newArr2 = JSON.stringify(arr2)
    return newArr1 === newArr2
  } else {
    return false
  }
}