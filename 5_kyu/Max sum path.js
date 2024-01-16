// Max sum path

/*
You are given two sorted lists, with distinct elements. Find the maximum path sum while traversing through the lists.

Points to consider for a valid path:

A path can start from either list, and can finish in either list.
If there is an element which is present in both lists (regardless of its index in the lists), you can choose to change your path to the other list.
Return only the maximum path sum.

Example:
[0, 2, 3, 7, 10, 12]
   [1, 5, 7, 8]
Both lists having only 7 as common element, the possible paths would be:

0->2->3->7->10->12 => 34
0->2->3->7->8      => 20
1->5->7->8         => 21
1->5->7->10->12    => 35 (maximum path)
Hence, the output will be 35 in the example above.

Notes:
The arrays may contain no common terms.
The common element should only be counted once.
Aim for a linear time complexity.
Range of possible inputs:  0 <=len(l1), len(l2) <= 125000
*/

function maxSumPath(l1,l2){
  let sum1 = 0; // sum of elements in l1
  let sum2 = 0; // sum of elements in l2
  let maxSum = 0; // maximum path sum
  
  let i = 0; // index for l1
  let j = 0; // index for l2
  
  while (i < l1.length && j < l2.length) {
    // If the current elements in l1 and l2 are the same,
    // update the maximum path sum and reset the sums for l1 and l2
    if (l1[i] === l2[j]) {
      maxSum += Math.max(sum1, sum2) + l1[i];
      sum1 = 0;
      sum2 = 0;
      i++;
      j++;
    }
    // If the current element in l1 is smaller, add it to sum1
    else if (l1[i] < l2[j]) {
      sum1 += l1[i];
      i++;
    }
    // If the current element in l2 is smaller, add it to sum2
    else {
      sum2 += l2[j];
      j++;
    }
  }
  
  // Add the remaining elements in l1
  while (i < l1.length) {
    sum1 += l1[i];
    i++;
  }
  
  // Add the remaining elements in l2
  while (j < l2.length) {
    sum2 += l2[j];
    j++;
  }
  
  // Update the maximum path sum with the remaining sums
  maxSum += Math.max(sum1, sum2);
  
  return maxSum;
}