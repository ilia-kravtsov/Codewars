function well(x) {
  switch (x.filter(i => i === 'good').length) {
    case 0:
      return 'Fail!'
    case 1:
    case 2:
      return 'Publish!'
    default:
      return 'I smell a series!'
  }
}

const stringToNumber = function(str){
  return Number(str);
}

function DNAtoRNA(dna) {
  return dna.replace(/T/g, 'U');
}

var re = /яблоки/gi;
var str = 'Яблоки круглые и яблоки сочные.';
var newstr = str.replace(re, 'апельсины');
console.log(newstr); // апельсины круглые и апельсины сочные.

function points(games) {
  // your code here
  let sumOfPoints = 0
  for(i = 0; i < games.length ; i++){
    let gamesStrHolder = games[i]
    let x = gamesStrHolder[0]
    let y = gamesStrHolder[2]
    if (x > y){
      sumOfPoints += 3
    }else if (x == y){
      sumOfPoints += 1
    }else if (x < y){
      sumOfPoints += 0
    }
  }
  return sumOfPoints
}