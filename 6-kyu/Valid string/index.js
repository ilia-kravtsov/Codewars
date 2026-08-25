var validWord = function(dictionary, word) {
  const dp = Array(word.length + 1).fill(false);
  dp[0] = true;
​
  for (let i = 1; i <= word.length; i++) {
    for (const dictWord of dictionary) {
      const start = i - dictWord.length;
​
      if (start >= 0 && dp[start] && word.slice(start, i) === dictWord) {
        dp[i] = true;
        break;
      }
    }
  }
​
  return dp[word.length];
};