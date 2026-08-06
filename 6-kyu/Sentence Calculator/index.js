function lettersToNumbers(s) {
  
  let total = 0;
​
  for (const char of s) {
​
    if (char >= 'a' && char <= 'z') {
      total += char.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
    }
​
    else if (char >= 'A' && char <= 'Z') {
      total += (char.charCodeAt(0) - 'A'.charCodeAt(0) + 1) * 2;
    }
​
    else if (char >= '0' && char <= '9') {
      total += Number(char);
    }
​
  }
​
  return total;
}