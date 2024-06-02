
// Сортировка массива примеры:

let array_33 = array_3.sort((a,b) => a - b) // (10) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let array_34 = array_3.sort((a,b) => b - a) // (10) [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
let array_35 = array_3.sort((a,b) => b - b) // (10) [1, 3, 5, 7, 9, 10, 8, 6, 4, 2]
let array_36 = array_3.sort((a,b) => a - a) // (10) [1, 3, 5, 7, 9, 10, 8, 6, 4, 2]

// Сортировка массива примеры:

let array_37 = array_3.sort((a,b) => a - b) // (10) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let array_38 = array_3.sort((a,b) => b - a) // (10) [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
let array_39 = array_3.sort((a,b) => b - b) // (10) [1, 3, 5, 7, 9, 10, 8, 6, 4, 2]
let array_40 = array_3.sort((a,b) => a - a) // (10) [1, 3, 5, 7, 9, 10, 8, 6, 4, 2]

// Упрощаем код:

// Version 1

function mergeArrays(arr1, arr2) {
  return [...new Set(arr1.concat(arr2).sort((a,b) => a-b))] 
}

// Version 2

let mergeArrays = (arr1, arr2) => [...new Set(arr1.concat(arr2).sort((a,b) => a-b))] 

// Sample of concat:

let array3 = arr1ArrayFrom.concat(arr2ArrayFrom)

let arr3 = [...arr1, ...arr2]
