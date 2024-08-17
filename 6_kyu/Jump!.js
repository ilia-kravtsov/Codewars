/*
You can also directly jump from from the initial cell(first cell) past the end of the array if they are integers to the right of that cell.

E.g

[6, 1, 1] is winnable

[6] is not winnable

Note: You can not jump from the last cell!

[1, 1, 3] is not winnable

-----
Your task is to complete the function that determines if a given game is winnable.

More Examples
[5] => false (you can't jump from the last cell)
[2, 5] => true
[3, 0, 2, 3] => true (3 to 2 then past end of array)
[4, 1, 2, 0, 1] => false
[5, 0, 0, 0] => true
[1, 1] => false
*/
function canJump(array) {
  if (array.length <= 1) {
    return false;
  }

  let maxReach = 0;

  for (let i = 0; i < array.length - 1; i++) {
    maxReach = Math.max(maxReach, i + array[i]);

    if (maxReach >= array.length) {
      return true;
    }

    if (maxReach <= i) {
      return false;
    }
  }

  return false;
}
