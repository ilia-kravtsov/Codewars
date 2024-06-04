/*
For this game of BINGO, you will receive a single array of 10 numbers from 1 to 26 as an input. Duplicate numbers within the array are possible.

Each number corresponds to their alphabetical order letter (e.g. 1 = A. 2 = B, etc). Write a function where you will win the game if your numbers can spell "BINGO". They do not need to be in the right order in the input array. Otherwise you will lose. Your outputs should be "WIN" or "LOSE" respectively.
*/
function bingo(a) {
  const alphabet = {
    1: 'A',
    2: 'B',
    3: 'C',
    4: 'D',
    5: 'E',
    6: 'F',
    7: 'G',
    8: 'H',
    9: 'I',
    10: 'J',
    11: 'K',
    12: 'L',
    13: 'M',
    14: 'N',
    15: 'O',
    16: 'P',
    17: 'Q',
    18: 'R',
    19: 'S',
    20: 'T',
    21: 'U',
    22: 'V',
    23: 'W',
    24: 'X',
    25: 'Y',
    26: 'Z'
  };
  let newArray = a.map(n => n = alphabet[n])
  let result = ''
  for (var i = 0; i < newArray.length; i++) {
    if (newArray[i] === 'B' || newArray[i] === 'I' || newArray[i] === 'N' || newArray[i] === 'G' || newArray[i] === 'O') {
      if (!result.includes(newArray[i])) {
        result += newArray[i]
      }
    }
  }
  return result.includes('B') && result.includes('I') && result.includes('N') && result.includes('G') && result.includes('O') ? 'WIN' : 'LOSE';
}

const bingo = ar => [2,7,9,14,15].every(e => ar.includes(e)) ? 'WIN' : 'LOSE';
function bingo(a) {  
  return ([...'bingo']
          .map(x => x.charCodeAt(0)-96)
          .every(o => a.includes(o))) ? "WIN" : "LOSE" ;
  
   
 }
 function bingo(arr) {
  let set = new Set(arr);
  let count = 0;
  let bingo = [2, 9, 14, 7, 15];
  
  for (let value of bingo) {
      if (set.has(value)) count++
      if (count === 5) return "WIN";
  }

  return 'LOSE';
}