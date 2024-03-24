/*
Given an array (or list) of scores, return the array of ranks for each value in the array. The largest value has rank 1, the second largest value has rank 2, and so on. Ties should be handled by assigning the same rank to all tied values. For example:

ranks([9,3,6,10]) = [2,4,3,1]
and

ranks([3,3,3,3,3,5,1]) = [2,2,2,2,2,1,7]
because there is one 1st place value, a five-way tie for 2nd place, and one in 7th place.
*/

function ranks(a) {
  let sorted = [...a].sort((x, y) => y - x);
  let rankMap = new Map();
  let ranks = [];

  for (let i = 0; i < sorted.length; i++) {
    if (!rankMap.has(sorted[i])) {
      rankMap.set(sorted[i], i + 1);
    }
  }

  for (let i = 0; i < a.length; i++) {
    ranks.push(rankMap.get(a[i]));
  }

  return ranks;
}