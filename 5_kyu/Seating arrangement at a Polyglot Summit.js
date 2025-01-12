/*
At the First International Polyglot Summit, people from all over the world come to learn new languages.

Your task is to organize the seating for a dinner in such a way that nobody has a neighbor who's native language is the same, so that everybody would have an opportunity to talk with somebody who speaks different language.

Data representation
Each set of people will be represented as a string, where each letter would represent a speaker of some particular language.

For example if there are two people who speak language A, and one who speaks laguage B, the input can be AAB, or maybe BAA, as the input order is not important.

Example
If we get AAB as an input, then the output should be ABA, so that two people who speak A won't sit together.

AAAABBCC should produce something like ABABACAC, note that the output order is also not important as long as there are no consequent duplicates, so ACABACAB is a valid solution as well.

If no solutions exist
Sometimes it is impossible to seat people in the right order, for example for AAAB. In this case the task is to return `false'
*/

function arrangeSeating(string) {
  const counts = {};
  for (const char of string) {
    counts[char] = (counts[char] || 0) + 1;
  }
  const sortedLanguages = Object.entries(counts).sort((a, b) => b[1] - a[1]);
  const maxCount = sortedLanguages[0][1];
  if (maxCount > Math.ceil(string.length / 2)) {
    return false;
  }
  const result = Array(string.length).fill(null);
  let index = 0;
  for (const [char, count] of sortedLanguages) {
    for (let i = 0; i < count; i++) {
      result[index] = char;
      index += 2;
      if (index >= string.length) {
        index = 1;
      }
    }
  }

  return result.join("");
}