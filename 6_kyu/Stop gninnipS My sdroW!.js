/*
Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples:

spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"
spinWords( "This is a test") => returns "This is a test"
spinWords( "This is another test" )=> returns "This is rehtona test"
*/
function spinWords(string) {
  let result = string.split(' ');

  for (let i = 0; i < result.length; i++) {
      if (result[i].length >= 5) {
          result[i] = result[i].split('').reverse().join('')
      }
  }

  return result.join(' ');
}

function spinWords(words){
  return words.split(' ').map(function (word) {
      return (word.length > 4) ? word.split('').reverse().join('') : word;
  }).join(' ');
}