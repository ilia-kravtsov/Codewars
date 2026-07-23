function permuteAPalindrome (input) { 
const oddChars = new Set();

  for (let char of input) {
    if (oddChars.has(char)) {
      oddChars.delete(char);
    } else {
      oddChars.add(char);
    }
  }

  return oddChars.size <= 1;
}