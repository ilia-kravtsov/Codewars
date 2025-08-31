function Dictionary(words) {
  this.words = words;
}
​
Dictionary.prototype.findMostSimilar = function(term) {
  function levenshtein(a, b) {
    const dp = Array.from({ length: a.length + 1 }, () => Array(b.length + 1).fill(0));
    for (let i = 0; i <= a.length; i++) dp[i][0] = i;
    for (let j = 0; j <= b.length; j++) dp[0][j] = j;
    for (let i = 1; i <= a.length; i++) {
      for (let j = 1; j <= b.length; j++) {
        if (a[i - 1] === b[j - 1]) {
          dp[i][j] = dp[i - 1][j - 1];
        } else {
          dp[i][j] = Math.min(
            dp[i - 1][j] + 1,
            dp[i][j - 1] + 1,
            dp[i - 1][j - 1] + 1
          );
        }
      }
    }
    return dp[a.length][b.length];
  }
​
  let bestWord = null;
  let bestDistance = Infinity;
  for (let w of this.words) {
    const d = levenshtein(term, w);
    if (d < bestDistance) {
      bestDistance = d;
      bestWord = w;
    }
  }
  return bestWord;
};