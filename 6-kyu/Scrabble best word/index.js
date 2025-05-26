/*
You're playing to scrabble. But counting points is hard.

You decide to create a little script to calculate the best possible value.

The function takes two arguments :

`points` : an array of integer representing for each letters from A to Z the points that it pays
`words` : an array of strings, uppercase

You must return the index of the shortest word which realize the highest score.
If the length and the score are the same for two elements, return the index of the first one.
*/

function getBestWord(points, words) {
  let maxScore = 0;
  let bestIndex = 0;

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let score = 0;

    for (let j = 0; j < word.length; j++) {
      let charCode = word.charCodeAt(j) - 65;
      score += points[charCode];
    }

    if (
      score > maxScore ||
      (score === maxScore && word.length < words[bestIndex].length)
    ) {
      maxScore = score;
      bestIndex = i;
    }
  }

  return bestIndex;
}
