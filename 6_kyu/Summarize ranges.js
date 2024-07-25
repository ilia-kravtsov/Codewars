/*
Given a sorted array of numbers, return the summary of its ranges.

Examples
summaryRanges([1, 2, 3, 4]) === ["1->4"]
summaryRanges([1, 1, 1, 1, 1]) === ["1"]
summaryRanges([0, 1, 2, 5, 6, 9]) === ["0->2", "5->6", "9"]
summaryRanges([0, 1, 2, 3, 3, 3, 4, 5, 6, 7]) === ["0->7"]
summaryRanges([0, 1, 2, 3, 3, 3, 4, 4, 5, 6, 7, 7, 9, 9, 10]) === ["0->7", "9->10"]
summaryRanges([-2,0, 1, 2, 3, 3, 3, 4, 4, 5, 6, 7, 7, 9, 9, 10, 12]) ===["-2", "0->7", "9->10", "12"]
*/
function summaryRanges(nums) {
  let result = [];
  if (nums.length === 0) {
    return result;
  }
  let start = nums[0];
  let end = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      continue;
    } else if (nums[i] === nums[i - 1] + 1) {
      end = nums[i];
    } else {
      if (start === end) {
        result.push(`${start}`);
      } else {
        result.push(`${start}->${end}`);
      }
      start = nums[i];
      end = nums[i];
    }
  }
  if (start === end) {
    result.push(`${start}`);
  } else {
    result.push(`${start}->${end}`);
  }
  return result;
}
