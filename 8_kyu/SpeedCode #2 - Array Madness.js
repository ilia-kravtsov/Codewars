/* 
Objective
Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

E.g.

arrayMadness([4, 5, 6], [1, 2, 3]); // returns true since 4 ** 2 + 5 ** 2 + 6 ** 2 > 1 ** 3 + 2 ** 3 + 3 ** 3
Get your timer out. Are you ready? Ready, get set, GO!!!
*/

const arrayMadness = (a, b) => a.map(ai => ai**2).reduce((acc, num) => acc + num, 0) > b.map(bi => bi**3).reduce((acc, num) => acc + num, 0);

console.log(arrayMadness([4, 5, 6], [1, 2, 3]))
// returns true since 4 ** 2 + 5 ** 2 + 6 ** 2 > 1 ** 3 + 2 ** 3 + 3 ** 3


/* 
const arrayMadness = (a, b) => a.reduce((acc, x) => acc + x**2, 0) > b.reduce((acc, x) => acc + x**3, 0) 

function arrayMadness(a, b) {
  
  let ai = a.map(ai => ai**2)
  let bi = b.map(bi => bi**3)

  let sumA = ai.reduce((acc, num) => acc + num, 0);
  let sumB = bi.reduce((acc, num) => acc + num, 0);
  
  return sumA>sumB
}
*/