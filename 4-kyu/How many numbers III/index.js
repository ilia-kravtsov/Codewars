/*
We want to generate all the numbers of three digits where:

the sum of their digits is equal to 10
their digits are in increasing order (the numbers may have two or more equal contiguous digits)
The numbers that fulfill these constraints are: [118, 127, 136, 145, 226, 235, 244, 334]. There are 8 numbers in total with 118 being the lowest and 334 being the greatest.

Task
Implement a function which receives two arguments:

the sum of digits (sum)
the number of digits (count)
This function should return three values:

the total number of values which have count digits that add up to sum and are in increasing order
the lowest such value
the greatest such value
Note: if there are no values which satisfy these constaints, you should return an empty value (refer to the examples to see what exactly is expected).

Examples
findAll(10, 3)  =>  [8, "118", "334"]
findAll(27, 3)  =>  [1, "999", "999"]
findAll(84, 4)  =>  []
Features of the random tests:

Number of tests: 112
Sum of digits value between 20 and 65
Amount of digits between 2 and 17
*/

function findAll(sum, count) {
  if (sum < count || sum > count * 9) return [];

  let totalCount = 0;
  let minStr = null;
  let maxStr = null;

  function dfs(remaining, start, currentStr, remainingSum) {
    if (remaining === 0) {
      if (remainingSum === 0) {
        totalCount++;
        if (minStr === null) minStr = currentStr;
        maxStr = currentStr;
      }
      return;
    }

    for (let d = start; d <= 9; d++) {
      if (d > remainingSum) break;

      if (remaining > 1) {
        let minPossible = d * (remaining - 1);
        let maxPossible = 9 * (remaining - 1);
        if (remainingSum - d < minPossible || remainingSum - d > maxPossible)
          continue;
      }

      dfs(remaining - 1, d, currentStr + d, remainingSum - d);
    }
  }

  dfs(count, 1, "", sum);

  return totalCount ? [totalCount, minStr, maxStr] : [];
}
