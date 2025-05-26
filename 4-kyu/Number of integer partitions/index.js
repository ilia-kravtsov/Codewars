/*
An integer partition of n is a weakly decreasing list of positive integers which sum to n.

For example, there are 7 integer partitions of 5:

[5], [4,1], [3,2], [3,1,1], [2,2,1], [2,1,1,1], [1,1,1,1,1].
Write a function which returns the number of integer partitions of n. The function should be able to find the number of integer partitions of n for n at least as large as 100.
*/

function partitions(n) {
  const memo = {};

  function p(n, max) {
    if (n === 0) return 1;
    if (max === 0) return 0;
    const key = `${n},${max}`;
    if (memo[key] !== undefined) return memo[key];

    if (max > n) {
      memo[key] = p(n, n);
    } else {
      memo[key] = p(n, max - 1) + p(n - max, max);
    }
    return memo[key];
  }

  return p(n, n);
}