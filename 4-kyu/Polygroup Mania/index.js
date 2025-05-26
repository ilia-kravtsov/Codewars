/*
"Given positive integers n and k return an array of array of numbers, with the nested arrays representing all possible ways to make groups of sizes that are a multiple of kof items in any source array of size n and the numbers representing the indices of the items."

This is a generalised version of Pair 'em Up , and comes with stricter performance constraints.
Specification
Constraints:

Output can grow huge, so range of n and k is 0 - 27 (upper limit included) and abs(n - k) ≤ 7 || abs(n >> 1 - k) ≤ 4.
Keep a good eye out on performance of your solution.
Code length limited to 2000 characters to prevent hardcoding.
Rules:

Groups contain combinations (not permutations) of element indices
Element indices within each group should be ascending, gaps are allowed, duplicates are not
The sizes of the groups must be multiples of k that fit n; in order to fit multiplier * k ≤ n
Empty groups are not eligible and should be discarted
Groups are sorted by value of index, ascending; on tie, by value of next index and so on ... still a tie: on length of group descending
Examples:

input: polyGroup(4, 2)
expected result : [[0,1,2,3],[0,1],[0,2],[0,3],[1,2],[1,3],[2,3]]]

The group sizes of multiples of k = 2 that fit n = 4 
are 2 and 4.
So the results contain groups of size 2 and 4.
input: polyGroup(3, 1)
expected result : [[0,1,2],[0,1],[0,2],[0],[1,2],[1],[2]]]

The group sizes of multiples of k = 1 that fit n = 3 
are 1, 2 and 3. 
So the results contain groups of size 1, 2 and 3.
n     k             expected result

0     0             []
0     4             []
4     0             []
1     1             [[0]]
2     1             [[0,1],[0],[1]]
3     1             [[0,1,2],[0,1],[0,2],[0],[1,2],[1],[2]]
4     1             [[0,1,2,3],[0,1,2],[0,1,3],[0,1],[0,2,3],[0,2],[0,3],[0],[1,2,3],[1,2],[1,3],[1],[2,3],[2],[3]]
1     2             []
2     2             [[0,1]]
3     2             [[0,1],[0,2],[1,2]]
4     2             [[0,1,2,3],[0,1],[0,2],[0,3],[1,2],[1,3],[2,3]]
1     3             []
2     3             []
3     3             [[0,1,2]]
4     3             [[0,1,2],[0,1,3],[0,2,3],[1,2,3]]
*/

function polyGroup(n, k) {
  if (k === 0 || n === 0) return [];

  const result = [];

  const combine = (len, start, prefix) => {
    if (prefix.length === len) {
      result.push([...prefix]);
      return;
    }
    for (let i = start; i <= n - (len - prefix.length); i++) {
      prefix.push(i);
      combine(len, i + 1, prefix);
      prefix.pop();
    }
  };

  for (let size = k; size <= n; size += k) {
    combine(size, 0, []);
  }

  result.sort((a, b) => {
    for (let i = 0; i < Math.min(a.length, b.length); i++) {
      if (a[i] !== b[i]) {
        return a[i] - b[i];
      }
    }
    return b.length - a.length;
  });

  return result;
}
