/*
Given an array of numbers (in string format), you must return a string. The numbers correspond to the letters of the alphabet in reverse order: a=26, z=1 etc. You should also account for '!', '?' and ' ' that are represented by '27', '28' and '29' respectively.

All inputs will be valid.
*/
function switcher(x){
  const alphabet = "zyxwvutsrqponmlkjihgfedcba!? "; 
  let result = ""; 
  for (let i = 0; i < x.length; i++) {
    let number = +x[i]
    result += alphabet[number - 1]; 
  }
  return result;
}

const alpha = ' zyxwvutsrqponmlkjihgfedcba!? '
const switcher = x => x.map(item => alpha[item]).join('')