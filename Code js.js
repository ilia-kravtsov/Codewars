
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
    return '£' + salary * 10;
    } else {
    return '£' + salary;
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

  // _____________________________________ Умножение массива на 2

  maps = x => x.map(el => el*2);
 
// _____________________________________ Складываем два массива

  let arrayPlusArray = (arr1, arr2) => arr1.concat(arr2).reduce((a,b) => a + b);

// _____________________________________ Меняем знак в массиве на противоположный

invert = array => array.map(x => -x) 

// _____________________________________ Нам приходит карта с символом мы возвращаем масть

/* 
You get any card as an argument. Your task is to return the suit of this card (in lowercase).

Our deck (is preloaded):

('3♣') -> return 'clubs'
('3♦') -> return 'diamonds'
('3♥') -> return 'hearts'
('3♠') -> return 'spades'

Метод substr() возвращает указанное количество символов из строки, начиная с указанной позиции.

const str = 'Mozilla';

console.log(str.substr(1, 2));
// expected output: "oz"

console.log(str.substr(2));
// expected output: "zilla"

Метод substring() возвращает подстроку строки между двумя индексами, или от одного индекса и до конца строки.

var anyString = 'Mozilla';

// Отобразит 'Moz'
console.log(anyString.substring(0, 3));
console.log(anyString.substring(3, 0));

// Отобразит 'lla'
console.log(anyString.substring(4, 7));
console.log(anyString.substring(7, 4));

// Отобразит 'Mozill'
console.log(anyString.substring(0, 6));

// Отобразит 'Mozilla'
console.log(anyString.substring(0, 7));
console.log(anyString.substring(0, 10));
*/

function defineSuit(card) {
  
  let v = card.substr(-1)
  
  if (v === '♣'){
    return 'clubs'
  }
  else if (v === '♦'){
    return 'diamonds'
  }
  else if (v === '♥'){
    return 'hearts'
  }
  else if (v === '♠'){
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

console.log(array_3); // (4) ['0,1,2,3,4', '10,11,12,13,14', '20,21,22,23,24', '30,31,32,33,34']

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
Сортировка массива примеры:

let array_33 = array_3.sort((a,b) => a - b) // (10) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let array_33 = array_3.sort((a,b) => b - a) // (10) [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
let array_33 = array_3.sort((a,b) => b - b) // (10) [1, 3, 5, 7, 9, 10, 8, 6, 4, 2]
let array_33 = array_3.sort((a,b) => a - a) // (10) [1, 3, 5, 7, 9, 10, 8, 6, 4, 2]

Упрощаем код:

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

// _______________________Remove duplicates from list

/* 
При помощи Set() создается объект из уникальных значений. Неявное использование этого объекта позволяет удалить дубликаты из массива.
Мы можем воспользоваться этим методом, только нужно будет еще преобразовать Set в новый массив. 
*/

const distinct = a => [...new Set(a)]

// _______________________ No Loops 2 - You only need one

/* 
*** No Loops Allowed ***

You will be given an array a and a value x. All you need to do is check whether the provided array contains the value, without using a loop.

Array can contain numbers or strings. x can be either. Return true if the array contains the value, false if not. With strings you will need to account for case.

Looking for more, loop-restrained fun? Check out the other kata in the series:
*/

const check = (a,x) => a.includes(x, 0);

// ______________________ Calculate average

function findAverage(array) {

  if (array.length === 0) {
    return 0
  }
  
  let CA = 0;
  
  for(let i = 0; i < array.length; i++) {
    CA += array[i]
  }
  
  CA = CA/array.length
  
  return CA
   
}

// _______________________ Duck Duck Goose solution

duckDuckGoose = (players, goose) => players[(goose-1)%players.length].name

// _______________________ Removing Elements

/* 
Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

Example:
["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

None of the arrays will be empty, so you don't have to worry about that!
*/

const removeEveryOther = arr => arr.filter((item, index) => index % 2 ? false : item)

// ________________________ Count of positives / sum of negatives

/* 
Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
*/

function countPositivesSumNegatives(input) {
  
  if (input === [] || input === null) {
      return []
  }

  let finalArray = []
  let positiveArray = []
  let negativeArray = []
  let sumNegative = 0

  positiveArray = input.filter(num => num > 0)
  negativeArray = input.filter(num => num < 0)

  if(positiveArray == 0 && negativeArray == 0) {
    return []
  }

  for(let i = 0; i < negativeArray.length; i++) {
      sumNegative += negativeArray[i];
  }

  return finalArray = [positiveArray.length, sumNegative]

}

// _______________________ pick a set of first elements

/* 
Write a function to get the first element(s) of a sequence. Passing a parameter n (default=1) will return the first n element(s) of the sequence.

If n == 0 return an empty sequence []

Examples
var arr = ['a', 'b', 'c', 'd', 'e'];
first(arr) //=> ['a'];
first(arr, 2) //=> ['a', 'b']
first(arr, 3) //=> ['a', 'b', 'c'];
first(arr, 0) //=> [];
*/

function first(arr, n) {
  if (n === 0) {
      return []
  }
  if(n) {
      return arr.splice(0,n)
  }
  if (!n) {
      return [arr[0]];
  } 
}

const first = (arr, n) => n === 0 ? [] : n ? arr.splice(0,n) : [arr[0]];

const first = (arr, n = 1) => arr.slice(0, n)

// _____________________________________ Sum of positive

/* 
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.
*/

const positiveSum = arr => {
  let positive = arr.filter(number => number > 0)
  let sumPositive = 0
  for (let i = 0; i < positive.length; i++) {
      sumPositive += positive[i]             
  }
  return sumPositive;
}

// or

const positiveSumm = arr => arr.filter(x => x > 0).reduce((a, b) => a+b, 0);

// __________________________________________________ Arguments to Binary addition

/* 
Given an array add all the number elements and return the binary equivalent of that sum; to make the code bullet proof anything else than a number should be addeded as 0 since it can't be addeded.

If your language can handle float binaries assume the array won't contain float or doubles.

arr2bin([1,2]) == '11'
arr2bin([1,2,'a']) == '11'
arr2bin([]) == '0'

NOTE: NaN is a number too in javascript for decimal, binary and n-ary base
This is a modification on the Kata: Array2Binary addition hope you like it
*/

const arr2bin = arr => arr.reduce((x,y) => x + (typeof y == 'number' ? y : 0), 0).toString(2)



const uefaEuro2016 = (teams, scores) => `At match ${teams[0]} - ${teams[1]}, ${scores[0] > scores[1] ? `${teams[0]} won!` : scores[1] > scores[0] ? `${teams[1]} won!` : `teams played draw.`}`

// ____________________________________________ Logical calculator

/* 
Your Task
Given an array of Boolean values and a logical operator, return a Boolean result based on sequentially applying the operator to the values in the array.

Examples
booleans = [True, True, False], operator = "AND"
True AND True -> True
True AND False -> False
return False
booleans = [True, True, False], operator = "OR"
True OR True -> True
True OR False -> True
return True
booleans = [True, True, False], operator = "XOR"
True XOR True -> False
False XOR False -> False
return False
Input
an array of Boolean values (1 <= array_length <= 50)
a string specifying a logical operator: "AND", "OR", "XOR"
Output
A Boolean value (True or False).
*/

let operators = {
  'AND': (a, b) => a && b,
  'OR': (a, b) => a || b,
  'XOR': (a, b) => a !== b,
}

const logicalCalc = (array, op) => array.reduce(operators[op])

// ___________________________________________________________ Remove First and Last Character Part Two
/* 
This is a spin off of my first kata.

You are given a string containing a sequence of character sequences separated by commas.

Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.

If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).
*/
let array = arr => arr.split(',').slice(1,-1).join(' ') || null


// __________________________________ SpeedCode #2 - Array Madness

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

// __________________________________________________ Find the Difference in Age between Oldest and Youngest Family Members

/*

*/
const differenceInAges = ages => [Math.min.apply(null, ages), Math.max.apply(null, ages), Math.max.apply(null, ages) - Math.min.apply(null, ages)]
// __________________________________________________ Count the Monkeys!


/*
You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.

As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

For example(Input --> Output):

10 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 1 --> [1]
*/
function monkeyCount(n) {
  if (n === 1) {
      return [n]
  }

  if(n > 1) {
      let arr = []
      for( let i = 1; i < n; i++) {
           arr.push(i)
      }
      arr.push(n)
      return arr
  }
}

console.log(monkeyCount(1))

// function monkeyCount(n) {
//     for (var i = 0, arr = []; i < n; arr.push(++i));
  
//     return arr;
//   }

// __________________________________________________ My head is at the wrong end!

/*
You're at the zoo... all the meerkats look weird. Something has gone terribly wrong - someone has gone and switched their heads and tails around!

Save the animals by switching them back. You will be given an array which will have three values (tail, body, head). It is your job to re-arrange the array so that the animal is the right way round (head, body, tail).

Same goes for all the other arrays/lists that you will get in the tests: you have to change the element positions with the same exact logics

Simples!
*/
const fixTheMeerkat=arr=>arr.reverse();
// __________________________________________________ Implement Array.prototype.filter()

Array.prototype.filter = function (filterFn) {
  const result = []
  for (let i = 0; i < this.length; i++) {
      if ( filterFn(this[i])) {
          result.push(this[i])
      }
  }
  return result
}

/*
Array.prototype.filter=function(fn){
  return this.reduce((s,a)=>fn(a)?(s.push(a),s):s,[]);
}

What we want to implement is Array.prototype.filter() function, just like the existing Array.prototype.filter(). Another similar function is _.filter() in underscore.js and lodash.js.

The usage will be quite simple, like:

[1, 2, 3, 4, 5].filter(num => num > 3) == [4, 5]
Of course, the existing Array.prototype.filter() function has been undefined for the purposes of this Kata.
*/

// __________________________________________________ Printing Array elements with Comma delimiters

/* 
Input: Array of elements

["h","o","l","a"]

Output: String with comma delimited elements of the array in th same order.

"h,o,l,a"
*/

const printArray = a => a.join(',')

// __________________________________________________ Counting Duplicates


/*
Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
*/
function duplicateCount(text){
    text = text.toLowerCase()
    console.log(text)
    const uniqSet = new Set();
    for (let i = 0; i < text.length; i++) {
        for (let j = 0; j < i; j++)
        if (text[j] === text[i]) {
            uniqSet.add(text[i])
        }
    }
     const uniq = Array.from(uniqSet)
     console.log(uniq)
     return uniq.length
    }
    
console.log(duplicateCount('aA11'))
// __________________________________________________ A Needle in the Haystack


/*
Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:

"found the needle at position " plus the index it found the needle, so:

Example(Input --> Output)

["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 
Note: In COBOL, it should return "found the needle at position 6"
*/
const findNeedle = h => `found the needle at position ${h.indexOf('needle')}`
// __________________________________________________ Grasshopper - Array Mean

/*
Find Mean
Find the mean (average) of a list of numbers in an array.

Information
To find the mean (average) of a set of numbers add all of the numbers together and divide by the number of values in the list.

For an example list of 1, 3, 5, 7

1. Add all of the numbers

1+3+5+7 = 16
2. Divide by the number of values in the list. In this example there are 4 numbers in the list.

16/4 = 4
3. The mean (or average) of this list is 4
*/
const findAverage = nums => nums.reduce((a, b) => a + b) / nums.length;

var findAverage = function (nums) {
  let ave = 0
  for(let i = 0; i < nums.length; i++) {
     ave += nums[i]
  }
  return ave = ave/nums.length
}
// __________________________________________________ Add Length

/*
What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

Example(Input --> Output)

"apple ban" --> ["apple 5", "ban 3"]
"you will win" -->["you 3", "will 4", "win 3"]
Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

Note: String will have at least one element; words will always be separated by a space.
*/
const addLength = str => str.split(' ').map(w => `${w} ${w.length}`) 
// __________________________________________________ 

/*

*/

// __________________________________________________ 

/*

*/

// __________________________________________________ 

/*

*/

// __________________________________________________ 

/*

*/

// __________________________________________________ 

/*

*/

// __________________________________________________ 

/*

*/

// __________________________________________________ 

/*

*/

// __________________________________________________ 

/*

*/

// __________________________________________________ 

/*

*/

// __________________________________________________ 

/*

*/

// __________________________________________________ 

/*

*/

// __________________________________________________ 

/*

*/

// __________________________________________________ 

/*

*/

// __________________________________________________ 

/*

*/

// __________________________________________________ 

/*

*/

// __________________________________________________ 

/*

*/

// __________________________________________________ 

/*

*/

// __________________________________________________ 

/*

*/

// __________________________________________________ 

/*

*/

// __________________________________________________ 

/*

*/

// __________________________________________________ 

/*

*/

// __________________________________________________ 

/*

*/

// __________________________________________________ 

/*

*/

// __________________________________________________ 

/*

*/

// __________________________________________________ 

/*

*/

// __________________________________________________ 

/*

*/

// __________________________________________________ 

/*

*/

// __________________________________________________ 

/*

*/

// __________________________________________________ 

/*

*/

// __________________________________________________ 

/*

*/

// __________________________________________________ 

/*

*/

// __________________________________________________ 

/*

*/

// __________________________________________________ 

/*

*/

// __________________________________________________ 

/*

*/

// __________________________________________________ 

/*

*/

// __________________________________________________ 

/*

*/

// __________________________________________________ 

/*

*/

// __________________________________________________ 

/*

*/

// __________________________________________________ 

/*

*/

// __________________________________________________ 

/*

*/

// __________________________________________________ 

/*

*/

// __________________________________________________ 

/*

*/

// __________________________________________________ 

/*

*/

// __________________________________________________ 

/*

*/

// __________________________________________________ 

/*

*/

// __________________________________________________ 

/*

*/

// __________________________________________________ 

/*

*/

// __________________________________________________ 

/*

*/

// __________________________________________________ 

/*

*/

// __________________________________________________ 

/*

*/

// __________________________________________________ 

/*

*/

// __________________________________________________ 

/*

*/

// __________________________________________________ 

/*

*/

// __________________________________________________ 

/*

*/

// __________________________________________________ 

/*

*/

// __________________________________________________ 

/*

*/

// __________________________________________________ 

/*

*/

// __________________________________________________ 

/*

*/

// __________________________________________________ 

/*

*/

// __________________________________________________ 

/*

*/

// __________________________________________________ 

/*

*/

// __________________________________________________ 

/*

*/

// __________________________________________________ 

/*

*/

// __________________________________________________ 

/*

*/

// __________________________________________________ 

/*

*/

// __________________________________________________ 

/*

*/

// __________________________________________________ 

/*

*/

// __________________________________________________ 

/*

*/

// __________________________________________________ 

/*

*/

// __________________________________________________ 

/*

*/

// __________________________________________________ 

/*

*/

// __________________________________________________ 

/*

*/

// __________________________________________________ 

/*

*/

// __________________________________________________ 

/*

*/

// __________________________________________________ 

/*

*/

// __________________________________________________ 

/*

*/

// __________________________________________________ 

/*

*/

// __________________________________________________ 

/*

*/

// __________________________________________________ 

/*

*/

// __________________________________________________ 

/*

*/

// __________________________________________________ 

/*

*/

// __________________________________________________ 

/*

*/

// __________________________________________________ 

/*

*/

// __________________________________________________ 

/*

*/

// __________________________________________________ 

/*

*/

// __________________________________________________ 

/*

*/

// __________________________________________________ 

/*

*/

// __________________________________________________ 

/*

*/

// __________________________________________________ 

/*

*/

// __________________________________________________ 

/*

*/

// __________________________________________________ 

/*

*/

// __________________________________________________ 

/*

*/

// __________________________________________________ 

/*

*/

// __________________________________________________ 

/*

*/

// __________________________________________________ 

/*

*/

// __________________________________________________ 

/*

*/

// __________________________________________________ 

/*

*/

// __________________________________________________ 

/*

*/

// __________________________________________________ 

/*

*/

// __________________________________________________ 

/*

*/

// __________________________________________________ 

/*

*/

// __________________________________________________ 

/*

*/

// __________________________________________________ 

/*

*/

// __________________________________________________ 

/*

*/

// __________________________________________________ 

/*

*/

// __________________________________________________ 

/*

*/

// __________________________________________________ 

/*

*/

// __________________________________________________ 

/*

*/

// __________________________________________________ 

/*

*/
