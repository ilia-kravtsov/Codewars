/*
Array Exchange and Reversing

It's time for some array exchange! The objective is simple: exchange the elements of two arrays in-place in a way that their new content is also reversed.

// before
const myArray = ['a', 'b', 'c'];
const otherArray = [1, 2, 3];

exchangeWith(myArray, otherArray);

// after
myArray => [3, 2, 1]
otherArray => ['c', 'b', 'a']
*/
function exchangeWith(a, b) {
  a.reverse();
  b.reverse();
  const temp = [...a]; 
  a.length = 0;
  a.push(...b); 
  b.length = 0; 
  b.push(...temp); 
}