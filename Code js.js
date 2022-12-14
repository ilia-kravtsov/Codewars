
// Training JS #1: create your first JS function and print "Hello World!"

function helloWorld() {
    const str = "Hello World!";
    console.log(str);
  }

// BP

helloWorld = function() {
    var str = "Hello World!";
    console.log( str );
  }

// Training JS #2: Basic data types--Number

  var v1=50;v2=100,v3=150,v4=200,v5=2,v6=250
  function equal1(){
    var a=v1   
    var b=v1   
    return a+b;
  }
  //Please refer to the example above to complete the following functions
  function equal2(){
    var a=v3   //set number value to a
    var b=v1   //set number value to b
    return a-b;
  }
  function equal3(){
    var a=v1   //set number value to a
    var b=v5   //set number value to b
    return a*b;
  }
  function equal4(){
    var a=v4   //set number value to a
    var b=v5   //set number value to b
    return a/b;
  }
  function equal5(){
    var a=v6   //set number value to a
    var b=v3   //set number value to b
    return a%b;
  }

// BP

var v1=50;v2=100,v3=150,v4=200,v5=2,v6=250

// const equal1 = () => v1 + v1
// const equal2 = () => v3 - v1
// const equal3 = () => v1 * v5
// const equal4 = () => v4 / v5
// const equal5 = () => v2 % v4

// Training JS #3: Basic data types--String

/* In javascript, String is one of basic data types. Use "" or '' to declare a string variable.
  It can be letters:a,b,c,A,B,C, numbers: 123..., Various symbol:@#$%^&* , Control symbol:\n,\t etc..
 String can use operators +, Connect two or more strings together.*/

 var a1="A",a2="a",b1="B",b2="b",c1="C",c2="c",d1="D",d2="d",e1="E",e2="e",n1="N",n2="n"
 function Dad(){
   //select some variable to combine "Dad"
   return d1+a2+d2;
 }
 function Bee(){
   //select some variable to combine "Bee"
   return b1+e2+e2;
 }
 function banana(){
   //select some variable to combine "banana"
   return b2+a2+n2+a2+n2+a2;
 }
 
 //answer some questions if you finished works above
 function answer1(){
   //the answer should be "yes" or "no"
   return "no";
 }
 function answer2(){
   //the answer should be "yes" or "no"
   return "no";
 }
 function answer3(){
   //the answer should be "yes" or "no"
   return "yes";
 }

 // BP

 var a1="A",a2="a",b1="B",b2="b",c1="C",c2="c",d1="D",d2="d",e1="E",e2="e",n1="N",n2="n"

//  const Dad = () => d1 + a2 + d2
//  const Bee = () => b1 + e2 + e2
//  const banana = () => b2 + a2 + n2 + a2 + n2 + a2
 
//  const answer1 = () => "no"
//  const answer2 = () => "no"
//  const answer3 = () => "yes"

 // Training JS #4: Basic data types--Array

 function getLength(arr){
  return arr.length;
}
function getFirst(arr){
  return arr[0];
}
function getLast(arr){
  return arr[arr.length - 1];
}
function pushElement(arr){
  var el=1;
  arr.push(el);
  return arr;
}
function popElement(arr){
  arr.pop();
  return arr;
}

// BP

// const getLength = array => array.length;

// const getFirst = array => array[0];

// const getLast = array => array[array.length - 1];

// const pushElement = array => array.concat(0);

// const popElement = array => array.splice(0, array.length - 1);

// Training JS #5: Basic data types--Object

function animal(obj){
  var ani={name:"dog", legs:4, color: "white"};
  return 'This ' + obj.color + ' ' + obj.name + ' has ' + obj.legs + ' legs.';
}

// BP 

const animall = (obj) => `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;

// function animall(obj){
//   return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;
// }

// Training JS #7: if..else and ternary operator

function saleHotdogs(n){
  return n*(n<5 ? "100" : n>=5 && n<10 ? "95" : "90") ;
}

// Training JS #8: Conditional statement--switch

function howManydays(month){
  var days;
  switch (month){
  case 2: return 28; 
  case 4: case 6: case 9: case 11: return 30;
  default: return 31;
  }
  return days;
}

// BP

function howManydayss(monthh){
  switch (monthh){
     case 2: return 28
     case 4:
     case 6:
     case 9:
     case 11: return 30
  }
  return 31
}

// Training JS #9: loop statement --while and do..while

function padIt(str,n){
  while (n>0){
  if (n%2){
    str = "*" + str
  } else {
    str = str + "*"
  }
    n--
  }
  return str
}

//BP

function padIt(str,n){
  while(n>0){
    if(n%2 === 0) {
      str = str + "*";
    }else{
      str = "*" + str;
    }
    n --;
  }
  return str;
}

// Training JS #10: loop statement --for---

function pickIt(arr){
  var odd=[],even=[];
  for(unit of arr)
     (unit % 2 ? odd : even).push(unit)
  return [odd,even];
}

//BP

function pickItt (arr) {
  
  let odd = []
  let even =[]
      
  for (var x of arr) {
      ((x % 2) ? odd : even).push(x)    
  }
      
  return [odd, even]
}

// Training JS #11: loop statement --break,continue

function grabDoll(dolls){
  var bag=[];
  for(var i = 0; i < dolls.length; i++) {
    
    if(dolls[i] === "Hello Kitty" || dolls[i] === "Barbie doll")
    bag.push(dolls[i]);
    else continue;
    
    if(bag.length === 3) break;
    
  }
  
  return bag;
}

// Training JS #12: loop statement --for..in and for..of

function giveMeFive(obj){
  let five=[];
  for (let key in obj) {
    if (key.length==5) five.push(key);
    if (obj[key].length==5)five.push(obj[key]);
  } 
  return five;
}

// Returning Strings

function greet(name){
  return `Hello, ${name} how are you doing today?`;
}

// Remove First and Last Character
function removeChar(str){
  return str.slice(1, -1);
 };

 // You only need one - Beginner
 function check(a, x) {
  return a.includes(x);
};

function bonusTime(salary, bonus) {
  if(bonus === true){
    return '??' + salary * 10;
    } else {
    return '??' + salary;
  }
}

function stringToArray(string){
  return string.split(' ');
}

function contamination(text, char){
  return char.repeat(text.length)
  }

  function booleanToString(b){
    return b ? "true" : "false";
  }

  function repeatStr (n, s) {
    return s.repeat(n);
  }

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

  var re = /????????????/gi;
  var str = '???????????? ?????????????? ?? ???????????? ????????????.';
  var newstr = str.replace(re, '??????????????????');
  console.log(newstr); // ?????????????????? ?????????????? ?? ?????????????????? ????????????.

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

  // _____________________________________ ?????????????????? ?????????????? ???? 2

  maps = x => x.map(el => el*2);
 
// _____________________________________ ???????????????????? ?????? ??????????????

  let arrayPlusArray = (arr1, arr2) => arr1.concat(arr2).reduce((a,b) => a + b);

// _____________________________________ ???????????? ???????? ?? ?????????????? ???? ??????????????????????????????

invert = array => array.map(x => -x) 

// _____________________________________ ?????? ???????????????? ?????????? ?? ???????????????? ???? ???????????????????? ??????????

/* 
You get any card as an argument. Your task is to return the suit of this card (in lowercase).

Our deck (is preloaded):

('3???') -> return 'clubs'
('3???') -> return 'diamonds'
('3???') -> return 'hearts'
('3???') -> return 'spades'

?????????? substr() ???????????????????? ?????????????????? ???????????????????? ???????????????? ???? ????????????, ?????????????? ?? ?????????????????? ??????????????.

const str = 'Mozilla';

console.log(str.substr(1, 2));
// expected output: "oz"

console.log(str.substr(2));
// expected output: "zilla"

?????????? substring() ???????????????????? ?????????????????? ???????????? ?????????? ?????????? ??????????????????, ?????? ???? ???????????? ?????????????? ?? ???? ?????????? ????????????.

var anyString = 'Mozilla';

// ?????????????????? 'Moz'
console.log(anyString.substring(0, 3));
console.log(anyString.substring(3, 0));

// ?????????????????? 'lla'
console.log(anyString.substring(4, 7));
console.log(anyString.substring(7, 4));

// ?????????????????? 'Mozill'
console.log(anyString.substring(0, 6));

// ?????????????????? 'Mozilla'
console.log(anyString.substring(0, 7));
console.log(anyString.substring(0, 10));
*/

function defineSuit(card) {
  
  let v = card.substr(-1)
  
  if (v === '???'){
    return 'clubs'
  }
  else if (v === '???'){
    return 'diamonds'
  }
  else if (v === '???'){
    return 'hearts'
  }
  else if (v === '???'){
    return 'spades'
  }
}


// ________________ CSV representation of array

/*

input:
   [[ 0, 1, 2, 3, 4 ],
    [ 10,11,12,13,14 ],
    [ 20,21,22,23,24 ],
    [ 30,31,32,33,34 ]] 
    
output:
     '0,1,2,3,4\n'
    +'10,11,12,13,14\n'
    +'20,21,22,23,24\n'
    +'30,31,32,33,34'

*/

let array_1 = [[ 0, 1, 2, 3, 4 ],
[ 10,11,12,13,14 ],
[ 20,21,22,23,24 ],
[ 30,31,32,33,34 ]];

// let array_2 = array_1.join(',')

// console.log(array_2) // 0,1,2,3,4,10,11,12,13,14,20,21,22,23,24,30,31,32,33,34

let array_3 = array_1.map(everyArrayInArrayOfArrays => everyArrayInArrayOfArrays.join(','))

console.log(array_3); // (4)??['0,1,2,3,4', '10,11,12,13,14', '20,21,22,23,24', '30,31,32,33,34']

let array_4 = array_3.join('\n')

console.log(array_4); 

/* 

0,1,2,3,4
10,11,12,13,14
20,21,22,23,24
30,31,32,33,34

*/

let toCsvText = array => {
  let v = array.map(a => a.join(','))
  return v.join('\n')
}

//________________ Sum of differences in array

sumOfDifferences = array_5 => array_5.length > 1 ? Math.max(...array_5) - Math.min(...array_5) : 0

// _______________ Multiple of index

let multipleOfIndex = array => array.filter((element, index) => element % index === 0) 

// _______________ Find the first non-consecutive number

let firstNonConsecutive = arr => {
  for(let i = 0; i < arr.length - 1; i++) {
    if ( arr[i] + 1 !== arr[i + 1] ) {
      return arr[i + 1]
    }
  }
  return null
}

// _______________ Find Multiples of a Number

function findMultiples(integer, limit){
  let result = []
  
  for (let i = integer; i<=limit; i+=integer)
    result.push(i)
    
  return result
}

// _______________ Merge two sorted arrays into one

console.log('-----------------------------------------');

let arr1 = [1, 3, 5, 7, 9]
let arr2 = [10, 8, 6, 4, 2]

function mergeArrays(arr1, arr2) {

  let arr3 = [...arr1, ...arr2]
    
  let array3 = new Set(arr3)
  let array_3 = Array.from(array3)

  let array_33 = array_3.sort((a,b) => a - b)
  
  console.log(array_33);
    
}

mergeArrays(arr1,arr2)

/* 
???????????????????? ?????????????? ??????????????:

let array_33 = array_3.sort((a,b) => a - b) // (10)??[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let array_33 = array_3.sort((a,b) => b - a) // (10)??[10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
let array_33 = array_3.sort((a,b) => b - b) // (10)??[1, 3, 5, 7, 9, 10, 8, 6, 4, 2]
let array_33 = array_3.sort((a,b) => a - a) // (10)??[1, 3, 5, 7, 9, 10, 8, 6, 4, 2]

???????????????? ??????:

Version 1

function mergeArrays(arr1, arr2) {
  return [...new Set(arr1.concat(arr2).sort((a,b) => a-b))] 
}

Version 2

let mergeArrays = (arr1, arr2) => [...new Set(arr1.concat(arr2).sort((a,b) => a-b))] 

Sample of concat:

let array3 = arr1ArrayFrom.concat(arr2ArrayFrom)

let arr3 = [...arr1, ...arr2]

*/

/* 
__Checking for empty array

arr1.length && arr2.length

arr1.length !== 0 && arr2.length !==0
*/

/* 
____The same task

function mergeArrays(arr1, arr2) {
  
  if (arr1.length !== 0 && arr2.length !==0) {
  
  let arr3 = [...arr1, ...arr2]
  
  let array3 = new Set(arr3)
  
  let array_3 = Array.from(array3)
  
  let array_33 = array_3.sort((a,b) => a - b)
  
  return array_33
    
  }
  else {
    return []
  }
}
*/

/* 
__________________________________________ Filter out the geese
*/

// function gooseFilter (birds) {
//   var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  
//   return birds.filter( x => !geese.includes(x))
// };

// const GEESE = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
// const gooseFilter = birds => birds.filter(bird => !GEESE.includes(bird));

/* Check Same Case */

function sameCase(a, b){
  if(a.toUpperCase() === a.toLowerCase() || b.toLowerCase() === b.toUpperCase()){
     return -1
   }else if(a === a.toLowerCase() && b === b.toLowerCase() || a === a.toUpperCase() && b === b.toUpperCase()){
       return 1
   }else{
     return 0
   }
 }

/* Gravity Flip */

 const flip=(d, a)=>{
  if (d === 'R') {
    return a.sort((a,b) => a - b )
  }
    return a.sort((a,b) => b - a)
}

// Coefficients of the Quadratic Equation

function quadratic(x1, x2){
  return [1, -(x2 + x1), (x1 * x2)]
}

// A wolf in sheep's clothing

let sheepsArray = ['sheep', 'sheep', 'sheep', 'sheep', 'sheep', 'wolf', 'sheep', 'sheep'];

// const varWolf = sheepsArray.find((element) => element === 'wolf')

// console.log(varWolf); // -> wolf

const varWolf = sheepsArray.find((element) => element === 'wolf')

console.log(varWolf);

console.log(sheepsArray);
// let EndOfArray = sheepsArray.length

// console.log(EndOfArray);

// let lastItem = sheepsArray.slice(-1)

// console.log(lastItem);

// if (sheepsArray.slice(-1) !== 'sheep') {
//   return 'Pls go away and stop eating my sheep'
// }
// else {
//   return 'Oi! Sheep number 1! You are about to be eaten by a wolf!'
// }

function warnTheSheep(queue) {
  
  let wolfIndex = queue.indexOf('wolf');
  
  if (wolfIndex === queue.length-1) {
  return 'Pls go away and stop eating my sheep'
  }

  let sheepIndex = queue.length - wolfIndex - 1;
  
  return `Oi! Sheep number ${sheepIndex}! You are about to be eaten by a wolf!`
  
}

function warnTheSheep(q) {
  return q[q.length-1] === 'wolf' ? "Pls go away and stop eating my sheep" : `Oi! Sheep number ${q.length - (q.indexOf('wolf')+1)}! You are about to be eaten by a wolf!`
}

// Get the mean of an array

function getAverage(marks){
  return Math.floor(marks.reduce((sum,x)=>sum+x)/marks.length)
}

// To square(root) or not to square(root)

squareOrSquareRoot = (array) => array.map(x=>Math.sqrt(x)%1?x*x:Math.sqrt(x))

// I love you, a little , a lot, passionately ... not at all
// I love you, a little , a lot, passionately ... not at all

function howMuchILoveYou(nbPetals) {
  return ['not at all','I love you', 'a little', 'a lot', 'passionately', 'madly'][nbPetals%6]
}

// ____________________ N-th Power


function index(array, n){
  return array[n] ** n || -1
}


// ______________________ Is there a vowel in there?

isVow = a => a.map(x=>/[aeiou]/.test(String.fromCharCode(x))?String.fromCharCode(x):x)