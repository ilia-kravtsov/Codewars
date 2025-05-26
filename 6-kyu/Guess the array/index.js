/*
In this kata, you should determine the values in an unknown array of numbers. You'll be given a function f, which you can call like this:

f a b -- returns an Integral
where a and b are indexes of two different elements in the unknown array, 1 or 2 indexes apart. f will return the sum of those two elements.

The absolute difference between a and b must not be 0 nor greater than 2 (that is: the chosen indexes must be exactly 1 or 2 apart).

Your goal is to figure out the correct array.

The whole procedure is:

You are given f and the length of the array n.
Ask f for any element sums you want.
Create and return the correct array according to the answers.
The array will always have at least 3 elements.
*/

function guess(f, n) {
  let sum_01 = f(0, 1);
  let sum_12 = f(1, 2);
  let sum_02 = f(0, 2);

  let arr = [];
  arr[0] = (sum_01 + sum_02 - sum_12) / 2;
  arr[1] = sum_01 - arr[0];
  arr[2] = sum_02 - arr[0];

  for (let i = 3; i < n; i++) {
    arr[i] = f(i, i - 1) - arr[i - 1];
  }

  return arr;
}
