/*
Complete the method which accepts an array of integers, and returns one of the following:

"yes, ascending" - if the numbers in the array are sorted in an ascending order
"yes, descending" - if the numbers in the array are sorted in a descending order
"no" - otherwise
You can assume the array will always be valid, and there will always be one correct answer.
*/
const isSortedAndHow = array => JSON.stringify(array) === JSON.stringify([...array].sort((a, b) => a - b)) ? "yes, ascending" : JSON.stringify(array) === JSON.stringify([...array].sort((a, b) => b - a)) ? "yes, descending" : "no";