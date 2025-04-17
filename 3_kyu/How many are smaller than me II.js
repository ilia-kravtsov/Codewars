/*
This is a hard version of How many are smaller than me?. If you have troubles solving this one, have a look at the easier kata first.

Write

function smaller(arr)
that given an array arr, you have to return the amount of numbers that are smaller than arr[i] to the right.

For example:

smaller([5, 4, 3, 2, 1]) === [4, 3, 2, 1, 0]
smaller([1, 2, 0]) === [1, 1, 0]
Note
Your solution will be tested against inputs with up to 100_000 elements
*/

function smaller(arr) {
  const sorted = Array.from(new Set(arr)).sort((a, b) => a - b);
  const n = sorted.length;
  const tree = new Array(n + 1).fill(0);

  function update(i, val) {
    while (i <= n) {
      tree[i] += val;
      i += i & -i;
    }
  }

  function query(i) {
    let sum = 0;
    while (i > 0) {
      sum += tree[i];
      i -= i & -i;
    }
    return sum;
  }

  function getRank(num) {
    let lo = 0,
      hi = sorted.length - 1;
    while (lo <= hi) {
      const mid = Math.floor((lo + hi) / 2);
      if (sorted[mid] === num) return mid + 1;
      if (sorted[mid] < num) lo = mid + 1;
      else hi = mid - 1;
    }
    return lo + 1;
  }

  const result = new Array(arr.length);

  for (let i = arr.length - 1; i >= 0; i--) {
    const rank = getRank(arr[i]);
    result[i] = query(rank - 1);
    update(rank, 1);
  }

  return result;
}