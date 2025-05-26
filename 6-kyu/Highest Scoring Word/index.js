/*
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

For example, the score of abad is 8 (1 + 2 + 1 + 4).

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.
*/
function high(x){
  const words = x.split(' ');
  let maxScore = 0;
  let maxWord = '';
  
  for (let i = 0; i < words.length; i++) {
    const wordScore = words[i].split('').reduce((acc, curr) => acc + curr.charCodeAt(0) - 96, 0);
    if (wordScore > maxScore) {
      maxScore = wordScore;
      maxWord = words[i];
    }
  }
  
  return maxWord;
}