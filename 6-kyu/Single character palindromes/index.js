function solve(s) {
  function isPalindrome(left, right) {
    while (left < right) {
      if (s[left] !== s[right]) {
        return false;
      }
​
      left++;
      right--;
    }
​
    return true;
  }
​
  let left = 0;
  let right = s.length - 1;
​
  while (left < right) {
    if (s[left] !== s[right]) {
      if (
        isPalindrome(left + 1, right) ||
        isPalindrome(left, right - 1)
      ) {
        return "remove one";
      }
​
      return "not possible";
    }
​
    left++;
    right--;
  }
​
  return "OK";
}