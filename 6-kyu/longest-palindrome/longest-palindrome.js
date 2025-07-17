function longestPalindrome(s) {
  if (!s) return 0;
​
  let maxLen = 0;
​
  const expandFromCenter = (left, right) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return right - left - 1;
  };
​
  for (let i = 0; i < s.length; i++) {
    const len1 = expandFromCenter(i, i);     
    const len2 = expandFromCenter(i, i + 1);
    maxLen = Math.max(maxLen, len1, len2);
  }
​
  return maxLen;
}
​