/*
When no more interesting kata can be resolved, I just choose to create the new kata, to solve their own, to enjoy the process --myjinxin2015 said

Description:
Have you solved the simple version and the challenge version? Now, the ultimate version is coming :]. The difference between this version and the challenge version is:

the element of range from [start,end] into [start,end,num] 
That is, before we calculate the sum value, we need to replace the element with num at the start index.

Task
Given an array arr that contains some integers(positive, negative or 0), and a range list such as [[start1,end1,num1],[start2,end2,num2],...], start and end are the index of arr and start always less than end. Your task is replace the value of arr[start] with num, and then calculte the sum value of each range (start index and end index are both inclusive), and return the maximum sum value.

For example:

Given arr = [1,-2,3,4,-5,-4,3,2,1], 
      range = [[1,3,5],[0,4,2],[6,8,1]]
should return 12

calculte process:
step 1:
replace arr[1] with 5
then arr = [1,5,3,4,-5,-4,3,2,1]
range[1,3] = arr[1]+arr[2]+arr[3] = 5 + 3 + 4 = 12

step 2:
replace arr[0] with 2
then arr = [2,5,3,4,-5,-4,3,2,1]
range[0,4] = arr[0]+arr[1]+arr[2]+arr[3]+arr[4]
           = 2 + 5 + 3 + 4 + -5 = 9
step 3:
replace arr[6] with 1
then arr = [2,5,3,4,-5,-4,1,2,1]
range[6,8] = arr[6]+arr[7]+arr[8] = 1 + 2 + 1 = 4

So the maximum sum value is 12
Note:
arr always has at least 5 elements;
range always has at least 1 elements;
The replacement operation is carried out step by step, according to the order of range. The replacement operations will affect the results of the calculations, please be careful ;-)
All inputs are valid;
This is a ultimate version, Please optimize your algorithm to avoid time out ;-)
If you feel difficult, please try the simple version or try the challenge version.
About testcases
Basic test: 3 testcases
Random test1: 100 testcases
each arr : 5-100 elements
each range : 1-6 elements
Random test2: 100 testcases
each arr : 100000 elements
each range : 10000 elements
Some Examples
maxSum([1,-2,3,4,-5,-4,3,2,1],[[1,3,5],[0,4,2],[6,8,1]]) === 12
maxSum([1,-2,3,4,-5,-4,3,2,1],[[1,3,10]]) === 17
maxSum([1,-2,3,4,-5,-4,3,2,1],[[1,4,6],[2,5,4]]) === 8
*/

function maxSum(arr, range) {
  let n = arr.length,
    fenw = new Array(n + 1).fill(0);
  function fenwUpdate(i, diff) {
    i++;
    while (i <= n) {
      fenw[i] += diff;
      i += i & -i;
    }
  }
  function fenwSum(i) {
    let s = 0;
    i++;
    while (i > 0) {
      s += fenw[i];
      i -= i & -i;
    }
    return s;
  }
  for (let i = 0; i < n; i++) fenwUpdate(i, arr[i]);
  let maxVal = -Infinity;
  for (let i = 0; i < range.length; i++) {
    let [start, end, num] = range[i];
    let diff = num - arr[start];
    arr[start] = num;
    fenwUpdate(start, diff);
    let currSum = fenwSum(end) - (start > 0 ? fenwSum(start - 1) : 0);
    if (currSum > maxVal) maxVal = currSum;
  }
  return maxVal;
}
