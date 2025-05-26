/*
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/

function findShort(s){
  let arrInput = s.split(' ');
  let arrLength = []
  for(let i = 0; i < arrInput.length; i++){
      arrLength.push(arrInput[i].length);
  }
  return Math.min(...arrLength)
}