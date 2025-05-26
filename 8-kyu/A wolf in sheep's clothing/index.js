let sheepsArray = ['sheep', 'sheep', 'sheep', 'sheep', 'sheep', 'wolf', 'sheep', 'sheep'];

const varWolf = sheepsArray.find((element) => element === 'wolf')

console.log(varWolf);

console.log(sheepsArray);
let EndOfArray = sheepsArray.length

console.log(EndOfArray);

let lastItem = sheepsArray.slice(-1)

console.log(lastItem);

if (sheepsArray.slice(-1) !== 'sheep') {
  return 'Pls go away and stop eating my sheep'
}
else {
  return 'Oi! Sheep number 1! You are about to be eaten by a wolf!'
}

function warnTheSheep(q) {
  return q[q.length-1] === 'wolf' ? "Pls go away and stop eating my sheep" : `Oi! Sheep number ${q.length - (q.indexOf('wolf')+1)}! You are about to be eaten by a wolf!`
}
