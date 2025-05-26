/*
Simple enough this one - you will be given an array. The values in the array will either be numbers or strings, or a mix of both. You will not get an empty array, nor a sparse one.

Your job is to return a single array that has first the numbers sorted in ascending order, followed by the strings sorted in alphabetic order. The values must maintain their original type
*/
const dbSort = a => [...a.filter(n=>typeof n === "number").sort((a,b)=> a - b), ...a.filter( w => typeof w === "string").sort()];