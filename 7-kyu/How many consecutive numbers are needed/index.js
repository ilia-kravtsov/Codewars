/*
Create the function consecutive(arr) that takes an array of integers and return the minimum number of integers needed to make the contents of arr consecutive from the lowest number to the highest number.

For example:
If arr contains [4, 8, 6] then the output should be 2 because two numbers need to be added to the array (5 and 7) to make it a consecutive array of numbers from 4 to 8. Numbers in arr will be unique.

ARRAYSFUNDAMENTALS
*/
function consecutive(arr) {
  if (arr.length === 0) {
    return 0; 
  }

  arr.sort((a, b) => a - b); 

  let consecutiveCount = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    const diff = arr[i + 1] - arr[i] - 1;
    consecutiveCount += diff;
  }

  return consecutiveCount;
}