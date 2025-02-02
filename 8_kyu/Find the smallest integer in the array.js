/*
Given an array of integers your solution should find the smallest integer.

For example:

Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty.
*/

function findSmallestInt_1(arr) {
  const arrLength = arr.length
  if (arrLength === 0) return console.error('Array must not be empty');
  let result = arr[0];
  for (let i = 1; i < arrLength; i++) {
    const currentElement = arr[i];
    if (currentElement < result) {
      result = currentElement;
    }
  }
  return result;
}

function findSmallestInt_2(arr) {
  let min = arr[0];
  arr.forEach((num) => {
    if (num < min) min = num;
  });
  return min;
}

function findSmallestInt_3(arr, min = arr[0], index = 1) {
  if (index === arr.length) return min;
  return findSmallestInt(arr, arr[index] < min ? arr[index] : min, index + 1);
}

const findSmallestInt_4 = arr => Math.min(...arr);
const findSmallestInt_5 = arr => Math.min.apply(null, arr);
const findSmallestInt_6 = arr => arr.sort((a, b) => a - b)[0];
const findSmallestInt_7 = arr => arr.toSorted((a, b) => a - b)[0]; // doesn't work in Codewars :( but works in IDE

function findSmallestInt_8(arr) {
  let min = Number.POSITIVE_INFINITY; // Начинаем с бесконечно большого числа
  arr.forEach((value) => {
    if (value < min) min = value; 
  });
  return min;
}