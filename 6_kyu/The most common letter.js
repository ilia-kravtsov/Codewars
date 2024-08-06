/*
Find the most common letter (not space) in the string(always lowercase and 2 < words) and replace it with the letter.

If such letters are two or more, choose the one that appears in the string( earlier.

For example:

('my mom loves me as never did', 't') => 'ty tot loves te as never did'
('real talk bro', 'n') => 'neal talk bno'
('great job go ahead', 'k') => 'grekt job go khekd'
*/

function replaceCommon(string, letter) {
  const frequency = {};
  
  for (let char of string) {
    if (char !== ' ') { 
      if (frequency[char]) {
        frequency[char]++;
      } else {
        frequency[char] = 1;
      }
    }
  }
  
  let maxCount = 0;
  let mostCommonChar = '';
  
  for (let char in frequency) {
    if (frequency[char] > maxCount) {
      maxCount = frequency[char];
      mostCommonChar = char;
    }
  }
  
  let result = '';
  for (let char of string) {
    if (char === mostCommonChar) {
      result += letter;
    } else {
      result += char;
    }
  }
  
  return result;
}