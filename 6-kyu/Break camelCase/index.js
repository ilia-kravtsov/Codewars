/*
Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
*/

function solution(string) {
  if (!string.length) return '';

  let result = string[0]; 
  
  for (let i = 1; i < string.length; i++) {
      if (string[i] === string[i].toUpperCase()) {
         result += ' '; 
      }
      result += string[i];        
  }

  return result;
}