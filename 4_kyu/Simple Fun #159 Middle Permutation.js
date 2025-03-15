/*
Task
You are given a string s. Every letter in s appears once.

Consider all strings formed by rearranging the letters in s. After ordering these strings in dictionary order, return the middle term. (If the sequence has a even length n, define its middle term to be the (n/2)th term.)

Example
For s = "abc", the result should be "bac".

 The permutations in order are: "abc", "acb", "bac", "bca", "cab", "cba" So, The middle term is "bac".

Input/Output
[input] string s
unique letters (2 <= length <= 26)

[output] a string
middle permutation.
*/

function middlePermutation(s) {
  let arr = s.split("").sort();
  const n = arr.length;

  let factorials = [1n];
  for (let i = 1; i <= n; i++) {
    factorials[i] = factorials[i - 1] * BigInt(i);
  }

  let index = factorials[n] / 2n - 1n;
  let result = "";

  for (let i = n; i > 0; i--) {
    const f = factorials[i - 1];
    let pos = index / f;
    pos = Number(pos);
    result += arr[pos];
    arr.splice(pos, 1);
    index %= f;
  }

  return result;
}
