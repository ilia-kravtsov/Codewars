/*
In this kata, your task is to create all permutations of a non-empty input string and remove duplicates, if present.

Create as many "shufflings" as you can!

Examples:

With input 'a':
Your function should return: ['a']

With input 'ab':
Your function should return ['ab', 'ba']

With input 'abc':
Your function should return ['abc','acb','bac','bca','cab','cba']

With input 'aabb':
Your function should return ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
Note: The order of the permutations doesn't matter.
*/

function permutations(string) {
  const results = new Set();

  function permute(prefix, remaining) {
    if (remaining.length === 0) {
      results.add(prefix);
    } else {
      for (let i = 0; i < remaining.length; i++) {
        permute(
          prefix + remaining[i],
          remaining.slice(0, i) + remaining.slice(i + 1)
        );
      }
    }
  }

  permute("", string);
  return Array.from(results);
}