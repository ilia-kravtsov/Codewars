/*
Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.
*/
const cubeOdd = arr => arr.some(e => e !== +e) ? undefined : arr.map(n => n ** 3).reduce((acc, n) => n % 2 !== 0 ? acc + n : acc, 0)