ДД
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
//_____________codewars 
//_____________return negative
/*
In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

Examples
makeNegative(1);    // return -1
makeNegative(-5);   // return -5
makeNegative(0);    // return 0
makeNegative(0.12); // return -0.12
Notes
The number can be negative already, in which case no change is required.
Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.
*/
const makeNegative = num => num > 0 ? -num : num
//_____________convert boolean
/*
Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
*/
const boolToWord = bool => bool ? 'Yes' : 'No';
//_____________
/*

*/

//_____________
/*

*/

//_____________
/*

*/
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
  function equal6(){
    var a=v6   //set number value to a
    var b=v3   //set number value to b
    return a%b;
  }
  function equal7(){
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

// clean function example:

function sum(a,b) {
  return a + b
}

sum(3,4);

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
//_____
for (let i = 0; i < arr.length; i++) {

    if (parseInt(arr[i]) % 2 !== 0) {

      arr[i] = '-' + arr[i] + '-';

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
// __________________________________________________ Convert number to reversed array of digits


/*
Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example(Input => Output):
35231 => [1,3,2,5,3]
0 => [0]
*/
const digitize = n => (Array.from(String(n), Number)).reverse()
// __________________________________________________ Count by X


/*
Create a function with two arguments that will return an array of the first n multiples of x.

Assume both the given number and the number of times to count will be positive numbers greater than 0.

Return the results as an array or list ( depending on language ).

Examples for the 
countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
countBy(2,5) === [2,4,6,8,10]
*/
function countBy(x, n) {
  let z = [];
  for (let i = 1; i <= n; i++) {
    z.push(x * i);
  }
  return z;
}
// __________________________________________________ Sentences with Functions



/*
Adam(has(a(dog()))); // must return "Adam has a dog."
The(name(of(the(dog(is(also(Adam()))))))); // must return "The name of the dog is also Adam."
*/
const Adam = has => has ? `Adam ${has}`: 'Adam.';
const has = a => `has ${a}`
const a = dog => `a ${dog}`
const dog = (is) => is ? `dog ${is}`: 'dog.'
const The = (name) => `The ${name}`
const name = (of) => `name ${of}`
const of = (the) =>  `of ${the}`
const the = (dog) => `the ${dog}`
const is = (also) => `is ${also}`
const also = (Adam) => `also ${Adam}`
// __________________________________________________  Find numbers which are divisible by given number


/*
Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.

Example(Input1, Input2 --> Output)
[1, 2, 3, 4, 5, 6], 2 --> [2, 4, 6]
*/
const divisibleBy = (n, d) => n.filter(x => x % d == 0)
// __________________________________________________ Basic Training: Add item to an Array

/*
Add the value "codewars" to the websites array.
After your code executes the websites array should == ["codewars"]

The websites array has already been defined for you using the following code:

var websites = [];
*/
websites.push("codewars")
// __________________________________________________ Counting sheep...


/*
Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined

ARRAYSFUNDAMENTALS
Suggest kata description edits
*/
const countSheeps = arrayOfSheep => arrayOfSheep.filter(sheep => sheep).length

// __________________________________________________ Take an Arrow to the knee, Functionally


/*
Arrow style Functions
Come here to practice the Arrow style functions Not much else to say good luck!
Details
You will be given an array of numbers which can be used using the String.fromCharCode() (JS), Tools.FromCharCode() (C#) method to convert the number to a character. It is recommended to map over the array of numbers and convert each number to the corresponding ascii character.

Examples
These are example of how to convert a number to an ascii Character:
Javascript => String.fromCharCode(97) // a
C# => Tools.FromCharCode(97) // a

Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
*/
var ArrowFunc = function(arr) {
  return arr.map( x => String.fromCharCode(x)).join(''); //Complete this function
}
// __________________________________________________ Square(n) Sum


/*
Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 
1
2
+
2
2
+
2
2
=
9
1 
2
 +2 
2
 +2 
2
 =9.
*/
function squareSum(numbers){
  return numbers.reduce((sum,num) => sum + (num * num), 0);
}
const squareSum = numbers => numbers.length? numbers.map(number => number**2).reduce((a,b) => a+b): 0;
// __________________________________________________ Push a hash/an object into array


/*
You are trying to put a hash in ruby or an object in javascript or java into an array, but it always returns error, solve it and keep it as simple as possible!
*/
items = []
items.push({a: "b", c: "d"})
// __________________________________________________ Enumerable Magic #20 - Cascading Subsets


/*
Create a method each_cons that accepts a list and a number n, and returns cascading subsets of the list of size n, like so:

each_cons([1,2,3,4], 2)
  #=> [[1,2], [2,3], [3,4]]

each_cons([1,2,3,4], 3)
  #=> [[1,2,3],[2,3,4]]
  
As you can see, the lists are cascading; ie, they overlap, but never out of order.
*/
function eachCons(array, n) {
  let result = []
  for (let i = 0; i < array.length; i++) {
    result.push(array.slice(i, i +n))
  }
	return result.filter(each => each.length === n);
}
// __________________________________________________ Enumerable Magic #1 - True for All?

/*
Task
Create a method all which takes two params:

a sequence
a function (function pointer in C)
and returns true if the function in the params returns true for every element in the sequence. Otherwise, it should return false. If the sequence is empty, it should return true, since technically nothing failed the test.

Example
all((1, 2, 3, 4, 5), greater_than_9) -> false
all((1, 2, 3, 4, 5), less_than_9)    -> True
*/
function all( arr, fun ){
  return arr.every(fun)
}
// __________________________________________________ Swap Values

/*
I would like to be able to pass an array with two elements to my swapValues function to swap the values. However it appears that the values aren't changing.

Can you figure out what's wrong here?
*/
const swapValues = args => [args[1], args[0]] = [args[0], args[1]]

function swapValues(arr) {
  return arr.reverse();
}
// __________________________________________________ Length and two values.

/*
Given an integer n and two other values, build an array of size n filled with these two values alternating.

Examples
5, true, false     -->  [true, false, true, false, true]
10, "blue", "red"  -->  ["blue", "red", "blue", "red", "blue", "red", "blue", "red", "blue", "red"]
0, "one", "two"    -->  []
Good luck!
*/
function alternate(n, firstValue, secondValue){
  const array = []
  
  for (let i = 0; i < n; i++) {
    array.push(i % 2 === 0 ? firstValue : secondValue)
  }
  
  return array
}
// __________________________________________________ Likes Vs Dislikes


/*
YouTube had a like and a dislike button, which allowed users to express their opinions about particular content. It was set up in such a way that you cannot like and dislike a video at the same time. There are two other interesting rules to be noted about the interface: Pressing a button, which is already active, will undo your press. If you press the like button after pressing the dislike button, the like button overwrites the previous "Dislike" state. The same is true for the other way round.

Task
Create a function that takes in a list of button inputs and returns the final state.

Examples
likeOrDislike([Dislike]) => Dislike
likeOrDislike([Like,Like]) => Nothing
likeOrDislike([Dislike,Like]) => Like
likeOrDislike([Like,Dislike,Dislike]) => Nothing
Notes
If no button is currently active, return Nothing.
If the list is empty, return Nothing.
*/
function likeOrDislike(buttons) {
  let result = 'Nothing'
  
  for (let i = 0; i < buttons.length; i++) {
    if (buttons[i] === result) {
      result = 'Nothing'
    } else {
      result = buttons[i]
    }
  }
  
  return result
}
// __________________________________________________ "this" is a problem


/*
We want to create a constructor function 'NameMe', which takes first name and last name as parameters. The function combines the first and last names and saves the value in "name" property.

We already implemented that function, but when we actually run the code, the "name" property is accessible, but the "firstName" and "lastName" is not accessible. All the properties should be accessible. Can you find what's wrong with it? A test fixture is also available

function NameMe(first, last) {
    this.firstName = first;
    this.lastName = last;
    return {name: this.firstName + ' ' + this.lastName};
}

var n = new NameMe('John', 'Doe');
n.firstName //Expected: John
n.lastName //Expected: Doe
n.name //Expected: John Doe
*/
function NameMe(first, last) {
    this.firstName = first;
    this.lastName = last;
    this.name = `${first} ${last}` 
}
// __________________________________________________ Sum of two lowest positive integers


/*
Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.
*/
function sumTwoSmallestNumbers(numbers) {  
  let [a,b] = numbers.sort((a,b) => a - b)
  return a + b
}
// __________________________________________________ Sum of odd numbers


/*
Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

1 -->  1
2 --> 3 + 5 = 8
*/
const rowSumOddNumbers = n => n ** 3
// __________________________________________________ Odd or Even?


/*
Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).

Examples:
Input: [0]
Output: "even"

Input: [0, 1, 4]
Output: "odd"

Input: [0, -1, -5]
Output: "even"
*/
const oddOrEven = a => a.reduce((a,b) => a + b, 0) % 2 === 0 ? 'even' : 'odd'
// __________________________________________________ Remove the minimum

/*
The museum of incredible dull things
The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.

However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.

Task
Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

Don't change the order of the elements that are left.

Examples
* Input: [1,2,3,4,5], output = [2,3,4,5]
* Input: [5,3,2,1,4], output = [5,3,2,4]
* Input: [2,2,1,2,1], output = [2,2,2,1]
*/
function removeSmallest(numbers) {
    numbers = numbers.slice(); //copy the array
    numbers.splice(numbers.indexOf(Math.min.apply(null, numbers)),1)
    return numbers;
}

const removeSmallest = numbers => numbers.filter((n,i) => i !== numbers.indexOf(Math.min(...numbers)));
// __________________________________________________ The highest profit wins!


/*
Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.

Task
Write a function that returns both the minimum and maximum number of the given list/array.

Examples (Input --> Output)
[1,2,3,4,5] --> [1,5]
[2334454,5] --> [5,2334454]
[1]         --> [1,1]
Remarks
All arrays or lists will always have at least one element, so you don't need to check the length. Also, your function will always get an array or a list, you don't have to check for null, undefined or similar.
*/
const minMax = arr => [ Math.min(...arr), Math.max(...arr) ];
// __________________________________________________ Testing 1-2-3

/*
Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

Write a function which takes a list of strings and returns each line prepended by the correct number.

The numbering starts at 1. The format is n: string. Notice the colon and space in between.

Examples: (Input --> Output)

[] --> []
["a", "b", "c"] --> ["1: a", "2: b", "3: c"]
*/
const number = a => a.map((lett,i) => `${i+1}: ${lett}`)
// __________________________________________________  Sort array by string length

/*
Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

For example, if this array were passed as an argument:

["Telescopes", "Glasses", "Eyes", "Monocles"]

Your function would return the following array:

["Eyes", "Glasses", "Monocles", "Telescopes"]
*/
const sortByLength = array => array.sort((a,b) => a.length - b.length)
// __________________________________________________ Find the middle element


/*
As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

The input to the function will be an array of three distinct numbers (Haskell: a tuple).

For example:

gimme([2, 3, 1]) => 0
2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

Another example (just to make sure it is clear):

gimme([5, 10, 14]) => 1
10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.
*/
function gimme (triplet) {
  return triplet.indexOf(triplet.concat().sort(function(a,b){return a - b})[1])
}
// __________________________________________________ Are You Playing Banjo?

/*
Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:

name + " plays banjo" 
name + " does not play banjo"
Names given are always valid strings.
*/
const areYouPlayingBanjo = name => name[0] === 'r' || name[0] === 'R' ? `${name} plays banjo` : `${name} does not play banjo`
// __________________________________________________ MakeUpperCase


/*
Write a function which converts the input string to uppercase.
*/
const makeUpperCase = str => str.toUpperCase();

// __________________________________________________ If you can't sleep, just count sheep!!

/*
If you can't sleep, just count sheep!!

Task:
Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.
*/
const countSheep = num => {
    let result = ''
    for (let i = 1; i <= num; i++) {
        result += `${i} sheep...`
    }
    return result
}
// __________________________________________________ Grasshopper - Personalized Message


/*
Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

Use conditionals to return the proper message:
*/
const greet = (name, owner) => name === owner ? 'Hello boss' : 'Hello guest'
// __________________________________________________ Remove exclamation marks


/*
Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
*/
function removeExclamationMarks(s) {
  return s.replace(/!/gi, '');
}
const removeExclamationMarks = s =>  s.split("").filter(w=> w !== '!').join("")
// __________________________________________________ The Feast of Many Beasts


/*
All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.
*/
function feast(beast, dish) {
	return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
}
// __________________________________________________ Double Char


/*
Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

Examples (Input -> Output):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "
Good Luck!
*/
function doubleChar(str) {
  return str.split('').map((w) => w+w).join('');
}
// __________________________________________________ All Star Code Challenge #18


/*
Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.

If no occurrences can be found, a count of 0 should be returned.

("Hello", "o")  ==>  1
("Hello", "l")  ==>  2
("", "z")       ==>  0
str_count("Hello", 'o'); // returns 1
str_count("Hello", 'l'); // returns 2
str_count("", 'z'); // returns 0
Notes
The first argument can be an empty string
In languages with no distinct character data type, the second argument will be a string of length 1
*/
function strCount(str, letter){  
  let result = 0
  if (str) result = str.split('').map(w => w === letter ? 1 : 0).reduce((a,b) => a + b)
  return result
}
// __________________________________________________ Stringy Strings

/*
write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.

the string should start with a 1.

a string with size 6 should return :'101010'.

with size 4 should return : '1010'.

with size 12 should return : '101010101010'.

The size will always be positive and will only use whole numbers.
*/
function stringy(size) {
  var str = '';
  for (let i = 1; i <= size; i++) {
    str = str + i % 2  
  }
  return str
}
// __________________________________________________ Vowel remover

/*
Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

Examples
"hello"     -->  "hll"
"codewars"  -->  "cdwrs"
"goodbye"   -->  "gdby"
"HELLO"     -->  "HELLO"
don't worry about uppercase vowels
y is not considered a vowel for this kata
*/
const shortcut = string => string.replace(/[aeiou]/g, '');
// __________________________________________________ Short Long Short

/*
Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( zero length ).

Hint for R users:

The length of string is not always the same as the number of characters
For example: (Input1, Input2) --> output

("1", "22") --> "1221"
("22", "1") --> "1221"
*/
const solution = (a, b) => a.length > b.length ? `${b}${a}${b}` : `${a}${b}${a}`;
const solution = (a, b) => (a.length > b.length) ? b + a + b : a + b + a;
// __________________________________________________ Exclamation marks series #1: Remove an exclamation mark from the end of string

/*
Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

Examples
remove("Hi!") == "Hi"
remove("Hi!!!") == "Hi!!"
remove("!Hi") == "!Hi"
remove("!Hi!") == "!Hi"
remove("Hi! Hi!") == "Hi! Hi"
remove("Hi") == "Hi"
*/
const remove = s => s.slice(s.length - 1) === '!' ? s.slice(0, -1) : s ;
function remove(s){
    return s[s.length - 1] == '!' ? s.slice(0, -1) : s;
}
const remove = s => s.replace(/!$/, '');

// __________________________________________________ If you can't sleep, just count sheep!!

/*
If you can't sleep, just count sheep!!

Task:
Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.
*/
const countSheep = num => {
    let result = ''
    for (let i = 1; i <= num; i++) {
        result += `${i} sheep...`
    }
    return result
}
//// __________________________________________________ Reversing Words in a String


/*
You need to write a function that reverses the words in a given string. A word can also fit an empty string. If this is not clear enough, here are some examples:

As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.

Example (Input --> Output)

"Hello World" --> "World Hello"
"Hi There." --> "There. Hi"
Happy coding!
*/
const reverse = string => string.split(' ').reverse().join(' ')
// __________________________________________________ Dollars and Cents

/*
The company you work for has just been awarded a contract to build a payment gateway. In order to help move things along, you have volunteered to create a function that will take a float and return the amount formatting in dollars and cents.

39.99 becomes $39.99

The rest of your team will make sure that the argument is sanitized before being passed to your function although you will need to account for adding trailing zeros if they are missing (though you won't have to worry about a dangling period).

Examples:

3 needs to become $3.00

3.1 needs to become $3.10
Good luck! Your team knows they can count on you!
*/

// __________________________________________________ Dollars and Cents

/*
The company you work for has just been awarded a contract to build a payment gateway. In order to help move things along, you have volunteered to create a function that will take a float and return the amount formatting in dollars and cents.

39.99 becomes $39.99

The rest of your team will make sure that the argument is sanitized before being passed to your function although you will need to account for adding trailing zeros if they are missing (though you won't have to worry about a dangling period).

Examples:

3 needs to become $3.00

3.1 needs to become $3.10
Good luck! Your team knows they can count on you!
*/
const formatMoney = amount => '$' + amount.toFixed(2)
// __________________________________________________ ES6 string addition


/*
It is easy to join two strings together like this string1 + string2.

Another way to get the desired result would be with string1.concat(string2)

ES6 has introduced another way of joining strings. Your task is to find out what this is and write a function that will add two strings together, there must be a space between the two strings.

+ , .concat() & .join() will not be allowed in this exercise. I have also removed some other methods that can be used to cheat!

If one of the arguments is a number your code must coerce it into being a string.
*/
function joinStrings(string1, string2){
  return `${string1} ${string2}`
}
// __________________________________________________ String cleaning

/*
Your boss decided to save money by purchasing some cut-rate optical character recognition software for scanning in the text of old novels to your database. At first it seems to capture words okay, but you quickly notice that it throws in a lot of numbers at random places in the text.

Examples (input -> output)
'! !'                 -> '! !'
'123456789'           -> ''
'This looks5 grea8t!' -> 'This looks great!'
Your harried co-workers are looking to you for a solution to take this garbled text and remove all of the numbers. Your program will take in a string and clean out all numeric characters, and return a string with spacing and special characters ~#$%^&!@*():;"'.,? all intact.
*/
const stringClean = s => s.replace(/\d/g,"")
// __________________________________________________ Alan Partridge II - Apple Turnover

/*
As a treat, I'll let you read part of the script from a classic 'I'm Alan Partridge episode:

Lynn: Alan, there’s that teacher chap.
Alan: Michael, if he hits me, will you hit him first?
Michael: No, he’s a customer. I cannot hit customers. I’ve been told. I’ll go and get some stock.
Alan: Yeah, chicken stock.
Phil: Hello Alan.
Alan: Lynn, hand me an apple pie. And remove yourself from the theatre of conflict.
Lynn: What do you mean?
Alan: Go and stand by the yakults. The temperature inside this apple turnover is 1,000 degrees. If I squeeze it, a jet of molten Bramley apple is going to squirt out. Could go your way, could go mine. Either way, one of us is going down.
Alan is known for referring to the temperature of the apple turnover as Hotter than the sun!. According to space.com the temperature of the sun's corona is 2,000,000 degrees Celsius, but we will ignore the science for now.

Task
Your job is simple, if x squared is more than 1000, return It's hotter than the sun!!, else, return Help yourself to a honeycomb Yorkie for the glovebox.

Note: Input will either be a positive integer (or a string for untyped languages).
*/
const apple = x => x**2 > 1000 ? `It's hotter than the sun!!` : `Help yourself to a honeycomb Yorkie for the glovebox.`;
// __________________________________________________ L1: Bartender, drinks!

/*
Complete the function that receives as input a string, and produces outputs according to the following table:

Input	Output
"Jabroni"	"Patron Tequila"
"School Counselor"	"Anything with Alcohol"
"Programmer"	"Hipster Craft Beer"
"Bike Gang Member"	"Moonshine"
"Politician"	"Your tax dollars"
"Rapper"	"Cristal"
anything else	"Beer"
Note: anything else is the default case: if the input to the function is not any of the values in the table, then the return value should be "Beer".

Make sure you cover the cases where certain words do not show up with correct capitalization. For example, the input "pOLitiCIaN" should still return "Your tax dollars".
*/
function getDrinkByProfession(param){
    switch (param.toLowerCase()) {
        case "jabroni":
            return 	"Patron Tequila";
        case "school counselor":
            return "Anything with Alcohol";
        case "programmer":
            return "Hipster Craft Beer";
        case "bike gang member":
            return "Moonshine";
        case "politician":
            return "Your tax dollars";
        case "rapper":
            return "Cristal";
        default:
            return "Beer"
    }
}
// __________________________________________________Welcome to the City

/*
Create a method sayHello/say_hello/SayHello that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or more values that should be joined together with one space between each, and the length of the name array in test cases will vary.

Example:

sayHello(['John', 'Smith'], 'Phoenix', 'Arizona')
This example will return the string Hello, John Smith! Welcome to Phoenix, Arizona!
*/
function sayHello( name, city, state ) {
    return `Hello, ${name.map(name => name).join(' ')}! Welcome to ${city}, ${state}!`
}
//_____________________ Disemvowel Trolls

/*
Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
*/

function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}
// __________________________________________________ Welcome!

/*
Your start-up's BA has told marketing that your website has a large audience in Scandinavia and surrounding countries. Marketing thinks it would be great to welcome visitors to the site in their own language. Luckily you already use an API that detects the user's location, so this is an easy win.

The Task
Think of a way to store the languages as a database (eg an object). The languages are listed below so you can copy and paste!
Write a 'welcome' function that takes a parameter 'language' (always a string), and returns a greeting - if you have it in your database. It should default to English if the language is not in the database, or in the event of an invalid input.
The Database
english: 'Welcome',
czech: 'Vitejte',
danish: 'Velkomst',
dutch: 'Welkom',
estonian: 'Tere tulemast',
finnish: 'Tervetuloa',
flemish: 'Welgekomen',
french: 'Bienvenue',
german: 'Willkommen',
irish: 'Failte',
italian: 'Benvenuto',
latvian: 'Gaidits',
lithuanian: 'Laukiamas',
polish: 'Witamy',
spanish: 'Bienvenido',
swedish: 'Valkommen',
welsh: 'Croeso'
*/
function greet(language) {
    switch(language) {
        case 'english': return 'Welcome';
        case 'czech': return 'Vitejte';
        case 'danish': return 'Velkomst';
        case 'dutch': return 'Welkom';
        case 'estonian': return 'Tere tulemast';
        case 'finnish': return 'Tervetuloa';
        case 'flemish': return 'Welgekomen';
        case 'french': return 'Bienvenue';
        case 'german': return 'Willkommen';
        case 'irish': return 'Failte';
        case 'italian': return 'Benvenuto';
        case 'latvian': return 'Gaidits';
        case 'lithuanian': return 'Laukiamas';
        case 'polish': return 'Witamy';
        case 'spanish': return 'Bienvenido';
        case 'swedish': return 'Valkommen';
        case 'welsh': return 'Croeso';
        default: return 'Welcome';
    }
}

function greet(lang) {
    return langs[lang]||langs['english'];
}

var langs = {
    'english': 'Welcome',
    'czech': 'Vitejte',
    'danish': 'Velkomst',
    'dutch': 'Welkom',
    'estonian': 'Tere tulemast',
    'finnish': 'Tervetuloa',
    'flemish': 'Welgekomen',
    'french': 'Bienvenue',
    'german': 'Willkommen',
    'irish': 'Failte',
    'italian': 'Benvenuto',
    'latvian': 'Gaidits',
    'lithuanian': 'Laukiamas',
    'polish': 'Witamy',
    'spanish': 'Bienvenido',
    'swedish': 'Valkommen',
    'welsh': 'Croeso'
};
// __________________________________________________ A Strange Trip to the Market

/*

*/
function isLockNessMonster(s) {
  if (s.toLowerCase().includes('tree fiddy')) return true;
  if (s.toLowerCase().includes('3.50')) return true;
  if (s.toLowerCase().includes('three fifty')) return true;
  else return false
}
// __________________________________________________Get number from string

/*
Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56

Function:

getNumberFromString(s)
*/
function getNumberFromString(s) {
  return +s.replace(/[^0-9]/g, '');
}
// __________________________________________________ Name on billboard

/*
You can print your name on a billboard ad. Find out how much it will cost you. Each character has a default price of £30, but that can be different if you are given 2 parameters instead of 1.

You can not use multiplier "*" operator.

If your name would be Jeong-Ho Aristotelis, ad would cost £600. 20 leters * 30 = 600 (Space counts as a character).
*/
function billboard(name, price = 30){
  let result = 0
  for (let i = 0; i < name.length; i++) {
    result += price
  }
  return result
} 
// __________________________________________________ Template Strings

/*
Task
Your task is to return the correct string using the Template String Feature.
Input
Two Strings, no validation is needed.
Output
You must output a string containing the two strings with the word ```' are '```
*/
var TempleStrings = function(obj, feature) {
  return `${obj} are ${feature}`
}
// __________________________________________________ Polish alphabet

/*
There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.

Your task is to change the letters with diacritics:

ą -> a,
ć -> c,
ę -> e,
ł -> l,
ń -> n,
ó -> o,
ś -> s,
ź -> z,
ż -> z
and print out the string without the use of the Polish letters.

For example:

"Jędrzej Błądziński"  -->  "Jedrzej Bladzinski"
*/
function correctPolishLetters(s) {
  return s.replace(/[ąćęłńóśźż]/g, c => "acelnoszz"["ąćęłńóśźż".indexOf(c)])
}

function correctPolishLetters (string) {
  var stringArr = string.split("")
  for (var i = 0; i<stringArr.length; i++){
    switch (stringArr[i]){
        case "ą":
        stringArr[i] = "a";
        break;
        case "ć":
        stringArr[i] = "c";
        break;
        case "ę":
        stringArr[i] = "e";
        break;
        case "ł":
        stringArr[i] = "l";
        break;
        case "ń":
        stringArr[i] = "n";
        break;
        case "ó":
        stringArr[i] = "o";
        break;
        case "ś":
        stringArr[i] = "s";
        break;
        case "ź":
        stringArr[i] = "z";
        break;
        case "ż":
        stringArr[i] = "z";
        break;
        default:
        stringArr[i];
    }
  }
  return stringArr.join("");
}

var mapping = {
  'ą': 'a',
  'ć': 'c',
  'ę': 'e',
  'ł': 'l',
  'ń': 'n',
  'ó': 'o',
  'ś': 's',
  'ź': 'z',
  'ż': 'z',
};

function correctPolishLetters(text) {
  return text.split('').map(c => mapping[c] || c).join('');
}
// __________________________________________________ Simple Comparison?


/*
Write a function that will compare two values, one will be a number and one will be a string. Return true if they are the same character (regardless of their different data types) and return false if they are not.

To make this challange harder and to promp the challenger to read up about coercion I have disabled some of the built in methods including .toString(), .join(), .split(), parseInt and .Number().
*/
const add = (a, b) => +a === +b
// __________________________________________________ Crash Override


/*
Every budding hacker needs an alias! The Phantom Phreak, Acid Burn, Zero Cool and Crash Override are some notable examples from the film Hackers.

Your task is to create a function that, given a proper first and last name, will return the correct alias.

Notes:
Two objects that return a one word name in response to the first letter of the first name and one for the first letter of the surname are already given. See the examples below for further details.

If the first character of either of the names given to the function is not a letter from A - Z, you should return "Your name must start with a letter from A - Z."

Sometimes people might forget to capitalize the first letter of their name so your function should accommodate for these grammatical errors.

Examples
// These two objects are preloaded, you need to use them in your code
var firstName = {A: 'Alpha', B: 'Beta', C: 'Cache' ...}
var surname = {A: 'Analogue', B: 'Bomb', C: 'Catalyst' ...}

aliasGen('Larry', 'Brentwood') === 'Logic Bomb'
aliasGen('123abc', 'Petrovic') === 'Your name must start with a letter from A - Z.'
*/
const firstLetter = str => str[0].toUpperCase()

const isCorrectName = name => /[a-z]/gi.test(name)

const aliasGen = (fName, sName) =>
  isCorrectName(fName[0]) && isCorrectName(sName[0])
    ? `${firstName[firstLetter(fName)]} ${surname[firstLetter(sName)]}`
    : 'Your name must start with a letter from A - Z.'
// __________________________________________________ Safen User Input Part I - htmlspecialchars

/*
Safen User Input Part I - htmlspecialchars
You are a(n) novice/average/experienced/professional/world-famous Web Developer (choose one) who owns a(n) simple/clean/slick/beautiful/complicated/professional/business website (choose one or more) which contains form fields so visitors can send emails or leave a comment on your website with ease. However, with ease comes danger. Every now and then, a hacker visits your website and attempts to compromise it through the use of XSS (Cross Site Scripting). This is done by injecting script tags into the website through form fields which may contain malicious code (e.g. a redirection to a malicious website that steals personal information).

Mission
Your mission is to implement a function that converts the following potentially harmful characters:

< --> &lt;
> --> &gt;
" --> &quot;
& --> &amp;
*/
function htmlspecialchars(formData) {
  return formData.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}
// __________________________________________________ Subtract the Sum

/*
Subtract the sum
NOTE! This kata can be more difficult than regular 8-kyu katas (lets say 7 or 6 kyu)

Complete the function which get an input number n such that n >= 10 and n < 10000, then:

Sum all the digits of n.
Subtract the sum from n, and it is your new n.
If the new n is in the list below return the associated fruit, otherwise return back to task 1.
Example
n = 325
sum = 3+2+5 = 10
n = 325-10 = 315 (not in the list)
sum = 3+1+5 = 9
n = 315-9 = 306 (not in the list)
sum = 3+0+6 = 9
n =306-9 = 297 (not in the list)
.
.
.
...until you find the first n in the list below.

There is no preloaded code to help you. This is not about coding skills; think before you code

1-kiwi
2-pear
3-kiwi
4-banana
5-melon
6-banana
7-melon
8-pineapple
9-apple
10-pineapple
11-cucumber
12-pineapple
13-cucumber
14-orange
15-grape
16-orange
17-grape
18-apple
19-grape
20-cherry
21-pear
22-cherry
23-pear
24-kiwi
25-banana
26-kiwi
27-apple
28-melon
29-banana
30-melon
31-pineapple
32-melon
33-pineapple
34-cucumber
35-orange
36-apple
37-orange
38-grape
39-orange
40-grape
41-cherry
42-pear
43-cherry
44-pear
45-apple
46-pear
47-kiwi
48-banana
49-kiwi
50-banana
51-melon
52-pineapple
53-melon
54-apple
55-cucumber
56-pineapple
57-cucumber
58-orange
59-cucumber
60-orange
61-grape
62-cherry
63-apple
64-cherry
65-pear
66-cherry
67-pear
68-kiwi
69-pear
70-kiwi
71-banana
72-apple
73-banana
74-melon
75-pineapple
76-melon
77-pineapple
78-cucumber
79-pineapple
80-cucumber
81-apple
82-grape
83-orange
84-grape
85-cherry
86-grape
87-cherry
88-pear
89-cherry
90-apple
91-kiwi
92-banana
93-kiwi
94-banana
95-melon
96-banana
97-melon
98-pineapple
99-apple
100-pineapple
*/
function SubtractSum(n){
  return "apple"
}
// __________________________________________________ Count words


/*
Can you implement a function that will return number of words in a string?

You have to ensure that spaces in string is a whitespace for real.

Let's take a look on some examples:

countWords("Hello"); // returns 1 as int
countWords("Hello, World!") // returns 2
countWords("No results for search term `s`") // returns 6
countWords(" Hello") // returns 1
// ... and so on
What kind of tests we made for your code:

Function have to count words and not spaces. You have to be sure that you doing it right
Empty string has no words.
String with spaces around should be trimmed.
Non-whitespace (ex. breakspace, unicode chars) should be treated as a delimiter
Doublecheck that words with chars like -, ', ` are counted right.
*/
const countWords = str => str.split(/\s/).filter(x => x).length
// __________________________________________________ Simple Change Machine


/*
Your task is to create a change machine.

The machine accepts a range of specified coins and notes, it returns change in 20p and 10p coins in the minimum amount of pieces. A 50p for example would return two 20p pieces and one 10p piece. The machine will always try and return change, if you input a 20p for example it will return "10p 10p".

The machine accepts these coins and notes: £5, £2, £1, 50p, 20p. Any coins and notes which are not accepted by the machine will be returned. If you were to put a £20 note into the machine for example, it would be returned to you and not broken into change.

This change machine is programmed to accept and distribute strings rather than numbers. The change will be returned as one string with the change separated by single spaces & no commas. The values of the string will be descending.
*/
function changeMe(moneyIn){
  switch(moneyIn) {
      case '£5': return '20p '.repeat(25).trim()
      case '£2': return '20p '.repeat(10).trim()
      case '£1': return '20p '.repeat(5).trim()
      case '50p': return '20p 20p 10p'
      case '20p': return '10p 10p'
      default: return moneyIn
  }
}
// __________________________________________________ Flatten and sort an array

/*
Challenge:

Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

Example:

Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].

Addendum:

Please, keep in mind, that JavaScript is by default sorting objects alphabetically. For more information, please consult:
*/
const flattenAndSort = array => array.flat().sort((a, b) => a - b)

// __________________________________________________ Sorted? yes? no? how?


/*
Complete the method which accepts an array of integers, and returns one of the following:

"yes, ascending" - if the numbers in the array are sorted in an ascending order
"yes, descending" - if the numbers in the array are sorted in a descending order
"no" - otherwise
You can assume the array will always be valid, and there will always be one correct answer.
*/
const isSortedAndHow = array => JSON.stringify(array) === JSON.stringify([...array].sort((a, b) => a - b)) ? "yes, ascending" : JSON.stringify(array) === JSON.stringify([...array].sort((a, b) => b - a)) ? "yes, descending" : "no";

// __________________________________________________ Two Oldest Ages

/*
The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument and return the two highest numbers within the array. The returned value should be an array in the format [second oldest age,  oldest age].

The order of the numbers passed in could be any order. The array will always include at least 2 items. If there are two or more oldest age, then return both of them in array format.

For example (Input --> Output):

[1, 2, 10, 8] --> [8, 10]
[1, 5, 87, 45, 8, 8] --> [45, 87]
[1, 3, 10, 0]) --> [3, 10]
*/
function twoOldestAges(ages){
  let firstMax = Math.max.apply(null, ages)
  let newArray = ages.filter((num, i) => i !== ages.indexOf(firstMax))
  let secondMax = Math.max.apply(null, newArray)
  return [secondMax, firstMax]
}

function twoOldestAges(ages){
  return ages.sort(function(a,b){return a-b;}).slice(-2);
}
// __________________________________________________ Small enough? - Beginner

/*
You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

You can assume all values in the array are numbers.


*/
const smallEnough = (a, limit) => a.map(num => num <= limit).indexOf(false) === -1
smallEnough = (a, l) => a.every(e => e <= l)
// __________________________________________________ Find the capitals


/*
Instructions
Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

Example
Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );
*/
var capitals = function (word) {
    let result = []
    for(let i = 0; i < word.length; i++){
      if(word[i] === word[i].toUpperCase()){
        result.push(word.indexOf(word[i]))
      }
    }
    return result
};
// __________________________________________________ Check the exam

/*
The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).

If the score < 0, return 0.

checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7
checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) → 0
*/

// __________________________________________________ Check the exam


/*
The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).

If the score < 0, return 0.

For example:

checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7
checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) → 0
*/
function checkExam(array1, array2) {
  let result = 0
    for (let i = 0; i < array1.length; i++) {
          if (array1[i] === array2[i]) {
            result += 4
          } else if (array1[i] !== array2[i] && array2[i] === '') {
            result += 0
          } else if (array1[i] !== array2[i]) {
            result -= 1
          }
    }
    if (result < 0) {
      result = 0
    }
  return result  
}
checkExam = (x, y) => (x = y.reduce((s, e, i) => s + (e === x[i] ? 4 : e === '' ? 0 : -1), 0)) > 0 ? x : 0;
// __________________________________________________ Sum of Minimums!


/*
Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.

For Example:

[ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
, [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
, [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
]
So the function should return 26 because the sum of the minimums is 1 + 5 + 20 = 26.

Note: You will always be given a non-empty list containing positive values.

ENJOY CODING :)
*/
function sumOfMinimums(arr) {
  return arr.map(a => Math.min.apply(null, a)).reduce((a,b) => a + b)
}

const sumOfMinimums = arr => arr.reduce((a, v) => a + Math.min(...v), 0);
// __________________________________________________ Row Weights

/*
Scenario
Several people are standing in a row divided into two teams.
The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

Task
Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.

Notes
Array size is at least 1.
All numbers will be positive.
Input >> Output Examples
rowWeights([13, 27, 49])  ==>  return (62, 27)
Explanation:
The first element 62 is the total weight of team 1, and the second element 27 is the total weight of team 2.

rowWeights([50, 60, 70, 80])  ==>  return (120, 140)
Explanation:
The first element 120 is the total weight of team 1, and the second element 140 is the total weight of team 2.

rowWeights([80])  ==>  return (80, 0)
Explanation:
The first element 80 is the total weight of team 1, and the second element 0 is the total weight of team 2.
*/
function rowWeights(array){
  let odd = array.reduce((acc, value, i) => i % 2 === 0 ? acc += value : acc, 0)
  let even = array.reduce((acc, value, i) => i % 2 !== 0 ? acc += value : acc, 0)
  return [odd, even]
}

rowWeights=arr=>arr.reduce((a,b,i)=>(a[i%2]+=b,a),[0,0])

function rowWeights(array){
  var arr = [0, 0];
  for (var i = 0; i < array.length; i++) {
    i % 2 == 0 ? arr[0] += array[i] : arr[1] += array[i];
  }
  return arr;
}
// __________________________________________________ JavaScript Array Filter


/*
JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.

The solution would work like the following:

getEvenNumbers([2,4,5,6]) // should == [2,4,6]
*/
function getEvenNumbers(numbersArray){
  return numbersArray.filter(n => n % 2 === 0);
}
// __________________________________________________ Even numbers in an array

/*
Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

For example:

([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]
*/
const evenNumbers = (array, number) => array.filter(n => n % 2 === 0).slice(-number)

// __________________________________________________ No oddities here


/*
Write a small function that returns the values of an array that are not odd.

All values in the array will be integers. Return the good values in the order they are given.
*/
const noOdds = values => values.filter(n => n % 2 === 0)

// __________________________________________________ Convert an array of strings to array of numbers


/*
Oh no!
Some really funny web dev gave you a sequence of numbers from his API response as an sequence of strings!

You need to cast the whole array to the correct type.

Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.

ie:["1", "2", "3"] to [1, 2, 3]

Note that you can receive floats as well.
*/
const toNumberArray = stringarray => stringarray.map(n => +n)
const toNumberArray = stringarray => stringarray.map(Number);
// __________________________________________________ Maximum Product

/*
Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

Notes
Array/list size is at least 2.

Array/list numbers could be a mixture of positives, negatives also zeroes .

Input >> Output Examples
adjacentElementsProduct([1, 2, 3]); ==> return 6
Explanation:
The maximum product obtained from multiplying 2 * 3 = 6, and they're adjacent numbers in the array.
adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48]); ==> return 50
Explanation:
Max product obtained from multiplying 5 * 10  =  50 .

adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921])  ==>  return -14
Explanation:
The maximum product obtained from multiplying -2 * 7 = -14, and they're adjacent numbers in the array.
*/
function adjacentElementsProduct(array) {
  let result = [];
  for (let i = 0; i < array.length-1; i++) {
    result.push(array[i] * array[i+1])
  }
  return Math.max(...result)
}
// __________________________________________________ Minimize Sum Of Array (Array Series #1)

/*
Introduction and Warm-up (Highly recommended)
Playing With Lists/Arrays Series
Task
Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .

Notes
Array/list will contain positives only .
Array/list will always have even size
Input >> Output Examples
minSum({5,4,2,3}) ==> return (22) 
Explanation:
The minimum sum obtained from summing each two integers product ,  5*2 + 3*4 = 22
minSum({12,6,10,26,3,24}) ==> return (342)
Explanation:
The minimum sum obtained from summing each two integers product ,  26*3 + 24*6 + 12*10 = 342
minSum({9,2,8,7,5,4,0,6}) ==> return (74)
Explanation:
The minimum sum obtained from summing each two integers product ,  9*0 + 8*2 +7*4 +6*5 = 74

*/
const minSum = arr => arr.sort((a, b) => a - b).reduce((acc, val) => acc + val * arr.pop(), 0)
// __________________________________________________ Divide and Conquer


/*
Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.
*/
const divCon = x =>  x.reduce((a, b) => b === +b ? a + b : a - +b, 0)
// __________________________________________________ Coding Meetup #1 - Higher-Order Functions Series - Count the number of JavaScript developers coming from Europe


/*
You will be given an array of objects (hashes in ruby) representing data about developers who have signed up to attend the coding meetup that you are organising for the first time.

Your task is to return the number of JavaScript developers coming from Europe.

For example, given the following list:

var list1 = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
  { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
  { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
  { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
];
your function should return number 1.

If, there are no JavaScript developers from Europe then your function should return 0.

Notes:

The format of the strings will always be Europe and JavaScript.
All data will always be valid and uniform as in the example above.




This kata is part of the Coding Meetup series which includes a number of short and easy to follow katas which have been designed to allow mastering the use of higher-order functions. In JavaScript this includes methods like: forEach, filter, map, reduce, some, every, find, findIndex. Other approaches to solving the katas are of course possible.

Here is the full list of the katas in the Coding Meetup series:
*/
function countDevelopers(list) {
    const developer = list.filter(p => p.continent === 'Europe' && p.language === 'JavaScript').length
    return developer > 0 ? developer : 0;
}
const countDevelopers = list => list.filter(p => p.continent === 'Europe' && p.language === 'JavaScript').length

// __________________________________________________ Fizz Buzz

/*
Return an array containing the numbers from 1 to N, where N is the parametered value.

Replace certain values however if any of the following conditions are met:

If the value is a multiple of 3: use the value "Fizz" instead
If the value is a multiple of 5: use the value "Buzz" instead
If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
N will never be less than 1.

Method calling example:

fizzbuzz(3) -->  [1, 2, "Fizz"]
*/
function fizzbuzz(n) {
  let result = []
  for (let i = 1; i <= n; i++) {
      if (i <= n && i % 3 !== 0 && i % 5 !== 0) {
        result.push(i)
      } else if (i % 3 === 0 && i % 5 === 0) {
        result.push('FizzBuzz')
      } else if (i % 3 === 0) {
        result.push('Fizz')
      } else if (i % 5 === 0) {
        result.push('Buzz')
      } 
  }
  return result
}
// __________________________________________________ Create Your First CSS Grid

/*
Write a function partlist that gives all the ways to divide a list (an array) of at least two elements into two non-empty parts.

Each two non empty parts will be in a pair (or an array for languages without tuples or a structin C - C: see Examples test Cases - )
Each part will be in a string
Elements of a pair must be in the same order as in the original array.
Examples of returns in different languages:
a = ["az", "toto", "picaro", "zone", "kiwi"] -->
[["az", "toto picaro zone kiwi"], ["az toto", "picaro zone kiwi"], ["az toto picaro", "zone kiwi"], ["az toto picaro zone", "kiwi"]] 
*/
  return arr.map((v, i) => [arr.slice(0, i).join(' '), arr.slice(i).join(' ')]).slice(1)

  function partlist(arr) {
    var newArray;
    var returnArray=[];
    for( var i=1; i<arr.length; i++){
      newArray = [];
      newArray.push(arr.slice(0,i).join(" "));
      newArray.push(arr.slice(i).join(" "));
      returnArray.push(newArray);
    }
    
    return returnArray;
}
// __________________________________________________ Coding Meetup #3 - Higher-Order Functions Series - Is Ruby coming?

/*
You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

Your task is to return:

true if at least one Ruby developer has signed up; or
false if there will be no Ruby developers.
For example, given the following input array:

var list1 = [
  { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', continent: 'Europe', age: 29, language: 'Ruby' },
  { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'Javascript' },
  { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, language: 'JavaScript' }
];
your function should return true.

Notes:

The input array will always be valid and formatted as in the example above.


*/
const isRubyComing = list => list.filter(p => p.language === 'Ruby').length > 0
const isRubyComing = list => list.some(e => e.language === 'Ruby');
// __________________________________________________ Coding Meetup #2 - Higher-Order Functions Series - Greet developers

/*
You will be given an array of objects (associative arrays in PHP, tables in COBOL) representing data about developers who have signed up to attend the next coding meetup that you are organising.

Your task is to return an array where each object will have a new property 'greeting' with the following string value:

Hi < firstName here >, what do you like the most about < language here >?

For example, given the following input array:

var list1 = [
  { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
  { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
];
your function should return the following array:

[
  { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java',
    greeting: 'Hi Sofia, what do you like the most about Java?'
  },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python',
    greeting: 'Hi Lukas, what do you like the most about Python?'
  },
  { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby',
    greeting: 'Hi Madison, what do you like the most about Ruby?'
  } 
];
*/
const greetDevelopers = list => list.map(p => ({...p, greeting: `Hi ${p.firstName}, what do you like the most about ${p.language}?`}))
const greetDevelopers = list => list.map(p => ({...p, greeting: `Hi ${p.firstName}, what do you like the most about ${p.language}?`}))
// __________________________________________________max diff - easy

/*
You must implement a function that returns the difference between the largest and the smallest value in a given list / array (lst) received as the parameter.

lst contains integers, that means it may contain some negative numbers
if lst is empty or contains a single element, return 0
lst is not sorted
[1, 2, 3, 4]   //  returns 3 because 4 -   1  == 3
[1, 2, 3, -4]  //  returns 7 because 3 - (-4) == 7
Have fun!
*/
const maxDiff = list => list.length === 0 || list.length === 1 ? 0 : Math.max(...list) - Math.min(...list);
const maxDiff = list => list.length ? Math.max(...list) - Math.min(...list) : 0;

// __________________________________________________ Sum of Odd Cubed Numbers


/*
Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.
*/
const cubeOdd = arr => arr.some(e => e !== +e) ? undefined : arr.map(n => n ** 3).reduce((acc, n) => n % 2 !== 0 ? acc + n : acc, 0)
// __________________________________________________ Lost number in number sequence


/*
An ordered sequence of numbers from 1 to N is given. One number might have deleted from it, then the remaining numbers were mixed. Find the number that was deleted.

Example:

The starting array sequence is [1,2,3,4,5,6,7,8,9]
The mixed array with one deleted number is [3,2,4,6,7,8,1,9]
Your function should return the int 5.
If no number was deleted from the starting array, your function should return the int 0.

Note: N may be 1 or less (in the latter case, the first array will be []).
*/
function findDeletedNumber(arr, mixArr) {
  if(arr.length === mixArr.length) return 0;
  for (let n of arr) {
    if (mixArr.indexOf(n) === -1)  return n;
  }
}
function findDeletedNumber(arr, mixArr) {
  let arrSum = arr.reduce((a,b) => a + b, 0)
  let mixArrSum = mixArr.reduce((a,b) => a + b, 0)
  return arrSum - mixArrSum
}
const findDeletedNumber = (arr, mixArr) =>
  arr.find(val => !mixArr.includes(val)) || 0;
// __________________________________________________ Nth Smallest Element (Array Series #4)


/*
Introduction and warm-up (highly recommended): Playing With Lists/Arrays Series

Task
Given an array/list of integers, find the Nth smallest element in the array.

Notes
Array/list size is at least 3.
Array/list's numbers could be a mixture of positives , negatives and zeros.
Repetition in array/list's numbers could occur, so don't remove duplications.
Input >> Output Examples
arr=[3,1,2]            n=2    ==> return 2 
arr=[15,20,7,10,4,3]   n=3    ==> return 7 
arr=[2,169,13,-5,0,-1] n=4    ==> return 2 
arr=[2,1,3,3,1,2],     n=3    ==> return 2 
*/
const nthSmallest = (arr, pos) => arr.sort((a,b) => a-b)[pos -1];
// __________________________________________________ Coding Meetup #4 - Higher-Order Functions Series - Find the first Python developer

/*
You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising. The list is ordered according to who signed up first.

Your task is to return one of the following strings:

< firstName here >, < country here > of the first Python developer who has signed up; or
There will be no Python developers if no Python developer has signed up.
For example, given the following input array:

var list1 = [
  { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
  { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
  { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' }
];
your function should return Victoria, Puerto Rico.

Notes:

The input array will always be valid and formatted as in the example above.

*/
function getFirstPython(list) {
  let programmer = list.filter(p => p.language === 'Python')[0]
  if (programmer) {
      return `${programmer.firstName}, ${programmer.country}`
  } else {
      return 'There will be no Python developers'
  }
}
//__________________some
function correctPolishLetters (string) {
  var stringArr = string.split("")
  for (var i = 0; i<stringArr.length; i++){
    switch (stringArr[i]){
        case "ą":
        stringArr[i] = "a";
        break;
        case "ć":
        stringArr[i] = "c";
        break;
        case "ę":
        stringArr[i] = "e";
        break;
        case "ł":
        stringArr[i] = "l";
        break;
        case "ń":
        stringArr[i] = "n";
        break;
        case "ó":
        stringArr[i] = "o";
        break;
        case "ś":
        stringArr[i] = "s";
        break;
        case "ź":
        stringArr[i] = "z";
        break;
        case "ż":
        stringArr[i] = "z";
        break;
        default:
        stringArr[i];
    }
  }
  return stringArr.join("");
}
// __________________________________________________ My Language Skills

/*
Task
You are given a dictionary/hash/object containing some languages and your test results in the given languages. Return the list of languages where your test score is at least 60, in descending order of the scores.

Note: the scores will always be unique (so no duplicate values)

Examples
{"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
{"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
{"C++": 50, "ASM": 10, "Haskell": 20}     -->  []
*/
function myLanguages(results) {
  let result = []
  for (const key in results) {
    if (results[key] >= 60) {
      result.push(key)
      result.sort((a, b) => results[b] - results[a])
    } 
  }
  return result
}

function myLanguages(results) {
  return Object.keys(results).filter(r => results[r] > 59).sort((a,b) => results[b] - results[a]);
}
// __________________________________________________ Sort the Gift Code

/*
Happy Holidays fellow Code Warriors!
Santa's senior gift organizer Elf developed a way to represent up to 26 gifts by assigning a unique alphabetical character to each gift. After each gift was assigned a character, the gift organizer Elf then joined the characters to form the gift ordering code.

Santa asked his organizer to order the characters in alphabetical order, but the Elf fell asleep from consuming too much hot chocolate and candy canes! Can you help him out?

Sort the Gift Code
Write a function called sortGiftCode/sort_gift_code/SortGiftCode that accepts a string containing up to 26 unique alphabetical characters, and returns a string containing the same characters in alphabetical order.

Examples (Input -- => Output):
"abcdef"                      -- => "abcdef"
"pqksuvy"                     -- => "kpqsuvy"
"zyxwvutsrqponmlkjihgfedcba"  -- => "abcdefghijklmnopqrstuvwxyz"
*/
const sortGiftCode = code => code.split('').sort().join('');
const sortGiftCode = code => [...code].sort().join``;
// __________________________________________________ Barista problem


/*
You are a barista at a big cafeteria. Normally there are a lot of baristas, but your boss runs a contest and he told you that, if you could handle all the orders with only one coffee machine in such a way that the sum of all the waiting times of the customers is the smallest possible, he will give you a substantial raise.

So you are the only barista today, and you only have one coffee machine that can brew one coffee at a time.
People start giving you their orders.
Let's not think about the time you need to write down their orders, but you need 2 additional minutes to clean the coffee machine after each coffee you make.

Now you have a list coffees of the orders and you write down next to each of the orders the time you need to brew each one of those cups of coffee.

Task:

Given a list of the times you need to brew each coffee, return the minimum total waiting time.
If you get it right, you will get that raise your boss promised you!

Note that:

It is possible to receive no orders. (It's a free day :), maybe the next day your boss will start giving you some orders himself, you probably don't want that :) )

You can only brew one coffee at a time.

Since you have one coffee machine, you have to wait for it to brew the current coffee before you can move on to the next one.

Ignore the time you need to serve the coffee and the time you need to take the orders and write down the time you need to make each one of them.

If you have three customers with times [4,3,2], the first customer is going to wait 4 minutes for his coffee, the second customer is going to wait 4 minutes (the time needed for the first customer to get his coffee), another 2 minutes (the time needed to clean the machine) and 3 more minutes (the time you need to brew his coffee), so in total 9 minutes. The third customer, by the same logic, is about to wait 9 minutes (for the first two customers) + 2 more minutes(cleaning) + 2 minutes (his coffee brewing time). This order of brewing the coffee will end up in a total waiting time of 26 minutes, but note that this may not be the minimum time needed. This time depends on the order you choose to brew the cups of coffee.

The order in which you brew the coffee is totally up to you.

Examples:

coffees = [3,2,5,10,9]  ->  85
coffees = [20,5]        ->  32
coffees = [4,3,2]       ->  22

*/
function barista(coffees){
  return coffees.sort((a,b) => a - b).reduce((acc, c, i) => acc + c * (coffees.length - i) + 2 * i, 0)
}
// __________________________________________________ Sum even numbers

/*
Complete the function that takes a sequence of numbers as single parameter. Your function must return the sum of the even values of this sequence.

Only numbers without decimals like 4 or 4.0 can be even.

The input is a sequence of numbers: integers and/or floats.

Examples
[4, 3, 1, 2, 5, 10, 6, 7, 9, 8]  -->  30   # because 4 + 2 + 10 + 6 + 8 = 30
[]                               -->  0
*/
const sumEvenNumbers = input => input.reduce((acc, n) => n % 2 === 0 ? acc + n : acc,0)
// __________________________________________________ Odd-Even String Sort

/*
Given a string s. You have to return another string such that even-indexed and odd-indexed characters of s are grouped and groups are space-separated (see sample below)

Note: 
0 is considered to be an even index. 
All input strings are valid with no spaces
input: 'CodeWars'
output 'CdWr oeas'

S[0] = 'C'
S[1] = 'o'
S[2] = 'd'
S[3] = 'e'
S[4] = 'W'
S[5] = 'a'
S[6] = 'r'
S[7] = 's'
Even indices 0, 2, 4, 6, so we have 'CdWr' as the first group
odd ones are 1, 3, 5, 7, so the second group is 'oeas'
And the final string to return is 'Cdwr oeas'

Enjoy.
*/
function sortMyString(S) {
  let even = ''
  let odd = ''
  for (let i = 0; i < S.length; i++) i % 2 === 0 ? even += S[i] : odd += S[i];
  return `${even} ${odd}`
}
// __________________________________________________ Sort Out The Men From Boys


/*
Scenario
Now that the competition gets tough it will Sort out the men from the boys .

Men are the Even numbers and Boys are the odd!alt!alt
Task
Given an array/list [] of n integers , Separate The even numbers from the odds , or Separate the men from the boys!alt!alt
Notes
Return an array/list where Even numbers come first then odds

Since , Men are stronger than Boys , Then Even numbers in ascending order While odds in descending .

Array/list size is at least 4 .

Array/list numbers could be a mixture of positives , negatives .

Have no fear , It is guaranteed that no Zeroes will exists .!alt
Repetition of numbers in the array/list could occur , So (duplications are not included when separating).

Input >> Output Examples:
menFromBoys ({7, 3 , 14 , 17}) ==> return ({14, 17, 7, 3}) 
Explanation:
Since , { 14 } is the even number here , So it came first , then the odds in descending order {17 , 7 , 3} .

menFromBoys ({-94, -99 , -100 , -99 , -96 , -99 }) ==> return ({-100 , -96 , -94 , -99})
Explanation:
Since , { -100, -96 , -94 } is the even numbers here , So it came first in *ascending order *, then the odds in descending order { -99 }

Since , (Duplications are not included when separating) , then you can see only one (-99) was appeared in the final array/list .

menFromBoys ({49 , 818 , -282 , 900 , 928 , 281 , -282 , -1 }) ==> return ({-282 , 818 , 900 , 928 , 281 , 49 , -1})
Explanation:
Since , {-282 , 818 , 900 , 928 } is the even numbers here , So it came first in ascending order , then the odds in descending order { 281 , 49 , -1 }

Since , (Duplications are not included when separating) , then you can see only one (-282) was appeared in the final array/list .


*/
function menFromBoys(arr){
  let even = [];
  let odd = [];
   for(var i = 0; i < arr.length;i++){
   if(arr[i] % 2 == 0){
     if(!even.includes(arr[i]))
     even.push(arr[i])
     } else {
     if(!odd.includes(arr[i]))
     odd.push(arr[i])
     }
   }
 result = (even.sort(function(a,b){return a-b})+","+odd.sort(function(a,b){return b-a}))
 return result.split(",").map(Number)
}
// __________________________________________________ Sort by Last Char


/*
Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

If two words have the same last letter, they returned array should show them in the order they appeared in the given string.
*/
const last = x => x.split(" ").sort((a, b) => a.charCodeAt(a.length-1) - b.charCodeAt(b.length-1));
// __________________________________________________ Double Sort

/*
Simple enough this one - you will be given an array. The values in the array will either be numbers or strings, or a mix of both. You will not get an empty array, nor a sparse one.

Your job is to return a single array that has first the numbers sorted in ascending order, followed by the strings sorted in alphabetic order. The values must maintain their original type
*/
const dbSort = a => [...a.filter(n=>typeof n === "number").sort((a,b)=> a - b), ...a.filter( w => typeof w === "string").sort()];
// __________________________________________________ Array.diff

/*
Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]
*/
const arrayDiff = (a, b) => a.filter(n => !b.includes(n))
// __________________________________________________ Create Phone Number

/*
Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

Example
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
The returned format must be correct in order to complete this challenge.

Don't forget the space after the closing parentheses!
*/
function createPhoneNumber(numbers){
  let one = ''
  let two = ''
  let three = ''
  numbers.map((n,i) => i < 3 ? one += n :  i < 6 ? two += n : three += n)
  return `(${one}) ${two}-${three}`
}
// __________________________________________________ Duplicate Encoder


/*
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
Notes
Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!
*/
function duplicateEncode(word)
{
  return word
    .toLowerCase()
    .split('')
    .map( 
      (a,i,w) => w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
    )
    .join('');
}
// __________________________________________________ Take a Ten Minutes Walk

/*
You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).
*/
function isValidWalk(walk) {
  let northSouth = 0, westEast = 0; 

  for (let direction of walk) { 
    if (direction === 'n') northSouth += 1; 
    if (direction === 's') northSouth -= 1; 
    if (direction === 'w') westEast += 1; 
    if (direction === 'e') westEast -= 1; 
  } 

  return walk.length === 10 && northSouth === 0 && westEast === 0; 
}
// __________________________________________________ Tribonacci Sequence


/*
Well met with Fibonacci bigger brother, AKA Tribonacci.

As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to generate the next. And, worse part of it, regrettably I won't get to hear non-native Italian speakers trying to pronounce it :(

So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature), we have this sequence:

[1, 1 ,1, 3, 5, 9, 17, 31, ...]
But what if we started with [0, 0, 1] as a signature? As starting with [0, 1] instead of [1, 1] basically shifts the common Fibonacci sequence by once place, you may be tempted to think that we would get the same sequence shifted by 2 places, but that is not the case and we would get:

[0, 0, 1, 1, 2, 4, 7, 13, 24, ...]
Well, you may have guessed it by now, but to be clear: you need to create a fibonacci function that given a signature array/list, returns the first n elements - signature included of the so seeded sequence.

Signature will always contain 3 numbers; n will always be a non-negative number; if n == 0, then return an empty array (except in C return NULL) and be ready for anything else which is not clearly specified ;)

If you enjoyed this kata more advanced and generalized version of it can be found in the Xbonacci kata

[Personal thanks to Professor Jim Fowler on Coursera for his awesome classes that I really recommend to any math enthusiast and for showing me this mathematical curiosity too with his usual contagious passion :)]
*/
function tribonacci(signature,n) {
  for (let i = 3; i < n; i++) {
    signature.push((signature[i-1] + signature[i-2] + signature[i-3]));
  }
  return signature.slice(0, n);
}
// __________________________________________________ Find the unique number

/*
There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.

This is the first kata in series:

Find the unique number (this kata)
Find the unique string
Find The Unique
*/
const findUniq = arr => arr.find((item) => arr.indexOf(item) === arr.lastIndexOf(item))
// __________________________________________________ Equal Sides Of An Array

/*
You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

For example:

Let's say you are given the array {1,2,3,4,3,2,1}:
Your function will return the index 3, because at the 3rd position of the array, the sum of left side of the index ({1,2,3}) and the sum of the right side of the index ({3,2,1}) both equal 6.

Let's look at another one.
You are given the array {1,100,50,-51,1,1}:
Your function will return the index 1, because at the 1st position of the array, the sum of left side of the index ({1}) and the sum of the right side of the index ({50,-51,1,1}) both equal 1.

Last one:
You are given the array {20,10,-80,10,10,15,35}
At index 0 the left side is {}
The right side is {10,-80,10,10,15,35}
They both are equal to 0 when added. (Empty arrays are equal to 0 in this problem)
Index 0 is the place where the left side and right side are equal.

Note: Please remember that in most programming/scripting languages the index of an array starts at 0.

Input:
An integer array of length 0 < arr < 1000. The numbers in the array can be any integer positive or negative.

Output:
The lowest index N where the side to the left of N is equal to the side to the right of N. If you do not find an index that fits these rules, then you will return -1.

Note:
If you are given an array with multiple answers, return the lowest correct index.

ALGORITHMSARRAYSFUNDAMENTALS
*/
function findEvenIndex(arr) {
  let left = 0;
  let right = 0;
  const reducer = (acc, curr) => acc + curr;

  if(arr.length === 0){
    return -1;
  }
  
  for(let i = 0; i < arr.length; i++){
    
    if(i == 0){
      
      right = arr.slice(1).reduce(reducer, 0);
      
      if(right === i){
        return i;
      }
      
    } else {
      
      left = arr.slice(0, i).reduce(reducer, 0);
      right = arr.slice(i + 1).reduce(reducer, 0);
      
      if(left === right){
        return i;
      }
    }
  }

  return -1;
}
// __________________________________________________ Spacify

/*
Modify the spacify function so that it returns the given string with spaces inserted between each character.

spacify("hello world") // returns "h e l l o   w o r l d"
*/
const spacify = str => [...str].join(' ');
const spacify_mine = str => str.split('').join(' ');
// __________________________________________________ Help the Fruit Guy

/*
Our fruit guy has a bag of fruit (represented as an array of strings) where some fruits are rotten. He wants to replace all the rotten pieces of fruit with fresh ones. For example, given ["apple","rottenBanana","apple"] the replaced array should be ["apple","banana","apple"]. Your task is to implement a method that accepts an array of strings containing fruits should returns an array of strings where all the rotten fruits are replaced by good ones.

Notes
If the array is null/nil/None or empty you should return empty array ([]).
The rotten fruit name will be in this camelcase (rottenFruit).
The returned array should be in lowercase.
*/
const removeRotten = bagOfFruits => !bagOfFruits ? [] : bagOfFruits.map(f => f.includes("rotten") ? f.replace("rotten", "").toLowerCase() : f)
// __________________________________________________ Tidy Number (Special Numbers Series #9)

/*
Definition
A Tidy number is a number whose digits are in non-decreasing order.

Task
Given a number, Find if it is Tidy or not .

Warm-up (Highly recommended)
Playing With Numbers Series
Notes
Number passed is always Positive .

Return the result as a Boolean

Input >> Output Examples
tidyNumber (12) ==> return (true)
Explanation:
The number's digits { 1 , 2 } are in non-Decreasing Order (i.e) 1 <= 2 .

tidyNumber (32) ==> return (false)
Explanation:
The Number's Digits { 3, 2} are not in non-Decreasing Order (i.e) 3 > 2 .

tidyNumber (1024) ==> return (false)
Explanation:
The Number's Digits {1 , 0, 2, 4} are not in non-Decreasing Order as 0 <= 1 .

tidyNumber (13579) ==> return (true)
Explanation:
The number's digits {1 , 3, 5, 7, 9} are in non-Decreasing Order .

tidyNumber (2335) ==> return (true)
Explanation:
The number's digits {2 , 3, 3, 5} are in non-Decreasing Order , Note 3 <= 3
*/
function tidyNumber(n){
    const digits = n.toString().split('');
    for(let i = 1; i < digits.length; i++) {
        if(digits[i] < digits[i-1]) return false;
    }
    return true;
}
// __________________________________________________ Maximum Triplet Sum (Array Series #7)


/*
Task
Given an array/list [] of n integers , find maximum triplet sum in the array Without duplications .

Notes :
Array/list size is at least 3 .

Array/list numbers could be a mixture of positives , negatives and zeros .

Repetition of numbers in the array/list could occur , So (duplications are not included when summing).

Input >> Output Examples
1- maxTriSum ({3,2,6,8,2,3}) ==> return (17)
Explanation:
As the triplet that maximize the sum {6,8,3} in order , their sum is (17)

Note : duplications are not included when summing , (i.e) the numbers added only once .

2- maxTriSum ({2,1,8,0,6,4,8,6,2,4}) ==> return (18)
Explanation:
As the triplet that maximize the sum {8, 6, 4} in order , their sum is (18) ,

Note : duplications are not included when summing , (i.e) the numbers added only once .

3- maxTriSum ({-7,12,-7,29,-5,0,-7,0,0,29}) ==> return (41)
Explanation:
As the triplet that maximize the sum {12 , 29 , 0} in order , their sum is (41) ,

Note : duplications are not included when summing , (i.e) the numbers added only once .
*/
function maxTriSum(numbers){
  numbers = Array.from(new Set(numbers)); // Remove duplicates
  numbers.sort((a, b) => b - a); // Sort array in descending order
  let sum = 0;
  for (let i = 0; i < 3 && i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}
// __________________________________________________ The Office I - Outed


/*
Your colleagues have been looking over you shoulder. When you should have been doing your boring real job, you've been using the work computers to smash in endless hours of codewars.

In a team meeting, a terrible, awful person declares to the group that you aren't working. You're in trouble. You quickly have to gauge the feeling in the room to decide whether or not you should gather your things and leave.

Given an object (meet) containing team member names as keys, and their happiness rating out of 10 as the value, you need to assess the overall happiness rating of the group. If <= 5, return 'Get Out Now!'. Else return 'Nice Work Champ!'.

Happiness rating will be total score / number of people in the room.

Note that your boss is in the room (boss), their score is worth double it's face value (but they are still just one person!).
*/
function outed(meet, boss){
  let sum = 0;
  let count = 0;
  for (let key in meet)
    if (key!= boss){
      sum += meet[key];
      count++;
    }  
    else {
      sum += meet[key]*2;
      count++;
    }
  return (sum/count <= 5)?'Get Out Now!':'Nice Work Champ!';
}
// __________________________________________________ Simple consecutive pairs


/*
In this Kata your task will be to return the count of pairs that have consecutive numbers as follows:

pairs([1,2,5,8,-4,-3,7,6,5]) = 3
The pairs are selected as follows [(1,2),(5,8),(-4,-3),(7,6),5]
--the first pair is (1,2) and the numbers in the pair are consecutive; Count = 1
--the second pair is (5,8) and are not consecutive
--the third pair is (-4,-3), consecutive. Count = 2
--the fourth pair is (7,6), also consecutive. Count = 3. 
--the last digit has no pair, so we ignore.
More examples in the test cases.

Good luck!
*/
function pairs(ar){
  let result = 0;
  for (let i = 0; i < ar.length - 1; i+=2) {
    if (Math.abs(ar[i] - ar[i+1]) === 1) {
      result++;
    }
  }
  return result;
};
// __________________________________________________ Char Code Calculation


/*
Given a string, turn each character into its ASCII character code and join them together to create a number - let's call this number total1:

'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667
Then replace any incidence of the number 7 with the number 1, and call this number 'total2':

total1 = 656667
              ^
total2 = 656661
              ^
Then return the difference between the sum of the digits in total1 and total2:

  (6 + 5 + 6 + 6 + 6 + 7)
- (6 + 5 + 6 + 6 + 6 + 1)
-------------------------
                       6
*/
function calc(x) {
  const total1 = x
    .split("")
    .map((char) => char.charCodeAt(0))
    .join("");
  const total2 = total1.replace(/7/g, "1");
  const sum1 = total1.split("").reduce((acc, curr) => acc + Number(curr), 0);
  const sum2 = total2.split("").reduce((acc, curr) => acc + Number(curr), 0);
  return sum1 - sum2;
}
// __________________________________________________ Sort the odd


/*
Task
You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
*/
function sortArray(array) {
  const oddArr = array.filter(num => num % 2 !== 0).sort((a, b) => a - b);
  return array.map(num => num % 2 !== 0 ? oddArr.shift() : num);
}
// __________________________________________________ Highest Scoring Word

/*
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

For example, the score of abad is 8 (1 + 2 + 1 + 4).

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.
*/
function high(x){
  const words = x.split(' ');
  let maxScore = 0;
  let maxWord = '';
  
  for (let i = 0; i < words.length; i++) {
    const wordScore = words[i].split('').reduce((acc, curr) => acc + curr.charCodeAt(0) - 96, 0);
    if (wordScore > maxScore) {
      maxScore = wordScore;
      maxWord = words[i];
    }
  }
  
  return maxWord;
}
// __________________________________________________ Which are in?

/*
Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

Example 1:
a1 = ["arp", "live", "strong"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns ["arp", "live", "strong"]

Example 2:
a1 = ["tarp", "mice", "bull"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns []

Notes:
Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.
Beware: In some languages r must be without duplicates.
*/
function inArray(array1,array2){
  return array1
  .filter((word1) => array2.some((word2) => word2.includes(word1)))
  .sort();
}
// __________________________________________________ The Supermarket Queue

/*
There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

input
customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
n: a positive integer, the number of checkout tills.
output
The function should return an integer, the total time required.


*/
function queueTime(customers, n) {
  // Initialize an array of length n with 0s, representing the wait time for each till
  const tillWaitTimes = new Array(n).fill(0);
  
  // Loop through each customer
  for (let i = 0; i < customers.length; i++) {
  // Find the till with the shortest wait time and add the customer's checkout time
    const shortestWaitTimeIndex = tillWaitTimes.indexOf(Math.min(...tillWaitTimes));
    tillWaitTimes[shortestWaitTimeIndex] += customers[i];
  }
  
  // Return the time it took for all customers to check out, which is the longest wait time among all the tills
  return Math.max(...tillWaitTimes);
}
// __________________________________________________ Mexican Wave

/*
Introduction
The wave (known as the Mexican wave in the English-speaking world outside North America) is an example of metachronal rhythm achieved in a packed stadium when successive groups of spectators briefly stand, yell, and raise their arms. Immediately upon stretching to full height, the spectator returns to the usual seated position.

The result is a wave of standing spectators that travels through the crowd, even though individual spectators never move away from their seats. In many large arenas the crowd is seated in a contiguous circuit all the way around the sport field, and so the wave is able to travel continuously around the arena; in discontiguous seating arrangements, the wave can instead reflect back and forth through the crowd. When the gap in seating is narrow, the wave can sometimes pass through it. Usually only one wave crest will be present at any given time in an arena, although simultaneous, counter-rotating waves have been produced. (Source Wikipedia)
Task
In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 
Rules
 1.  The input string will always be lower case but maybe empty.

 2.  If the character in the string is whitespace then pass over it as if it was an empty seat
Example
wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
*/
function wave(str){
  const result = [];
  
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      continue; // skip whitespace
    }
    
    const waveStr = str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1);
    result.push(waveStr);
  }
  
  return result;
}
// __________________________________________________ Two Sum


/*
Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

Based on: http://oj.leetcode.com/problems/two-sum/

twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]
*/

// __________________________________________________ 

/*
Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

Based on: http://oj.leetcode.com/problems/two-sum/

twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]
*/
function twoSum(numbers, target) {
  const map = new Map();
  
  for( let i = 0; i < numbers.length; i++) {
     const complement = target - numbers[i];
    if(map.has(complement)) {
      return [map.get(complement), i];
    }
    
    map.set(numbers[i], i); 
  }
}
// __________________________________________________ Simple Encryption #1 - Alternating Split


/*
Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.

Examples:

encrypt("012345", 1)  =>  "135024"
encrypt("012345", 2)  =>  "135024"  ->  "304152"
encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

encrypt("01234", 1)  =>  "13024"
encrypt("01234", 2)  =>  "13024"  ->  "32104"
encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
Together with the encryption function, you should also implement a decryption function which reverses the process.

If the string S is an empty value or the integer N is not positive, return the first argument without changes.
*/
function encrypt(text, n) {
  if (!text || n <= 0) {
    return text;
  }

  let textArray = text.split('');

  while (n > 0) {
    let evenIndexArray = [];
    let oddIndexArray = [];

    for (let i = 0; i < textArray.length; i++) {
      if (i % 2 === 0) {
        evenIndexArray.push(textArray[i]);
      } else {
        oddIndexArray.push(textArray[i]);
      }
    }

    textArray = oddIndexArray.concat(evenIndexArray);
    n--;
  }

  return textArray.join('');
}

function decrypt(encryptedText, n) {
 if (!encryptedText || n <= 0) {
    return encryptedText;
  }

  while (n > 0) {
    let decryptedTextArray = new Array(encryptedText.length);

    for (let i = 0, j = 0, k = Math.floor((encryptedText.length) / 2); i < encryptedText.length; i += 2, j++, k++) {
      decryptedTextArray[i] = encryptedText[k];

      if (i === encryptedText.length - 1) {
        continue;
      }

      decryptedTextArray[i+1] = encryptedText[j];
    }

    encryptedText = decryptedTextArray.join('');
    n--;
  }

  return encryptedText;
}
// __________________________________________________ Multiplication table


/*
Your task, is to create N×N multiplication table, of size provided in parameter.

For example, when given size is 3:

1 2 3
2 4 6
3 6 9
For the given example, the return value should be:

[[1,2,3],[2,4,6],[3,6,9]]
*/
multiplicationTable = function(size) {
  let table = [];
  for (let i = 1; i <= size; i++) {
    let row = [];
    for (let j = 1; j <= size; j++) {
      row.push(i * j);
    }
    table.push(row);
  }
  return table;
}
// __________________________________________________ Encrypt this!


/*
Acknowledgments:
I thank yvonne-liu for the idea and for the example tests :)

Description:
Encrypt this!

You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

Your message is a string containing space separated words.
You need to encrypt each word in the message using the following rules:
The first letter must be converted to its ASCII code.
The second letter must be switched with the last letter
Keepin' it simple: There are no special characters in the input.
Examples:
encryptThis("Hello") === "72olle"
encryptThis("good") === "103doo"
encryptThis("hello world") === "104olle 119drlo"
*/
var encryptThis = function(text) {
  let words = text.split(' ');

  let encodedWords = words.map(function(word) {
    let firstChar = word.charCodeAt(0);

    if (word.length === 1) {
      return firstChar;
    }

    let secondChar = word.charAt(1);
    let lastChar = word.charAt(word.length - 1);

    if (word.length === 2) {
      return firstChar + lastChar;
    }

    let middle = word.slice(2, -1);
    return firstChar + lastChar + middle + secondChar;
  });

  return encodedWords.join(' ');
}
// __________________________________________________ Data Reverse


/*
A stream of data is received and needs to be reversed.

Each segment is 8 bits long, meaning the order of these segments needs to be reversed, for example:

11111111  00000000  00001111  10101010
 (byte1)   (byte2)   (byte3)   (byte4)
should become:

10101010  00001111  00000000  11111111
 (byte4)   (byte3)   (byte2)   (byte1)
The total number of bits will always be a multiple of 8.

The data is given in an array as such:

[1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]
Note: In the C and NASM languages you are given the third parameter which is the number of segment blocks.

ARRAYSFUNDAMENTALS
Suggest kata description edits
*/

// __________________________________________________The Vowel Code
 

/*
Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

a -> 1
e -> 2
i -> 3
o -> 4
u -> 5
For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

For example, decode("h3 th2r2") would return "hi there".

For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.
*/

function encode(string) {
  const codeMap = {
    'a': '1',
    'e': '2',
    'i': '3',
    'o': '4',
    'u': '5'
  };

  let encodedString = '';

  for (let i = 0; i < string.length; i++) {
    let char = string.charAt(i);

    if (codeMap.hasOwnProperty(char)) {
      encodedString += codeMap[char];
    } else {
      encodedString += char;
    }
  }

  return encodedString;
}

function decode(string) {
  const codeMap = {
    '1': 'a',
    '2': 'e',
    '3': 'i',
    '4': 'o',
    '5': 'u'
  };

  let decodedString = '';

  for (let i = 0; i < string.length; i++) {
    let char = string.charAt(i);

    if (codeMap.hasOwnProperty(char)) {
      decodedString += codeMap[char];
    } else {
      decodedString += char;
    }
  }

  return decodedString;
}
// __________________________________________________ Street Fighter 2 - Character Selection


/*
Short Intro

Some of you might remember spending afternoons playing Street Fighter 2 in some Arcade back in the 90s or emulating it nowadays with the numerous emulators for retro consoles.

Can you solve this kata? Suuure-You-Can!

UPDATE: a new kata's harder version is available here.

The Kata

You'll have to simulate the video game's character selection screen behaviour, more specifically the selection grid. Such screen looks like this:

Screen:

screen

Selection Grid Layout in text:

| Ryu  | E.Honda | Blanka  | Guile   | Balrog | Vega    |
| Ken  | Chun Li | Zangief | Dhalsim | Sagat  | M.Bison |
Input

the list of game characters in a 2x6 grid;
the initial position of the selection cursor (top-left is (0,0));
a list of moves of the selection cursor (which are up, down, left, right);
Output

the list of characters who have been hovered by the selection cursor after all the moves (ordered and with repetition, all the ones after a move, whether successful or not, see tests);
Rules

Selection cursor is circular horizontally but not vertically!

As you might remember from the game, the selection cursor rotates horizontally but not vertically; that means that if I'm in the leftmost and I try to go left again I'll get to the rightmost (examples: from Ryu to Vega, from Ken to M.Bison) and vice versa from rightmost to leftmost.

Instead, if I try to go further up from the upmost or further down from the downmost, I'll just stay where I am located (examples: you can't go lower than lowest row: Ken, Chun Li, Zangief, Dhalsim, Sagat and M.Bison in the above image; you can't go upper than highest row: Ryu, E.Honda, Blanka, Guile, Balrog and Vega in the above image).

Test

For this easy version the fighters grid layout and the initial position will always be the same in all tests, only the list of moves change.

Notice: changing some of the input data might not help you.

Examples

fighters = [
  ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
  ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
]
initial_position = (0,0)
moves = ['up', 'left', 'right', 'left', 'left']
then I should get:

['Ryu', 'Vega', 'Ryu', 'Vega', 'Balrog']
as the characters I've been hovering with the selection cursor during my moves. Notice: Ryu is the first just because it "fails" the first up See test cases for more examples.

fighters = [
  ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
  ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
]
initial_position = (0,0)
moves = ['right', 'down', 'left', 'left', 'left', 'left', 'right']
Result:

['E.Honda', 'Chun Li', 'Ken', 'M.Bison', 'Sagat', 'Dhalsim', 'Sagat']
*/

function streetFighterSelection(fighters, position, moves){
  const numRows = fighters.length;
  const numCols = fighters[0].length;
  let selectedFighters = [];

  const moveFunctions = {
    left: (pos) => {
      pos[1] = pos[1] === 0 ? numCols - 1 : pos[1] - 1;
    },
    right: (pos) => {
      pos[1] = pos[1] === numCols - 1 ? 0 : pos[1] + 1;
    },
    up: (pos) => {
      pos[0] = pos[0] === 0 ? 0 : pos[0] - 1;
    },
    down: (pos) => {
      pos[0] = pos[0] === numRows - 1 ? numRows - 1 : pos[0] + 1;
    }
  };

  // Loop through all moves and determine selected fighters
  for (let move of moves) {
    moveFunctions[move](position); // Update position based on move
    selectedFighters.push(fighters[position[0]][position[1]]); // Add selected fighter to list
  }

  return selectedFighters;
}
// __________________________________________________ Fibonacci, Tribonacci and friends


/*
If you have completed the Tribonacci sequence kata, you would know by now that mister Fibonacci has at least a bigger brother. If not, give it a quick look to get how things work.

Well, time to expand the family a little more: think of a Quadribonacci starting with a signature of 4 elements and each following element is the sum of the 4 previous, a Pentabonacci (well Cinquebonacci would probably sound a bit more italian, but it would also sound really awful) with a signature of 5 elements and each following element is the sum of the 5 previous, and so on.

Well, guess what? You have to build a Xbonacci function that takes a signature of X elements - and remember each next element is the sum of the last X elements - and returns the first n elements of the so seeded sequence.

xbonacci {1,1,1,1} 10 = {1,1,1,1,4,7,13,25,49,94}
xbonacci {0,0,0,0,1} 10 = {0,0,0,0,1,1,2,4,8,16}
xbonacci {1,0,0,0,0,0,1} 10 = {1,0,0,0,0,0,1,2,3,6}
xbonacci {1,1} produces the Fibonacci sequence
*/

function Xbonacci(signature,n){
  let len = signature.length;
  if (n <= len) { // если n <= длины сигнатуры, возвращаем первые n элементов сигнатуры
      return signature.slice(0, n);
  }

  // генерация последовательности Xbonacci
  for (let i = len; i < n; i++) {
      let sum = 0;
      // суммируем последние len элементов последовательности
      for (let j = i - len; j < i; j++) {
          sum += signature[j];
      }
      signature.push(sum);
  }
  return signature;
}
// __________________________________________________ Moving Zeros To The End


/*
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
*/

function moveZeros(arr) {
  let nonZeros = []; // массив для хранения ненулевых элементов
  let zeros = []; // массив для хранения нулей
  
  // перебираем элементы входного массива
  for (let i = 0; i < arr.length; i++) {
    // если текущий элемент не равен 0, добавляем его в массив ненулевых элементов
    if (arr[i] !== 0) {
      nonZeros.push(arr[i]);
    } else { // в противном случае добавляем его в массив нулей
      zeros.push(arr[i]);
    }
  }
  
  // объединяем массив ненулевых элементов и массив нулей, чтобы получить итоговый массив
  return [...nonZeros, ...zeros];
}
// __________________________________________________Pick peaks
 

/*
In this kata, you will write a function that returns the positions and the values of the "peaks" (or local maxima) of a numeric array.

For example, the array arr = [0, 1, 2, 5, 1, 0] has a peak at position 3 with a value of 5 (since arr[3] equals 5).

The output will be returned as an object with two properties: pos and peaks. Both of these properties should be arrays. If there is no peak in the given array, then the output should be {pos: [], peaks: []}.

Example: pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 3]) should return {pos: [3, 7], peaks: [6, 3]} (or equivalent in other languages)

All input arrays will be valid integer arrays (although it could still be empty), so you won't need to validate the input.

The first and last elements of the array will not be considered as peaks (in the context of a mathematical function, we don't know what is after and before and therefore, we don't know if it is a peak or not).

Also, beware of plateaus !!! [1, 2, 2, 2, 1] has a peak while [1, 2, 2, 2, 3] and [1, 2, 2, 2, 2] do not. In case of a plateau-peak, please only return the position and value of the beginning of the plateau. For example: pickPeaks([1, 2, 2, 2, 1]) returns {pos: [1], peaks: [2]} (or equivalent in other languages)
*/

function pickPeaks(arr){
  
  let pos = []; // массив для хранения позиций пиков
  let peaks = []; // массив для хранения значений пиков

  // перебираем элементы входного массива, начиная со второго элемента и заканчивая предпоследним
  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i] > arr[i - 1]) { // если текущий элемент больше предыдущего
      let j = i;
      while (arr[j] === arr[i]) { // если наблюдается плато, ищем наибольший индекс i, соответствующий первому элементу последовательности с таким значением
        j++;
      }
      if (arr[j] < arr[i]) { // если последующий элемент меньше текущего, то текущий элемент является пиком
        pos.push(i);
        peaks.push(arr[i]);
      }
    }
  }

  return {
    pos: pos,
    peaks: peaks
  };
  }
// __________________________________________________ PaginationHelper


/*
For this exercise you will be strengthening your page-fu mastery. You will complete the PaginationHelper class, which is a utility class helpful for querying paging information related to an array.

The class is designed to take in an array of values and an integer indicating how many items will be allowed per each page. The types of values contained within the collection/array are not relevant.

The following are some examples of how this class is used:

var helper = new PaginationHelper(['a','b','c','d','e','f'], 4);
helper.pageCount(); // should == 2
helper.itemCount(); // should == 6
helper.pageItemCount(0); // should == 4
helper.pageItemCount(1); // last page - should == 2
helper.pageItemCount(2); // should == -1 since the page is invalid

// pageIndex takes an item index and returns the page that it belongs on
helper.pageIndex(5); // should == 1 (zero based index)
helper.pageIndex(2); // should == 0
helper.pageIndex(20); // should == -1
helper.pageIndex(-10); // should == -1
*/
constructor(collection, itemsPerPage) {
  this.collection = collection;
  this.itemsPerPage = itemsPerPage;
}
itemCount() {
  return this.collection.length;
}
pageCount() {
  return Math.ceil(this.itemCount() / this.itemsPerPage);
}
pageItemCount(pageIndex) {
  if (pageIndex < 0 || pageIndex >= this.pageCount()) return -1;
  if (pageIndex === this.pageCount() - 1)
    return this.itemCount() % this.itemsPerPage || this.itemsPerPage;
  return this.itemsPerPage;
}
pageIndex(itemIndex) {
  if (itemIndex < 0 || itemIndex >= this.itemCount()) return -1;
  return Math.floor(itemIndex / this.itemsPerPage);
}
//________________________
function encrypt(text, n) {
  if (!text || n <= 0) {
    return text;
  }

  let textArray = text.split('');

  while (n > 0) {
    let evenIndexArray = [];
    let oddIndexArray = [];

    for (let i = 0; i < textArray.length; i++) {
      if (i % 2 === 0) {
        evenIndexArray.push(textArray[i]);
      } else {
        oddIndexArray.push(textArray[i]);
      }
    }

    textArray = oddIndexArray.concat(evenIndexArray);
    n--;
  }

  return textArray.join('');
}

function decrypt(encryptedText, n) {
 if (!encryptedText || n <= 0) {
    return encryptedText;
  }

  while (n > 0) {
    let decryptedTextArray = new Array(encryptedText.length);

    for (let i = 0, j = 0, k = Math.floor((encryptedText.length) / 2); i < encryptedText.length; i += 2, j++, k++) {
      decryptedTextArray[i] = encryptedText[k];

      if (i === encryptedText.length - 1) {
        continue;
      }

      decryptedTextArray[i+1] = encryptedText[j];
    }

    encryptedText = decryptedTextArray.join('');
    n--;
  }

  return encryptedText;
}

// __________________________________________________ Tic-Tac-Toe Checker


/*
If we were to set up a Tic-Tac-Toe game, we would want to know whether the board's current state is solved, wouldn't we? Our goal is to create a function that will check that for us!

Assume that the board comes in the form of a 3x3 array, where the value is 0 if a spot is empty, 1 if it is an "X", or 2 if it is an "O", like so:

[[0, 0, 1],
 [0, 1, 2],
 [2, 1, 0]]
We want our function to return:

-1 if the board is not yet finished AND no one has won yet (there are empty spots),
1 if "X" won,
2 if "O" won,
0 if it's a cat's game (i.e. a draw).
You may assume that the board passed in is valid in the context of a game of Tic-Tac-Toe.
*/
function isSolved(board) {
  // rows
   for (let i = 0; i < 3; i++) {
     if (board[i][0] !== 0 && board[i][0] === board[i][1] && board[i][0] === board[i][2]) {
       return board[i][0];
     }
   }
   
   // columns
   for (let j = 0; j < 3; j++) {
     if (board[0][j] !== 0 && board[0][j] === board[1][j] && board[0][j] === board[2][j]) {
       return board[0][j];
     }
   }
   
   // diagonals
   if (board[0][0] !== 0 && board[0][0] === board[1][1] && board[0][0] === board[2][2]) {
     return board[0][0];
   }
   if (board[0][2] !== 0 && board[0][2] === board[1][1] && board[0][2] === board[2][0]) {
     return board[0][2];
   }
   
   // empty spots
   for (let i = 0; i < 3; i++) {
     for (let j = 0; j < 3; j++) {
       if (board[i][j] === 0) {
         return -1;
       }
     }
   }
   
   // If no empty spots, it's a draw
   return 0;
 }
// __________________________________________________ Vowel Count


/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/
function getCount(str) {
  let vowelCount = 0;
    const vowels = ['a','e','i','o','u'];
    for(let i=0;i<str.length;i++){
        if(vowels.includes(str[i])){
            vowelCount++;
        }
    }
    return vowelCount;
}
// __________________________________________________ Smallest value of an array


/*
Write a function that can return the smallest value of an array or the index of that value. The function's 2nd parameter will tell whether it should return the value or the index.

Assume the first parameter will always be an array filled with at least 1 number and no duplicates. Assume the second parameter will be a string holding one of two values: 'value' and 'index'.

min([1,2,3,4,5], 'value') // => 1
min([1,2,3,4,5], 'index') // => 0
*/
function min(arr, toReturn) {
  const minValue = Math.min(...arr)
  return toReturn === 'value' ? minValue : arr.indexOf(minValue)
}
// __________________________________________________ Array element parity


/*
In this Kata, you will be given an array of integers whose elements have both a negative and a positive value, except for one integer that is either only negative or only positive. Your task will be to find that integer.

Examples:

[1, -1, 2, -2, 3] => 3

3 has no matching negative appearance

[-3, 1, 2, 3, -1, -4, -2] => -4

-4 has no matching positive appearance

[1, -1, 2, -2, 3, 3] => 3

(the only-positive or only-negative integer may appear more than once)
*/
const solve=a=>a.find(e=>!a.includes(-e));

function solve(arr){
  const unique = [...new Set(arr)]; // получаем массив содержащий только уникальные элементы
  let sumOriginal = 0;

  for (let i = 0; i < arr.length; i++) {
    sumOriginal += arr[i];

    if (unique.includes(-arr[i])) {
      unique.splice(unique.indexOf(-arr[i]), 1); // удаляем элемент, если он есть в массиве уникальных элементов
    }
  }

  return unique[0];
};
// __________________________________________________ Array Leaders (Array Series #3)


/*
Introduction and Warm-up (Highly recommended)
Playing With Lists/Arrays Series
Definition
An element is leader if it is greater than The Sum all the elements to its right side.

Task
Given an array/list [] of integers , Find all the LEADERS in the array.

Notes
Array/list size is at least 3 .

Array/list's numbers Will be mixture of positives , negatives and zeros

Repetition of numbers in the array/list could occur.

Returned Array/list should store the leading numbers in the same order in the original array/list .

Input >> Output Examples
arrayLeaders ({1, 2, 3, 4, 0}) ==> return {4}
Explanation:
4 is greater than the sum all the elements to its right side

Note : The last element 0 is equal to right sum of its elements (abstract zero).

arrayLeaders ({16, 17, 4, 3, 5, 2}) ==> return {17, 5, 2}
Explanation:
17 is greater than the sum all the elements to its right side

5 is greater than the sum all the elements to its right side

Note : The last element 2 is greater than the sum of its right elements (abstract zero).

arrayLeaders ({5, 2, -1}) ==> return {5, 2}
Explanation:
5 is greater than the sum all the elements to its right side

2 is greater than the sum all the elements to its right side

Note : The last element -1 is less than the sum of its right elements (abstract zero).

arrayLeaders ({0, -1, -29, 3, 2}) ==> return {0, -1, 3, 2}
Explanation:
0 is greater than the sum all the elements to its right side

-1 is greater than the sum all the elements to its right side

3 is greater than the sum all the elements to its right side

Note : The last element 2 is greater than the sum of its right elements (abstract zero).
*/
function arrayLeaders(numbers){
  let leaders = []; 
  let sum = 0; 
  for (let i = numbers.length - 1; i >= 0; i--) { 
    if (numbers[i] > sum) { 
      leaders.unshift(numbers[i]); 
    }
    sum += numbers[i]; 
  }
  return leaders; 
}
// __________________________________________________ Coding Meetup #5 - Higher-Order Functions Series - Prepare the count of languages

/*
You will be given an array of objects (associative arrays in PHP, table in COBOL) representing data about developers who have signed up to attend the next coding meetup that you are organising.

Your task is to return an object (associative array in PHP, table in COBOL) which includes the count of each coding language represented at the meetup.

For example, given the following input array:

var list1 = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
  { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
  { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
  { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
];
your function should return the following object (associative array in PHP, table in COBOL):

{ C: 2, JavaScript: 1, Ruby: 1 }
*/

function countLanguages(list) {
  let languages = {}; 
  for (let i = 0; i < list.length; i++) {
    if (list[i].language in languages) { 
      languages[list[i].language]++;
    } else { 
      languages[list[i].language] = 1;
    }
  }
  return languages; 
}

// __________________________________________________Numbers to Letters


/*
Given an array of numbers (in string format), you must return a string. The numbers correspond to the letters of the alphabet in reverse order: a=26, z=1 etc. You should also account for '!', '?' and ' ' that are represented by '27', '28' and '29' respectively.

All inputs will be valid.
*/
function switcher(x){
  const alphabet = "zyxwvutsrqponmlkjihgfedcba!? "; 
  let result = ""; 
  for (let i = 0; i < x.length; i++) {
    let number = +x[i]
    result += alphabet[number - 1]; 
  }
  return result;
}

const alpha = ' zyxwvutsrqponmlkjihgfedcba!? '
const switcher = x => x.map(item => alpha[item]).join('')
// __________________________________________________Last Survivor


/*
You are given a string of letters and an array of numbers.
The numbers indicate positions of letters that must be removed, in order, starting from the beginning of the array.
After each removal the size of the string decreases (there is no empty space).
Return the only letter left.

Example:

let str = "zbk", arr = [0, 1]
    str = "bk", arr = [1]
    str = "b", arr = []
    return 'b'
Notes
The given string will never be empty.
The length of the array is always one less than the length of the string.
All numbers are valid.
There can be duplicate letters and numbers.
If you like this kata, check out the next one: Last Survivors Ep.2
*/
function lastSurvivor(letters, coords) {
  let arrLetters = letters.split("");
  
  for (let i = 0; i < coords.length; i++) {
    arrLetters.splice(coords[i], 1);
  }
  
  return arrLetters[0];
}
// __________________________________________________Coding Meetup #6 - Higher-Order Functions Series - Can they code in the same language?


/*
You will be given an array of objects (associative arrays in PHP, tables in COBOL) representing data about developers who have signed up to attend the next coding meetup that you are organising.

Your task is to return either:

true if all developers in the list code in the same language; or
false otherwise.
For example, given the following input array:

var list1 = [
  { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'JavaScript' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'JavaScript' },
  { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 65, language: 'JavaScript' },
];
your function should return true.

Notes:

The strings representing a given language will always be formatted in the same way (e.g. 'JavaScript' will always be formatted will upper-case 'J' and 'S'
The input array will always be valid and formatted as in the example above.
*/
const isSameLanguage = list => list.every(item => item.language === list[0].language)
// __________________________________________________ The Office IV - Find a Meeting Room


/*
Your job at E-Corp is both boring and difficult. It isn't made any easier by the fact that everyone constantly wants to have a meeting with you, and that the meeting rooms are always taken!

In this kata, you will be given an array. Each value represents a meeting room. Your job? Find the first empty one and return its index (N.B. There may be more than one empty room in some test cases).

'X' --> busy
'O' --> empty
If all rooms are busy, return "None available!"
*/
function meeting(x){
  let result = x.findIndex(room => room === 'O')
  return result === -1 ? "None available!" : result
}
// __________________________________________________Clean up after your dog


/*
You have stumbled across the divine pleasure that is owning a dog and a garden. Now time to pick up all the cr@p! :D

Given a 2D array to represent your garden, you must find and collect all of the dog cr@p - represented by '@'.

You will also be given the number of bags you have access to (bags), and the capactity of a bag (cap). If there are no bags then you can't pick anything up, so you can ignore cap.

You need to find out if you have enough capacity to collect all the cr@p and make your garden clean again.

If you do, return 'Clean', else return 'Cr@p'.

Watch out though - if your dog is out there ('D'), he gets very touchy about being watched. If he is there you need to return 'Dog!!'.

For example:

x=
[[_,_,_,_,_,_]
[_,_,_,_,@,_]
[@,_,_,_,_,_]]

bags = 2, cap = 2

return --> 'Clean'
*/
function crap(x, bags, cap){
  let crapCount = 0;
  for (let i = 0; i < x.length; i++) {
    for (let j = 0; j < x[i].length; j++) {
      const current = x[i][j];
      if (current === 'D') {
        return 'Dog!!';
      } else if (current === '@') {
        crapCount++;
      }
    }
  }
  
  if (crapCount === 0) {
    return 'Clean';
  } else if (bags * cap >= crapCount) {
    return 'Clean';
  } else {
    return 'Cr@p';
  }
}
// __________________________________________________Head, Tail, Init and Last

/*
Haskell has some useful functions for dealing with lists:

$ ghci
GHCi, version 7.6.3: http://www.haskell.org/ghc/  :? for help
λ head [1,2,3,4,5]
1
λ tail [1,2,3,4,5]
[2,3,4,5]
λ init [1,2,3,4,5]
[1,2,3,4]
λ last [1,2,3,4,5]
5
Your job is to implement these functions in your given language. Make sure it doesn't edit the array; that would cause problems! Here's a cheat sheet:

| HEAD | <----------- TAIL ------------> |
[  1,  2,  3,  4,  5,  6,  7,  8,  9,  10]
| <----------- INIT ------------> | LAST |

head [x] = x
tail [x] = []
init [x] = []
last [x] = x
Here's how I expect the functions to be called in your language:

head([1,2,3,4,5]); => 1
tail([1,2,3,4,5]); => [2,3,4,5]
Most tests consist of 100 randomly generated arrays, each with four tests, one for each operation. There are 400 tests overall. No empty arrays will be given. Haskell has QuickCheck tests
*/
const head = input => input[0];
const tail = input => input.slice(1);
const init = input => input.slice(0, input.length-1)
const last = input => input[input.length-1]
// __________________________________________________+1 Array


/*
Given an array of integers of any length, return an array that has 1 added to the value represented by the array.

the array can't be empty
only non-negative, single digit integers are allowed
Return nil (or your language's equivalent) for invalid inputs.

Examples
Valid arrays

[4, 3, 2, 5] would return [4, 3, 2, 6]
[1, 2, 3, 9] would return [1, 2, 4, 0]
[9, 9, 9, 9] would return [1, 0, 0, 0, 0]
[0, 1, 3, 7] would return [0, 1, 3, 8]

Invalid arrays

[1, -9] is invalid because -9 is not a non-negative integer

[1, 2, 33] is invalid because 33 is not a single-digit integer
*/
function upArray(arr){

  if (arr.length === 0 || arr.some(num => num < 0 || num > 9)) {
    return null; 
  }
  
  arr[arr.length - 1]++;
  
  for (let i = arr.length - 1; i > 0; i--) {
    if (arr[i] > 9) {
      arr[i] = 0;
      arr[i - 1]++;
    } else {
      break; 
    }
  }
  
  if (arr[0] > 9) {
    arr[0] = 0;
    arr.unshift(1);
  }
  
  return arr;
}
// __________________________________________________Highest Rank Number in an Array

/*
Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

Note: no empty arrays will be given.

Examples
[12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
[12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
[12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3
*/

// __________________________________________________Highest Rank Number in an Array


/*
Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

Note: no empty arrays will be given.

Examples
[12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
[12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
[12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3
*/
function highestRank(arr){
  const freqMap = {};
    arr.forEach(num => {
      freqMap[num] = (freqMap[num] || 0) + 1;
    });

    let maxFreq = 0;
    let highestNum = 0;
    for (const [num, freq] of Object.entries(freqMap)) {
      if (freq > maxFreq || (freq === maxFreq && num > highestNum)) {
        maxFreq = freq;
        highestNum = num;
      }
    }

    return parseInt(highestNum); 
}
// __________________________________________________Reverse every other word in the string

/*
Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata.
*/
const words = str.trim().split(/\s+/);
  
// Loop through the words and reverse every other word
for (let i = 1; i < words.length; i += 2) {
  words[i] = words[i].split('').reverse().join('');
}

// Join the words into a string with exactly one space between each word
return words.join(' ');
// __________________________________________________ Array Helpers


/*
This kata is designed to test your ability to extend the functionality of built-in classes. In this case, we want you to extend the built-in Array class with the following methods: square(), cube(), average(), sum(), even() and odd().

Explanation:

square() must return a copy of the array, containing all values squared
cube() must return a copy of the array, containing all values cubed
average() must return the average of all array values; on an empty array must return NaN (note: the empty array is not tested in Ruby!)
sum() must return the sum of all array values
even() must return an array of all even numbers
odd() must return an array of all odd numbers
Note: the original array must not be changed in any case!

Example
var numbers = [1, 2, 3, 4, 5];

numbers.square();  // must return [1, 4, 9, 16, 25]
numbers.cube();    // must return [1, 8, 27, 64, 125]
numbers.average(); // must return 3
numbers.sum();     // must return 15
numbers.even();    // must return [2, 4]
numbers.odd();     // must return [1, 3, 5]
*/
Array.prototype.square = function() {
  return this.map(num => num ** 2);
}

Array.prototype.cube = function() {
  return this.map(num => num ** 3);
}

Array.prototype.average = function() {
  if (this.length === 0) {
    return NaN;
  }
  const sum = this.reduce((acc, cur) => acc + cur);
  return sum / this.length;
}

Array.prototype.sum = function() {
  return this.reduce((acc, cur) => acc + cur);
}

Array.prototype.even = function() {
  return this.filter(num => num % 2 === 0);
}

Array.prototype.odd = function() {
  return this.filter(num => num % 2 !== 0);
}
// __________________________________________________Josephus Survivor


/*
In this kata you have to correctly return who is the "survivor", ie: the last element of a Josephus permutation.

Basically you have to assume that n people are put into a circle and that they are eliminated in steps of k elements, like this:

n=7, k=3 => means 7 people in a circle
one every 3 is eliminated until one remains
[1,2,3,4,5,6,7] - initial sequence
[1,2,4,5,6,7] => 3 is counted out
[1,2,4,5,7] => 6 is counted out
[1,4,5,7] => 2 is counted out
[1,4,5] => 7 is counted out
[1,4] => 5 is counted out
[4] => 1 counted out, 4 is the last element - the survivor!
The above link about the "base" kata description will give you a more thorough insight about the origin of this kind of permutation, but basically that's all that there is to know to solve this kata.

Notes and tips: using the solution to the other kata to check your function may be helpful, but as much larger numbers will be used, using an array/list to compute the number of the survivor may be too slow; you may assume that both n and k will always be >=1.
*/
function josephusSurvivor(n, k) {
  let arr = Array.from({length: n}, (_, i) => i + 1);
  let idx = 0;
  while (arr.length > 1) {
    idx = (idx + k - 1) % arr.length;
    arr.splice(idx, 1);
  }
  return arr[0];
}
// __________________________________________________Mean Square Error


/*
Complete the function that

accepts two integer arrays of equal length
compares the value each member in one array to the corresponding member in the other
squares the absolute value difference between those two values
and returns the average of those squared absolute value difference between each member pair.
Examples
[1, 2, 3], [4, 5, 6]              -->   9   because (9 + 9 + 9) / 3
[10, 20, 10, 2], [10, 25, 5, -2]  -->  16.5 because (0 + 25 + 25 + 16) / 4
[-1, 0], [0, -1]                  -->   1   because (1 + 1) / 2
*/
var solution = function(firstArray, secondArray) {
  var sum = 0;
  for (var i = 0; i < firstArray.length; i++){
    var diff = Math.abs(firstArray[i] - secondArray[i]);
    sum += diff * diff;
  }
  return sum / firstArray.length;
}
// __________________________________________________Pascal's Triangle

/*
In mathematics, Pascal's triangle is a triangular array of the binomial coefficients expressed with formula

(
�
�
)
=
�
!
�
!
(
�
−
�
)
!
( 
k
n
​
 )= 
k!(n−k)!
n!
​
 
where n denotes a row of the triangle, and k is a position of a term in the row.

Pascal's Triangle

You can read Wikipedia article on Pascal's Triangle for more information.

Task
Write a function that, given a depth n, returns n top rows of Pascal's Triangle flattened into a one-dimensional list/array.

Example:
n = 1: [1]
n = 2: [1,  1, 1]
n = 4: [1,  1, 1,  1, 2, 1,  1, 3, 3, 1]
*/

// __________________________________________________Coding Meetup #11 - Higher-Order Functions Series - Find the average age


/*
You will be given a sequence of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

Given the following input array:

var list1 = [
  { firstName: 'Maria', lastName: 'Y.', country: 'Cyprus', continent: 'Europe', age: 30, language: 'Java' },
  { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 70, language: 'Python' },
];
write a function that returns the average age of developers (rounded to the nearest integer). In the example above your function should return 50 (number).

Notes:

The input array will always be valid and formatted as in the example above.
Age is represented by a number which can be any positive integer.

*/

const getAverageAge = list => Math.round(list.reduce((acc, number) => acc + number.age, 0) / list.length)

//_______________________________________________________________Maximum Gap (Array Series #4)


/*
Task
Given an array/list [] of integers , Find The maximum difference between the successive elements in its sorted form.

Notes
Array/list size is at least 3 .

Array/list's numbers Will be mixture of positives and negatives also zeros_

Repetition of numbers in the array/list could occur.

The Maximum Gap is computed Regardless the sign.

Input >> Output Examples
maxGap ({13,10,5,2,9}) ==> return (4)
Explanation:
The Maximum Gap after sorting the array is 4 , The difference between 9 - 5 = 4 .
maxGap ({-3,-27,-4,-2}) ==> return (23)
Explanation:
The Maximum Gap after sorting the array is 23 , The difference between  |-4- (-27) | = 23 .

Note : Regardless the sign of negativity .

maxGap ({-7,-42,-809,-14,-12}) ==> return (767)  
Explanation:
The Maximum Gap after sorting the array is 767 , The difference between  | -809- (-42) | = 767 .

Note : Regardless the sign of negativity .

maxGap ({-54,37,0,64,640,0,-15}) //return (576)
Explanation:
The Maximum Gap after sorting the array is 576 , The difference between  | 64 - 640 | = 576 .

Note : Regardless the sign of negativity .


*/

function maxGap (numbers){
  numbers.sort((a, b) => a - b);
  
  let maxDiff = 0;

  for (let i = 1; i < numbers.length; i++) {
    
    let diff = Math.abs(numbers[i] - numbers[i - 1]);

    if (diff > maxDiff) {
      maxDiff = diff;
    }
  }

  return maxDiff;
}
//_______________________________________________________________Largest Elements


/*
Write a program that outputs the top n elements from a list.

Example:

largest(2, [7,6,5,4,3,2,1])
// => [6,7]
*/

const largest =(n, array) =>array.sort((a, b) => b - a).slice(0, n).sort((a, b) => a - b)
//_______________________________________________________________Holiday III - Fire on the boat

/*
Enjoying your holiday, you head out on a scuba diving trip!

Disaster!! The boat has caught fire!!

You will be provided a string that lists many boat related items. If any of these items are "Fire" you must spring into action. Change any instance of "Fire" into "~~". Then return the string.

Go to work!
*/
const fireFight = s => s.replace(/Fire/g, '~~')

//_______________________________________________________________Decipher this!


/*
You are given a secret message you need to decipher. Here are the things you need to know to decipher it:

For each word:

the second and the last letter is switched (e.g. Hello becomes Holle)
the first letter is replaced by its character code (e.g. H becomes 72)
Note: there are no special characters used, only letters and spaces

Examples

decipherThis('72olle 103doo 100ya'); // 'Hello good day'
decipherThis('82yade 115te 103o'); // 'Ready set go'
*/

function decipherThis(str) {
  let words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
      let word = words[i];
      let charCode = parseInt(word);
      word = String.fromCharCode(charCode) + word.slice(String(charCode).length);
      if (word.length > 2) {
          word = word[0] + word[word.length - 1] + word.slice(2, word.length - 1) + word[1];
      }
      words[i] = word;
  }
  return words.join(" ");
}; 
//_______________________________________________________________Matrix Addition


/*
Write a function that accepts two square matrices (N x N two dimensional arrays), and return the sum of the two. Both matrices being passed into the function will be of size N x N (square), containing only integers.

How to sum two matrices:

Take each cell [n][m] from the first matrix, and add it with the same [n][m] cell from the second matrix. This will be cell [n][m] of the solution matrix. (Except for C where solution matrix will be a 1d pseudo-multidimensional array).

Visualization:

|1 2 3|     |2 2 1|     |1+2 2+2 3+1|     |3 4 4|
|3 2 1|  +  |3 2 3|  =  |3+3 2+2 1+3|  =  |6 4 4|
|1 1 1|     |1 1 3|     |1+1 1+1 1+3|     |2 2 4|
Example
matrixAddition(
  [ [1, 2, 3],
    [3, 2, 1],
    [1, 1, 1] ],
//      +
  [ [2, 2, 1],
    [3, 2, 3],
    [1, 1, 3] ] )

// returns:
  [ [3, 4, 4],
    [6, 4, 4],
    [2, 2, 4] ]
*/
function matrixAddition(a, b){
  let result = [];

  for (let i = 0; i < a.length; i++) {
    result.push([])
    for (let j = 0; j < a[i].length; j++) {
        result[i].push(a[i][j] + b[i][j])
    }
  }
  return result;
}

//_______________________________________________________________Maze Runner


/*
Introduction
Welcome Adventurer. Your aim is to navigate the maze and reach the finish point without touching any walls. Doing so will kill you instantly!
Task
You will be given a 2D array of the maze and an array of directions. Your task is to follow the directions given. If you reach the end point before all your moves have gone, you should return Finish. If you hit any walls or go outside the maze border, you should return Dead. If you find yourself still in the maze after using all the moves, you should return Lost.
The Maze array will look like

maze = [[1,1,1,1,1,1,1],
        [1,0,0,0,0,0,3],
        [1,0,1,0,1,0,1],
        [0,0,1,0,0,0,1],
        [1,0,1,0,1,0,1],
        [1,0,0,0,0,0,1],
        [1,2,1,0,1,0,1]]
..with the following key

      0 = Safe place to walk
      1 = Wall
      2 = Start Point
      3 = Finish Point
  direction = ["N","N","N","N","N","E","E","E","E","E"] == "Finish"
Rules
1. The Maze array will always be square i.e. N x N but its size and content will alter from test to test.

2. The start and finish positions will change for the final tests.

3. The directions array will always be in upper case and will be in the format of N = North, E = East, W = West and S = South.

4. If you reach the end point before all your moves have gone, you should return Finish.

5. If you hit any walls or go outside the maze border, you should return Dead.

6. If you find yourself still in the maze after using all the moves, you should return Lost.
*/

function mazeRunner(maze, directions) {

  let startRow, startCol;
  for (let i = 0; i < maze.length; i++) {
    for (let j = 0; j < maze[i].length; j++) {
      if (maze[i][j] === 2) {
        startRow = i;
        startCol = j;
        break;
      }
    }
  }
  
  let currentRow = startRow;
  let currentCol = startCol;
  
  for (let i = 0; i < directions.length; i++) {
    const direction = directions[i];
    
    if (direction === "N") {
      currentRow--;
    } else if (direction === "E") {
      currentCol++;
    } else if (direction === "S") {
      currentRow++;
    } else if (direction === "W") {
      currentCol--;
    }
    
    if (currentRow < 0 || currentRow >= maze.length || currentCol < 0 || currentCol >= maze[currentRow].length) {
      return "Dead";
    }
    
    if (maze[currentRow][currentCol] === 1) {
      return "Dead";
    }
    
    if (maze[currentRow][currentCol] === 3) {
      return "Finish";
    }
  }
  
  if (maze[currentRow][currentCol] !== 3) {
    return "Lost";
  }
}
//_______________________________________________________________Pair of gloves


/*
Pair of gloves
Winter is coming, you must prepare your ski holidays. The objective of this kata is to determine the number of pair of gloves you can constitute from the gloves you have in your drawer.

Given an array describing the color of each glove, return the number of pairs you can constitute, assuming that only gloves of the same color can form pairs.

Examples:
input = ["red", "green", "red", "blue", "blue"]
result = 2 (1 red pair + 1 blue pair)

input = ["red", "red", "red", "red", "red", "red"]
result = 3 (3 red pairs)
*/

function numberOfPairs(gloves) {
  let pairs = 0;
  const colorCount = {};

  for (let i = 0; i < gloves.length; i++) {
    const color = gloves[i];
    colorCount[color] = (colorCount[color] || 0) + 1;
  }

  for (const color in colorCount) {
    const count = colorCount[color];
    pairs += Math.floor(count / 2);
  }

  return pairs;
}

//_______________________________________________________________Minimum Steps (Array Series #6)


/*
Task
Given an array of N integers, you have to find how many times you have to add up the smallest numbers in the array until their Sum becomes greater or equal to K.

Notes:
List size is at least 3.

All numbers will be positive.

Numbers could occur more than once , (Duplications may exist).

Threshold K will always be reachable.

Input >> Output Examples
minimumSteps({1, 10, 12, 9, 2, 3}, 6)  ==>  return (2)
Explanation:
We add two smallest elements (1 + 2), their sum is 3 .

Then we add the next smallest number to it (3 + 3) , so the sum becomes 6 .

Now the result is greater or equal to 6 , Hence the output is (2) i.e (2) operations are required to do this .

minimumSteps({8 , 9, 4, 2}, 23)  ==> return (3)
Explanation:
We add two smallest elements (4 + 2), their sum is 6 .

Then we add the next smallest number to it (6 + 8) , so the sum becomes 14 .

Now we add the next smallest number (14 + 9) , so the sum becomes 23 .

Now the result is greater or equal to 23 , Hence the output is (3) i.e (3) operations are required to do this .

minimumSteps({19,98,69,28,75,45,17,98,67}, 464)  ==>  return (8)
Explanation:
We add two smallest elements (19 + 17), their sum is 36 .

Then we add the next smallest number to it (36 + 28) , so the sum becomes 64 .

We need to keep doing this until the sum becomes greater or equal to K (464 in this case), which will require 8 Steps .
*/
function minimumSteps(numbers, value){
  numbers.sort((a, b) => a - b);
  let sum = 0;
  let steps = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
    steps++;

    if (sum >= value) {
      return steps - 1;
    }
  }

  return -1;
}
//_______________________________________________________________Between Extremes


/*
Given an array of numbers, return the difference between the largest and smallest values.

For example:

[23, 3, 19, 21, 16] should return 20 (i.e., 23 - 3).

[1, 434, 555, 34, 112] should return 554 (i.e., 555 - 1).

The array will contain a minimum of two elements. Input data range guarantees that max-min will cause no integer overflow.
*/
function betweenExtremes(numbers) {
  return Math.max(...numbers) - Math.min(...numbers);
}

const betweenExtremes = (numbers) =>  Math.max.apply(null,numbers) - Math.min.apply(null,numbers)
//_______________________________________________________________Insert dashes


/*
Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3.

Note that the number will always be non-negative (>= 0).
*/
function insertDash(num) {
  let stringOfNums = `${num}`
  let result = ''
  for (let i = 0; i < stringOfNums.length; i++) {
    result += stringOfNums[i]
    if (stringOfNums[i] % 2 !== 0 && stringOfNums[i+1] % 2 !== 0 && i !== stringOfNums.length - 1) {
      result += '-'
    }
  }
  return result
}

function insertDash(num) {
  return num.toString().replace(/[13579](?=[13579])/g, "$&-");
}
//_______________________________________________________________Bingo ( Or Not )


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
//_______________________________________________________________String array duplicate

/*
In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

For example:

dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].

dup(["kelless","keenness"]) = ["keles","kenes"].

Strings will be lowercase only, no spaces. See test cases for more examples.

Good luck!
*/
function dup(s) {
  return s.map((str) => {
    let result = "";
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== str[i + 1]) {
        result += str[i];
      }
    }
    return result;
  });
};
//_______________________________________________________________Sum consecutives


/*
You are given a list/array which contains only integers (positive and negative). Your job is to sum only the numbers that are the same and consecutive. The result should be one list.

Extra credit if you solve it in one line. You can assume there is never an empty list/array and there will always be an integer.

Same meaning: 1 == 1

1 != -1

#Examples:

[1,4,4,4,0,4,3,3,1] # should return [1,12,0,4,6,1]

"""So as you can see sum of consecutives 1 is 1 
sum of 3 consecutives 4 is 12 
sum of 0... and sum of 2 
consecutives 3 is 6 ..."""

[1,1,7,7,3] # should return [2,14,3]
[-5,-5,7,7,12,0] # should return [-10,14,12,0]
*/
let input = [1,4,4,4,0,4,3,3]

function some(input){
  let result = []
  for (let i = 0; i < input.length; i++) {
    if (input[i] === input[i-1]) {
      result[result.length - 1] += input[i]
    } else {
      result.push(input[i])
    }
  }
  return result
}

console.log(some(input));


//_______________________________________________________________English beggars


/*
Born a misinterpretation of this kata, your task here is pretty simple: given an array of values and an amount of beggars, you are supposed to return an array with the sum of what each beggar brings home, assuming they all take regular turns, from the first to the last.

For example: [1,2,3,4,5] for 2 beggars will return a result of [9,6], as the first one takes [1,3,5], the second collects [2,4].

The same array with 3 beggars would have in turn have produced a better out come for the second beggar: [5,7,3], as they will respectively take [1,4], [2,5] and [3].

Also note that not all beggars have to take the same amount of "offers", meaning that the length of the array is not necessarily a multiple of n; length can be even shorter, in which case the last beggars will of course take nothing (0).

Note: in case you don't get why this kata is about English beggars, then you are not familiar on how religiously queues are taken in the kingdom ;)
*/
function beggars(values, n){
  let result = Array(n).fill(0); 

  for (let i = 0; i < values.length; i++) {
    let index = i % n; 
    result[index] += values[i]; 
  }

  return result;
}
//_______________________________________________________________Lottery Ticket

/*
Time to win the lottery!

Given a lottery ticket (ticket), represented by an array of 2-value arrays, you must find out if you've won the jackpot.

Example ticket:

[ [ 'ABC', 65 ], [ 'HGR', 74 ], [ 'BYHT', 74 ] ]
To do this, you must first count the 'mini-wins' on your ticket. Each subarray has both a string and a number within it. If the character code of any of the characters in the string matches the number, you get a mini win. Note you can only have one mini win per sub array.

Once you have counted all of your mini wins, compare that number to the other input provided (win). If your total is more than or equal to (win), return 'Winner!'. Else return 'Loser!'.

All inputs will be in the correct format. Strings on tickets are not always the same length.
*/
function bingo(ticket, win) {

  let miniWins = 0;
  for (let i = 0; i < ticket.length; i++) {
    const [str, num] = ticket[i]; // ABC 65
    for (let j = 0; j < str.length; j++) {
      if (str.charCodeAt(j) === num) {
        miniWins++;
        break;
      }
    }
  }
  
  if (miniWins >= win) {
    return 'Winner!';
  } else {
    return 'Loser!';
  }
}
//_______________________________________________________________Coding Meetup #7 - Higher-Order Functions Series - Find the most senior developer


/*
You will be given a sequence of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

Your task is to return a sequence which includes the developer who is the oldest. In case of a tie, include all same-age senior developers listed in the same order as they appeared in the original input array.

For example, given the following input array:

var list1 = [
  { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
  { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
  { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
  { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
];
your function should return the following array:

[
  { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
  { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
]
*/
function findSenior(list) {
  let maxAge = 0;
  
  for (let i = 0; i < list.length; i++) {
    if (list[i].age > maxAge) {
      maxAge = list[i].age;
    }
  }

  return list.filter((developer) => developer.age === maxAge);
}
function findSenior(list) {
	var maxAge = Math.max(...list.map(person => person.age));
	return list.filter(person => person.age === maxAge);
}
//_______________________________________________________________Difference of 2


/*
The objective is to return all pairs of integers from a given array of integers that have a difference of 2.

The result array should be sorted in ascending order of values.

Assume there are no duplicate integers in the array. The order of the integers in the input array should not matter.

Examples
[1, 2, 3, 4]  should return [[1, 3], [2, 4]]

[4, 1, 2, 3]  should also return [[1, 3], [2, 4]]

[1, 23, 3, 4, 7] should return [[1, 3]]

[4, 3, 1, 5, 6] should return [[1, 3], [3, 5], [4, 6]]
*/
function twosDifference(input){
  input.sort((a, b) => a - b);

  let result = [];

  for (let i = 0; i < input.length; i++) {
    let current = input[i];
    if (input.includes(current + 2)) {
      result.push([current, current + 2]);
    }
  }

  return result;
}
//_______________________________________________________________Primorial Of a Number


/*
Definition (Primorial Of a Number)
Is similar to factorial of a number, In primorial, not all the natural numbers get multiplied, only prime numbers are multiplied to calculate the primorial of a number. It's denoted with P# and it is the product of the first n prime numbers.

Task
Given a number N , calculate its primorial.!alt!alt
Notes
Only positive numbers will be passed (N > 0) .
Input >> Output Examples:
1- numPrimorial (3) ==> return (30)
Explanation:
Since the passed number is (3) ,Then the primorial should obtained by multiplying 2 * 3 * 5 = 30 .

Mathematically written as , P3# = 30 .
2- numPrimorial (5) ==> return (2310)
Explanation:
Since the passed number is (5) ,Then the primorial should obtained by multiplying  2 * 3 * 5 * 7 * 11 = 2310 .

Mathematically written as , P5# = 2310 .
3- numPrimorial (6) ==> return (30030)
Explanation:
Since the passed number is (6) ,Then the primorial should obtained by multiplying  2 * 3 * 5 * 7 * 11 * 13 = 30030 .

Mathematically written as , P6# = 30030 .

*/
function numPrimorial(n){
  let primes = []; 
  let num = 2; 

  while (primes.length < n) {
    if (isPrime(num)) {
      primes.push(num);
    }
    num++;
  }

  let primorial = primes.reduce(function(a, b) {
    return a * b;
  }, 1);

  return primorial;
}

function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}
//_______________________________________________________________Array Deep Count


/*
You are given an array. Complete the function that returns the number of ALL elements within an array, including any nested arrays.

Examples
[]                   -->  0
[1, 2, 3]            -->  3
["x", "y", ["z"]]    -->  4
[1, 2, [3, 4, [5]]]  -->  7
The input will always be an array.
*/
function deepCount(a) {
  return JSON.stringify(a).replace(/[^[,]|\[]/g, '').length;
}
//_______________________________________________________________Coding Meetup #8 - Higher-Order Functions Series - Will all continents be represented?


/*
You will be given a sequence of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

Your task is to return:

true if all of the following continents / geographic zones will be represented by at least one developer: 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'.
false otherwise.
For example, given the following input array:

var list1 = [
  { firstName: 'Fatima', lastName: 'A.', country: 'Algeria', continent: 'Africa', age: 25, language: 'JavaScript' },
  { firstName: 'Agustín', lastName: 'M.', country: 'Chile', continent: 'Americas', age: 37, language: 'C' },
  { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
  { firstName: 'Laia', lastName: 'P.', country: 'Andorra', continent: 'Europe', age: 55, language: 'Ruby' },
  { firstName: 'Oliver', lastName: 'Q.', country: 'Australia', continent: 'Oceania', age: 65, language: 'PHP' },
];
*/
const allContinents = list => ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'].every(continent => list.some(dev => dev.continent === continent));
//_______________________________________________________________The Clockwise Spiral


/*
Your objective is to complete a function createSpiral(N) that receives an integer N and returns an NxN two-dimensional array with numbers 1 through NxN represented as a clockwise spiral.

Return an empty array if N < 1 or N is not int / number

Examples:

N = 3 Output: [[1,2,3],[8,9,4],[7,6,5]]

1    2    3    
8    9    4    
7    6    5    
N = 4 Output: [[1,2,3,4],[12,13,14,5],[11,16,15,6],[10,9,8,7]]

1   2   3   4
12  13  14  5
11  16  15  6
10  9   8   7
N = 5 Output: [[1,2,3,4,5],[16,17,18,19,6],[15,24,25,20,7],[14,23,22,21,8],[13,12,11,10,9]]

1   2   3   4   5    
16  17  18  19  6    
15  24  25  20  7    
14  23  22  21  8    
13  12  11  10  9
*/
function createSpiral(N) {
  if (typeof N !== 'number' || N < 1 || !Number.isInteger(N)) {
    return [];
  }

  let spiral = Array.from({ length: N }, () => Array.from({ length: N }, () => 0));

  let left = 0,
    right = N - 1,
    top = 0,
    bottom = N - 1;
  let direction = 0; 
  let num = 1; 

  while (left <= right && top <= bottom) {
    if (direction === 0) {
      for (let i = left; i <= right; i++) {
        spiral[top][i] = num++;
      }
      top++;
    } else if (direction === 1) {
      for (let i = top; i <= bottom; i++) {
        spiral[i][right] = num++;
      }
      right--;
    } else if (direction === 2) {
      for (let i = right; i >= left; i--) {
        spiral[bottom][i] = num++;
      }
      bottom--;
    } else if (direction === 3) {
      for (let i = bottom; i >= top; i--) {
        spiral[i][left] = num++;
      }
      left++;
    }
    direction = (direction + 1) % 4;
  }

  return spiral;
}
//_______________________________________________________________Calculate String Rotation


/*
Write a function that receives two strings and returns n, where n is equal to the number of characters we should shift the first string forward to match the second. The check should be case sensitive.

For instance, take the strings "fatigue" and "tiguefa". In this case, the first string has been rotated 5 characters forward to produce the second string, so 5 would be returned.

If the second string isn't a valid rotation of the first string, the method returns -1.
Examples:
"coffee", "eecoff" => 2
"eecoff", "coffee" => 4
"moose", "Moose" => -1
"isn't", "'tisn" => 2
"Esham", "Esham" => 0
"dog", "god" => -1
*/
function shiftedDiff(first,second){
  if (first.length !== second.length) {
    return -1;
  }

  for (let i = 0; i < first.length; i++) {
    if (first === second) return i;
    second = second.slice(1) + second[0];
  }

  return -1;
}
//_______________________________________________________________Stanton measure

/*
The Stanton measure of an array is computed as follows: count the number of occurences for value 1 in the array. Let this count be n. The Stanton measure is the number of times that n appears in the array.

Write a function which takes an integer array and returns its Stanton measure.

Examples
The Stanton measure of [1, 4, 3, 2, 1, 2, 3, 2] is 3, because 1 occurs 2 times in the array and 2 occurs 3 times.

The Stanton measure of [1, 4, 1, 2, 11, 2, 3, 1] is 1, because 1 occurs 3 times in the array and 3 occurs 1 time.
*/
const stantonMeasure = (array) => {
  let preResult = 0
  let result = 0
  for (let i = 0; i < array.length; i++) {
      if (array[i] === 1) {
          preResult++
      }
  }
  for (let i = 0; i < array.length; i++) {
      if (array[i] === preResult) {
          result++
      }
  }
  return result
} 
//_______________________________________________________________Arithmetic progression


/*
In your class, you have started lessons about arithmetic progression. Since you are also a programmer, you have decided to write a function that will return the first n elements of the sequence with the given common difference d and first element a. Note that the difference may be zero!

The result should be a string of numbers, separated by comma and space.

Example
# first element: 1, difference: 2, how many: 5
arithmetic_sequence_elements(1, 2, 5) == "1, 3, 5, 7, 9"
*/
function arithmeticSequenceElements(a, d, n) {
  let result = []
  for (let i = 0; i < n; i++) {
      result[i] = a + i * d
  }
  return result.join(', ')
}
//_______________________________________________________________Flatten


/*
Write a function that flattens an Array of Array objects into a flat Array. Your function must only do one level of flattening.

flatten([1,2,3]) // => [1,2,3]
flatten([[1,2,3],["a","b","c"],[1,2,3]])  // => [1,2,3,"a","b","c",1,2,3]
flatten([[[1,2,3]]]) // => [[1,2,3]]
*/
const flatten = array => array.flat();
//_______________________________________________________________Number Of Occurrences


/*
Write a function that returns the number of occurrences of an element in an array.

This function will be defined as a property of Array with the help of the method Object.defineProperty, which allows to define a new method directly on the object (more info about that you can find on MDN).

Examples
var arr = [0, 1, 2, 2, 3];
arr.numberOfOccurrences(0) === 1;
arr.numberOfOccurrences(4) === 0;
arr.numberOfOccurrences(2) === 2;
arr.numberOfOccurrences(3) === 1;
*/
Object.defineProperty(Array.prototype, 'numberOfOccurrences',{ 
  value : function numberOfOccurrences(element) {
    let count = 0;
    for (let i = 0; i < this.length; i++) {
      if (this[i] === element) {
        count++;
      }
    }
    return count;
  }
});
//_______________________________________________________________By 3, or not by 3? That is the question . . .


/*
A trick I learned in elementary school to determine whether or not a number was divisible by three is to add all of the integers in the number together and to divide the resulting sum by three. If there is no remainder from dividing the sum by three, then the original number is divisible by three as well.

Given a series of digits as a string, determine if the number represented by the string is divisible by three.

Example:

"123"      -> true
"8409"     -> true
"100853"   -> false
"33333333" -> true
"7"        -> false
*/
function divisibleByThree(str){
  let result = false
  for (let i = 0; i < str.length; i++) {
    result += +str[i]
  }
  return result % 3 === 0
}

function divisibleByThree(str){
  return [...str].reduce((s,d)=>+d+s,0)%3===0;
}
//_______________________________________________________________Check three and two

/*
Given an array with exactly 5 strings "a", "b" or "c" (chars in Java, characters in Fortran), check if the array contains three and two of the same values.

Examples
["a", "a", "a", "b", "b"] ==> true  // 3x "a" and 2x "b"
["a", "b", "c", "b", "c"] ==> false // 1x "a", 2x "b" and 2x "c"
["a", "a", "a", "a", "a"] ==> false // 5x "a"
*/
function checkThreeAndTwo(array) {
  const count = {};
  
  for (let i = 0; i < array.length; i++) {
    count[array[i]] = (count[array[i]] || 0) + 1;
  }
  
  const values = Object.values(count);
  
  return values.includes(3) && values.includes(2);
}
//_______________________________________________________________Looking for a benefactor


/*
The accounts of the "Fat to Fit Club (FFC)" association are supervised by John as a volunteered accountant. The association is funded through financial donations from generous benefactors. John has a list of the first n donations: [14, 30, 5, 7, 9, 11, 15] He wants to know how much the next benefactor should give to the association so that the average of the first n + 1 donations should reach an average of 30. After doing the math he found 149. He thinks that he could have made a mistake.

if dons = [14, 30, 5, 7, 9, 11, 15] then new_avg(dons, 30) --> 149

Could you help him?

Task
The function new_avg(arr, navg) should return the expected donation (rounded up to the next integer) that will permit to reach the average navg.

Should the last donation be a non positive number (<= 0) John wants us:

to return:

Nothing in Haskell, Elm
None in F#, Ocaml, Rust, Scala
-1 in C, D, Fortran, Nim, PowerShell, Go, Pascal, Prolog, Lua, Perl, Erlang
or to throw an error (some examples for such a case):

IllegalArgumentException() in Clojure, Java
ArgumentException() in C#
echo ERROR in Shell
argument-error in Racket
std::invalid_argument in C++
ValueError in Python
So, he will clearly see that his expectations are not great enough. In "Sample Tests" you can see what to return.

Notes:
all donations and navg are numbers (integers or floats), arr can be empty.
See examples below and "Sample Tests" to see which return is to be done.
new_avg([14, 30, 5, 7, 9, 11, 15], 92) should return 645
new_avg([14, 30, 5, 7, 9, 11, 15], 2) 
should raise an error (ValueError or invalid_argument or argument-error or DomainError or ... ) 
or return `-1` or ERROR or Nothing or None depending on the language.
*/
function newAvg(arr, newavg) {
  const n = arr.length;
  const sum = arr.reduce((acc, curr) => acc + curr, 0);
  const currentAvg = sum / n;
  const remainingSum = newavg * (n + 1) - sum;

  if (remainingSum <= 0) {
    throw new Error('Expected New Average is too low');
  }

  const nextDonation = Math.ceil(remainingSum);
  return nextDonation;
}
//_______________________________________________________________Latin Squares


/*
A latin square is an n × n array filled with the integers 1 to n, each occurring once in each row and column.

Here are examples of latin squares of size 4 and 7:

[[1, 4, 3, 2],      [[2, 3, 1, 7, 4, 6, 5], 
 [4, 3, 2, 1],       [7, 1, 6, 5, 2, 4, 3], 
 [3, 2, 1, 4],       [6, 7, 5, 4, 1, 3, 2], 
 [2, 1, 4, 3]]       [4, 5, 3, 2, 6, 1, 7], 
                     [5, 6, 4, 3, 7, 2, 1], 
                     [1, 2, 7, 6, 3, 5, 4], 
                     [3, 4, 2, 1, 5, 7, 6]]
Latin squares have many practical uses, for example in error-correcting-codes and the design of agricultural experiments. See https://en.wikipedia.org/wiki/Latin_square for more details. Sudoku is a special type of 9 x 9 latin square, with additional conditions.

Task: Write a function that returns a latin square for any positive integer n.
*/
function makeLatinSquare(n) {
  const square = Array.from(Array(n), () => new Array(n));
  const numbers = Array.from(Array(n), (_, i) => i + 1);

  for (let i = 0; i < n; i++) {
    const shiftedNumbers = [...numbers.slice(i), ...numbers.slice(0, i)];
    square[i] = shiftedNumbers;
  }

  return square;
}
//_______________________________________________________________Mysterious Singularity Numbers


/*
Task
The point is that a natural number N (1 <= N <= 10^9) is given. You need to write a function which finds the number of natural numbers not exceeding N and not divided by any of the numbers [2, 3, 5].

Example
Let's take the number 5 as an example:

1 - doesn't divide integer by 2, 3, and 5
2 - divides integer by 2
3 - divides integer by 3
4 - divides integer by 2
5 - divides integer by 5
Answer: 1

because only one number doesn't divide integer by any of 2, 3, 5

Note
Again, try to think of a formula that will shorten your solution and help you pass big tests.

Good luck :)
*/
function realNumbers(n){
  const countDivisible = (num, factor) => Math.floor(num / factor);

  const countDivisibleByFactors = (num, factors) => {
    let count = 0;
    for (const factor of factors) {
      count += countDivisible(num, factor);
    }
    return count;
  };

  const factors = [2, 3, 5];
  const total = n;
  const divisible = countDivisibleByFactors(n, factors);
  const divisibleByTwoFactors = countDivisibleByFactors(n, [2 * 3, 2 * 5, 3 * 5]);
  const divisibleByAllFactors = countDivisibleByFactors(n, [2 * 3 * 5]);

  const result = total - divisible + divisibleByTwoFactors - divisibleByAllFactors;
  return result;
}
//_______________________________________________________________Add property to every object in array


/*
Your task is to add a new property usersAnswer to every object in the array questions. The value of usersAnswer should be set to null. The solution should work for array of any length.

For example:

var questions = [{
    question: "What's the currency of the USA?",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0
}, {
    question: "Where was the American Declaration of Independence signed?",
    choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
    corAnswer: 0
}];
After adding the property the result should be:

var questions = [{
    question: "What's the currency of the USA?",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0,
    usersAnswer: null
}, {
    question: "Where was the American Declaration of Independence signed?",
    choices: ["Philadelphia", "At the bottom", "Frankie's pub", "China"],
    corAnswer: 0,
    usersAnswer: null
}];
*/
questions.forEach(function (i) {
  i.usersAnswer = null;
});

const addUsersAnswer = array => array.map(user => ({...user, usersAnswer: null}))
questions = addUsersAnswer(questions);
//_______________________________________________________________Computer problem series #1: Fill the Hard Disk Drive


/*
Your task is to determine how many files of the copy queue you will be able to save into your Hard Disk Drive. The files must be saved in the order they appear in the queue.

Input:
Array of file sizes (0 <= s <= 100)
Capacity of the HD (0 <= c <= 500)
Output:
Number of files that can be fully saved in the HD.
Examples:
save([4,4,4,3,3], 12) -> 3
# 4+4+4 <= 12, but 4+4+4+3 > 12
save([4,4,4,3,3], 11) -> 2
# 4+4 <= 11, but 4+4+4 > 11
Do not expect any negative or invalid inputs.
*/
function save(sizes, hd) {
  let sum = 0
  let result = 0
  for (let i = 0; i < sizes.length; i++) {
      if (sum + sizes[i] <= hd) {
          sum += sizes[i]
          result++
      } else {
          break
      }
  }
  return result
}
// ___________________________________________Return the Missing Element


/*
Fellow code warrior, we need your help! We seem to have lost one of our sequence elements, and we need your help to retrieve it!

Our sequence given was supposed to contain all of the integers from 0 to 9 (in no particular order), but one of them seems to be missing.

Write a function that accepts a sequence of unique integers between 0 and 9 (inclusive), and returns the missing element.

Examples:
[0, 5, 1, 3, 2, 9, 7, 6, 4] --> 8
[9, 2, 4, 5, 7, 0, 8, 6, 1] --> 3
 */
function getMissingElement(superImportantArray){
  for (i = 0; i < 10; i++) {
    if (superImportantArray.indexOf(i) === -1) return i;
  }
}

function getMissingElement(superImportantArray){
  const store = [0,1,2,3,4,5,6,7,8,9]
  const sorted = superImportantArray.sort()
  
  let result = 0
  for (let i = 0; i < store.length; i++) {
      if (store[i] === sorted[i]) {
          result = sorted[i] + 1
      }
  }
  return result
}
// ___________________________________________Nice Array


/*
A Nice array is defined to be an array where for every value n in the array, there is also an element n - 1 or n + 1 in the array.

examples:

[2, 10, 9, 3] is a nice array because

 2 =  3 - 1
10 =  9 + 1
 3 =  2 + 1
 9 = 10 - 1

[4, 2, 3] is a nice array because

4 = 3 + 1
2 = 3 - 1
3 = 2 + 1 (or 3 = 4 - 1)

[4, 2, 1] is a not a nice array because

for n = 4, there is neither n - 1 = 3 nor n + 1 = 5
Write a function named isNice/IsNice that returns true if its array argument is a Nice array, else false. An empty array is not considered nice.
 */
function isNice(arr) {
  if (arr.length === 0) {
    return false;
  }
  
  for (let i = 0; i < arr.length; i++) {
    let found = false;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === arr[i] - 1 || arr[j] === arr[i] + 1) {
        found = true;
        break;
      }
    }
    
    if (!found) {
      return false;
    }
  }
  
  return true;
}
// ___________________________________________How many are smaller than me?

/*
Write a function that given, an array arr, returns an array containing at each index i the amount of numbers that are smaller than arr[i] to the right.

For example:

* Input [5, 4, 3, 2, 1] => Output [4, 3, 2, 1, 0]
* Input [1, 2, 0] => Output [1, 1, 0]
If you've completed this one and you feel like testing your performance tuning of this same kata, head over to the much tougher version How many are smaller than me II?
 */
function smaller(nums) {
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[i]) count++;
    }
    result.push(count);
  }
  return result;
}
// ___________________________________________Drone Fly-By


/*
The other day I saw an amazing video where a guy hacked some wifi controlled lightbulbs by flying a drone past them. Brilliant.

In this kata we will recreate that stunt... sort of.

You will be given two strings: lamps and drone. lamps represents a row of lamps, currently off, each represented by x. When these lamps are on, they should be represented by o.

The drone string represents the position of the drone T (any better suggestion for character??) and its flight path up until this point =. The drone always flies left to right, and always begins at the start of the row of lamps. Anywhere the drone has flown, including its current position, will result in the lamp at that position switching on.

Return the resulting lamps string. See example tests for more clarity.
 */
function flyBy(lamps, drone){
  const lampArray = lamps.split(''); 
 
   for (let i = 0; i < drone.length && i < lampArray.length; i++) {
     lampArray[i] = 'o';
   }
 
   return lampArray.join(''); 
 }
// ___________________________________________Evens times last


/*
Given a sequence of integers, return the sum of all the integers that have an even index (odd index in COBOL), multiplied by the integer at the last index.

Indices in sequence start from 0.

If the sequence is empty, you should return 0.
 */
function evenLast(numbers) {
  if (numbers.length === 0) {
    return 0
  } else {
    let sumEven = 0
    for (let i = 0; i < numbers.length; i++) {
        if (i % 2 === 0) {
            sumEven += numbers[i]
        }
    }
    return sumEven * numbers[numbers.length - 1]
  }
}
function evenLast(numbers) {
  if (numbers.length === 0) return 0;
  let sum = 0;
  for (let i = 0; i < numbers.length; i += 2) {
    sum += numbers[i];
  }
  return sum * numbers[numbers.length - 1];
}
//_______________________________________________________________Find how many times did a team from a given country win the Champions League?

/*
Create a function that takes two arguments:

An array of objects which feature the season, the team and the country of the Champions League winner.

Country (as a string, for example, 'Portugal')

You function should then return the number which represents the number of times a team from a given country has won. Return 0 if there have been no wins.

For example if the input array is as follows:


countWins(winnerList1, 'Spain') => should return 2
countWins(winnerList1, 'Portugal') => should return 1
countWins(winnerList1, 'Sportland') => should return 0
*/
function countWins(winnerList, country) {
  let result = 0
  for (let i = 0; i < winnerList.length; i++) {
       if (winnerList[i].country === country) {
           result++
       }
  }
  return result
}
const countWins = (w, c) => w.filter(a=>a.country === c).length;
//_______________________________________________________________Coding Meetup #12 - Higher-Order Functions Series - Find GitHub admins


/*
You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

Given the following input array:

var list1 = [
  { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 22, language: 'JavaScript', githubAdmin: 'yes' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 49, language: 'Ruby', githubAdmin: 'no' },
  { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 34, language: 'JavaScript', githubAdmin: 'yes' },
  { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript', githubAdmin: 'no' }
];
write a function that when executed as findAdmin(list1, 'JavaScript') returns only the JavaScript developers who are GitHub admins:

[
  { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 22, language: 'JavaScript', githubAdmin: 'yes' },
  { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 34, language: 'JavaScript', githubAdmin: 'yes' }
]
Notes:

The original order should be preserved.
If there are no GitHub admin developers in a given language then return an empty array [].
The input array will always be valid and formatted as in the example above.
The strings representing whether someone is a GitHub admin will always be formatted as 'yes' and 'no' (all lower-case).
The strings representing a given language will always be formatted in the same way (e.g. 'JavaScript' will always be formatted with upper-case 'J' and 'S'.
*/
function findAdmin(list, lang) {
  //     let result = []
  //     for (let i = 0; i < list.length; i++) { 
  //         if (list[i].language === lang && list[i].githubAdmin === 'yes') {
  //             result.push(list[i]) 
  //         }
  //     }
  //     return result 
         return list.filter(dev => dev.language === lang && dev.githubAdmin === 'yes')
  } 
//_______________________________________________________________Autocomplete! Yay!


/*
It's time to create an autocomplete function! Yay!

The autocomplete function will take in an input string and a dictionary array and return the values from the dictionary that start with the input string. If there are more than 5 matches, restrict your output to the first 5 results. If there are no matches, return an empty array.

Example:

autocomplete('ai', ['airplane','airport','apple','ball']) = ['airplane','airport']
For this kata, the dictionary will always be a valid array of strings. Please return all results in the order given in the dictionary, even if they're not always alphabetical. The search should NOT be case sensitive, but the case of the word should be preserved when it's returned.

For example, "Apple" and "airport" would both return for an input of 'a'. However, they should return as "Apple" and "airport" in their original cases.

Important note:

Any input that is NOT a letter should be treated as if it is not there. For example, an input of "$%^" should be treated as "" and an input of "ab*&1cd" should be treated as "abcd".

(Thanks to wthit56 for the suggestion!)
*/
function autocomplete(input, dictionary){
  const sanitizedInput = input.replace(/[^a-zA-Z]/g, '');
  const matches = dictionary.filter((word) => word.toLowerCase().startsWith(sanitizedInput.toLowerCase()));
  return matches.slice(0, 5);
}
//_______________________________________________________________ zipWith

/*
zipWith ( or zip_with ) takes a function and two arrays and zips the arrays together, applying the function to every pair of values.
The function value is one new array.

If the arrays are of unequal length, the output will only be as long as the shorter one.
(Values of the longer array are simply not used.)

Inputs should not be modified.

Examples
zipWith( Math.pow, [10,10,10,10], [0,1,2,3] )      =>  [1,10,100,1000]
zipWith( Math.max, [1,4,7,1,4,7], [4,7,1,4,7,1] )  =>  [4,7,7,4,7,7]

zipWith( function(a,b) { return a+b; }, [0,1,2,3], [0,1,2,3] )  =>  [0,2,4,6]  // Both forms are valid
zipWith( (a,b) => a+b,                  [0,1,2,3], [0,1,2,3] )  =>  [0,2,4,6]  // Both are functions
*/
    function zipWith(fn,a0,a1) {
        const result = [];
        const length = Math.min(a0.length, a1.length);
        for (let i = 0; i < length; i++) {
            result.push(fn(a0[i], a1[i]));
        }
        return result;
    }
    function zipWith(fn,a0,a1) {
        return Array.from({length: Math.min(a0.length, a1.length)}, (_, i) => fn(a0[i], a1[i]));
    }
//_______________________________________________________________ Calculate Two People's Individual Ages


/*
Create a function that takes in the sum and age difference of two people, calculates their individual ages, and returns a pair of values (oldest age first) if those exist or null/None if:

sum < 0
difference < 0
Either of the calculated ages come out to be negative
*/
function getAges(sum,difference){
  if (sum < 0 || difference < 0) {
    return null
  } else {
    const second = (sum - difference) / 2
    const first = sum - second
    if (first < 0 || second < 0) {
      return null
    } else {
      return [first, second]
    }
  }
};
//_______________________________________________________________ How many consecutive numbers are needed?


/*
Create the function consecutive(arr) that takes an array of integers and return the minimum number of integers needed to make the contents of arr consecutive from the lowest number to the highest number.

For example:
If arr contains [4, 8, 6] then the output should be 2 because two numbers need to be added to the array (5 and 7) to make it a consecutive array of numbers from 4 to 8. Numbers in arr will be unique.

ARRAYSFUNDAMENTALS
*/
function consecutive(arr) {
  if (arr.length === 0) {
    return 0; 
  }

  arr.sort((a, b) => a - b); 

  let consecutiveCount = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    const diff = arr[i + 1] - arr[i] - 1;
    consecutiveCount += diff;
  }

  return consecutiveCount;
}
//_______________________________________________________________Sort arrays - 1


/*
Just a simple sorting usage. Create a function that returns the elements of the input-array / list sorted in lexicographical order.
*/
sortme = names => names.sort()
//_______________________________________________________________Coding Meetup #14 - Higher-Order Functions Series - Order the food


/*
You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

Your task is to return an object which includes the count of food options selected by the developers on the meetup sign-up form..

For example, given the following input array:

var list1 = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C', 
    meal: 'vegetarian' },
  { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript', 
    meal: 'standard' },
  { firstName: 'Ramona', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby', 
    meal: 'vegan' },
  { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C', 
    meal: 'vegetarian' },
];
your function should return the following object (the order of properties does not matter):

{ vegetarian: 2, standard: 1, vegan: 1 }
Notes:

The order of the meals count in the object does not matter.
The count value should be a valid number.
The input array will always be valid and formatted as in the example above.
there are 5 possible meal options and the strings representing the selected meal option will always be formatted in the same way, as follows: 'standard', 'vegetarian', 'vegan', 'diabetic', 'gluten-intolerant'.

*/
function orderFood(list) {
  let result = {}
  for (let listElement of list) {
      if (result.hasOwnProperty(listElement.meal)) {
          result[listElement.meal]++
      } else {
          result[listElement.meal] = 1
      }
  }
  return result
}
//______________________________________________________________ Simple frequency sort

/*
In this kata, you will sort elements in an array by decreasing frequency of elements. If two elements have the same frequency, sort them by increasing value.

solve([2,3,5,3,7,9,5,3,7]) = [3,3,3,5,5,7,7,2,9]
-- We sort by highest frequency to lowest frequency.
-- If two elements have same frequency, we sort by increasing value.
*/
    function solve(arr){
        const frequency = {};

        arr.forEach((num) => {
            if (frequency[num]) {
                frequency[num]++;
            } else {
                frequency[num] = 1;
            }
        });

        arr.sort((a, b) => {
            if (frequency[a] === frequency[b]) {
                return a - b;
            }
            return frequency[b] - frequency[a];
        });

        return arr;
    }
//_______________________________________________________________ Prefill an Array


/*
Create the function prefill that returns an array of n elements that all have the same value v. See if you can do this without using a loop.

You have to validate input:

v can be anything (primitive or otherwise)
if v is ommited, fill the array with undefined
if n is 0, return an empty array
if n is anything other than an integer or integer-formatted string (e.g. '123') that is >=0, throw a TypeError
When throwing a TypeError, the message should be n is invalid, where you replace n for the actual value passed to the function.

Code Examples

    prefill(3,1) --> [1,1,1]

    prefill(2,"abc") --> ['abc','abc']

    prefill("1", 1) --> [1]

    prefill(3, prefill(2,'2d'))
      --> [['2d','2d'],['2d','2d'],['2d','2d']]

    prefill("xyz", 1)
      --> throws TypeError with message "xyz is invalid"
*/
    function prefill(n, v) {
        if (n === 0) {
            return []
        }
        if (!Number.isInteger(+n) || +n < 0 || n === true || n === false) {
            throw new TypeError(`${n} is invalid`)
        }
        let result = []
        for (let i = 0; i < n; i++) {
            result.push(v)
        }
        return result
    }
    function prefill(n, v) {
        if (!Number.isInteger(Number(n)) || Number(n) < 0 || typeof n === 'boolean') throw new TypeError(`${n} is invalid`);
        if (n === 0) return [];
        if (n === 1) return [v];

        return Array.from({ length: n }, () => v);
    }
    function prefill(n, v) {
        if (!Number.isInteger(+n) || +n < 0 || typeof n === 'boolean') throw new TypeError(`${n} is invalid`);
        let result = []
        for (let i = 0; i < n; i++) {
            result.push(v)
        }
        return result
    }
//_______________________________________________________________Join Two Arrays by Id

/*
Write a function joinArraysById in JavaScript that takes two arrays, arr1 and arr2, as input. Each array contains objects that have an id field with an integer value. The function should merge arr1 and arr2 based on their id key and return a new array, joinedArray, as the result.

The joinedArray should be formed by following these rules:

The length of joinedArray should be equal to the length of unique id values from both arrays combined.
The objects with unique id values from arr1 and arr2 should be included in the joinedArray without modification.
If two objects share the same id, their properties should be merged into a single object:
If a key only exists in one object, include that key-value pair in the merged object.
If a key exists in both objects, the value from arr2 should override the value from arr1.
The joinedArray should be sorted in ascending order based on the id key.
Example 1:

const arr1 = [
  { id: 1, x: 1 },
  { id: 2, x: 9 },
]
const arr2 = [{ id: 3, x: 5 }]

console.log(joinArraysById(arr1, arr2))
// Output: [
//   { "id": 1, "x": 1 },
//   { "id": 2, "x": 9 },
//   { "id": 3, "x": 5 }
// ]
In the above example, there are no duplicate ids, so arr1 is simply concatenated with arr2.

Example 2:

const arr1 = [
  { id: 1, x: 2, y: 3 },
  { id: 2, x: 3, y: 6 },
]
const arr2 = [
  { id: 2, x: 10, y: 20 },
  { id: 3, x: 0, y: 0 },
]

console.log(joinArraysById(arr1, arr2))
// Output: [
//   { "id": 1, "x": 2, "y": 3 },
//   { "id": 2, "x": 10, "y": 20 },
//   { "id": 3, "x": 0, "y": 0 }
// ]
In the above example, the objects with id=1 and id=3 are included in the result array without modification. The two objects with id=2 are merged together, and the keys from arr2 override the values from arr1.

Example 3:

const arr1 = [{ id: 1, b: { b: 94 }, v: [4, 3], y: 48 }]
const arr2 = [{ id: 1, b: { c: 84 }, v: [1, 3] }]

console.log(joinArraysById(arr1, arr2))
// Output: [
//   { "id": 1, "b": { "c": 84 }, "v": [1, 3], "y": 48 }
// ]
In the above example, the two objects with id=1 are merged together. The values for the keys "b" and "v" are taken from arr2, and since the key "y" only exists in arr1, its value is taken from arr1.

Notes:

The solution should handle the inclusion of original items in the merged array. If necessary, the objects can be shallow or deep copies, as long as the modifications mentioned above are applied.
The solution should distinguish between null, undefined, and missing values

*/
    function joinArraysById(arr1, arr2) {
        const joinedArray = [];

        arr1.forEach(obj1 => {
            let merged = false;
            arr2.forEach(obj2 => {
                if (obj1.id === obj2.id) {
                    const mergedObj = { ...obj1, ...obj2 };
                    joinedArray.push(mergedObj);
                    merged = true;
                }
            });
            if (!merged) {
                joinedArray.push(obj1);
            }
        });

        arr2.forEach(obj2 => {
            const exists = joinedArray.some(obj => obj.id === obj2.id);
            if (!exists) {
                joinedArray.push(obj2);
            }
        });

        joinedArray.sort((a, b) => a.id - b.id);

        return joinedArray;
    }
//_______________________________________________________________ Who's Online?

/*
You have a group chat application, but who is online!?

You want to show your users which of their friends are online and available to chat!

Given an input of an array of objects containing usernames, status and time since last activity (in mins), create a function to work out who is online, offline and away.

If someone is online but their lastActivity was more than 10 minutes ago they are to be considered away.

The input data has the following structure:

[{
  username: 'David',
  status: 'online',
  lastActivity: 10
}, {
  username: 'Lucy', 
  status: 'offline',
  lastActivity: 22
}, {
  username: 'Bob', 
  status: 'online',
  lastActivity: 104
}]
The corresponding output should look as follows:

{
  online: ['David'],
  offline: ['Lucy'],
  away: ['Bob']
}
If for example, no users are online the output should look as follows:

{
  offline: ['Lucy'],
  away: ['Bob']
}
username will always be a string, status will always be either 'online' or 'offline' (UserStatus enum in C#) and lastActivity will always be number >= 0.

Finally, if you have no friends in your chat application, the input will be an empty array []. In this case you should return an empty object {} (empty Dictionary in C#).
*/
const whosOnline = (friends) => {
  // ____________  Формирую объект который буду возвращать
  let result = {
      online: [],
      offline: [],
      away: []
  }
  // ____________  В соответствии с условиями задачи распределяю данные по полям
  for (let inputElement of friends) {
      if (inputElement.status === 'online' && inputElement.lastActivity > 10) {
          result.away.push(inputElement.username)
      }
      if (inputElement.status === 'online' && inputElement.lastActivity <= 10) {
          result.online.push(inputElement.username)
      } else if (inputElement.status === 'offline') {
          result.offline.push(inputElement.username)
      }
  }

  // ____________ Удаляю пустое поле объекта после того как распределил данные 

  // ____________  1 способ 'в лоб'

  //     if (result.online.length === 0) {
  //         delete result.online
  //     }
  //     if (result.offline.length === 0) {
  //         delete result.offline
  //     }
  //     if (result.away.length === 0) {
  //         delete result.away
  //     }

  // ____________  2 способ используя for in

  //       for (let prop in result) {
  //       if (result[prop].length === 0) {
  //           delete result[prop];
  //       }
  //     }  

  // ____________  3 способ используя Object.entries 

  Object.entries(result).forEach(([prop, value]) => {
    if (value.length === 0) {
        delete result[prop];
    }
  });

  return result
}
//_______________________________________________________________ Max-min arrays


/*
In this Kata, you will be given an array of unique elements, and your task is to rearrange the values so that the first max value is followed by the first minimum, followed by second max value then second min value, etc.

For example:

solve([15,11,10,7,12]) = [15,7,12,10,11]
The first max is 15 and the first min is 7. The second max is 12 and the second min is 10 and so on.

More examples in the test cases.
*/
function solve(arr){
  arr.sort((a, b) => a - b);

  let result = [];
  let midpoint = Math.ceil(arr.length / 2);

  for (let i = 0; i < midpoint; i++) {
    result.push(arr[arr.length - 1 - i]);
    result.push(arr[i]);
  }
  
  if (arr.length % 2 !== 0) {
    result.pop();
  }

  return result;
};
//_______________________________________________________________ Extra Perfect Numbers (Special Numbers Series #7)


/*
Definition
Extra perfect number is the number that first and last bits are set bits.

Task
Given a positive integer N , Return the extra perfect numbers in range from 1 to N .

Warm-up (Highly recommended)
Playing With Numbers Series
Notes
Number passed is always Positive .

Returned array/list should contain the extra perfect numbers in ascending order from lowest to highest

Input >> Output Examples
extraPerfect(3)  ==>  return {1,3}
Explanation:
(1)10 =(1)2
First and last bits as set bits.

(3)10 = (11)2
First and last bits as set bits.

extraPerfect(7)  ==>  return {1,3,5,7}
Explanation:
(5)10 = (101)2
First and last bits as set bits.

(7)10 = (111)2
First and last bits as set bits.
*/
function extraPerfect(n){
  let result = [];
  
  for (let i = 1; i <= n; i += 2) {
    result.push(i);
  }
  
  return result;
}
//_______________________________________________________________ Move 10


/*
Move every letter in the provided string forward 10 letters through the alphabet.

If it goes past 'z', start again at 'a'.

Input will be a string with length > 0.
*/
function moveTen(s){
  let result = "";
  for (let i = 0; i < s.length; i++) {
    let charCode = s.charCodeAt(i);
    let shiftedCharCode = ((charCode - 97 + 10) % 26) + 97;
    result += String.fromCharCode(shiftedCharCode);
  }
  return result
}
//_______________________________________________________________ Hells Kitchen


/*
Gordon Ramsay shouts. He shouts and swears. There may be something wrong with him.

Anyway, you will be given a string of four words. Your job is to turn them in to Gordon language.

Rules:

Obviously the words should be Caps, Every word should end with '!!!!', Any letter 'a' or 'A' should become '@', Any other vowel should become '*'.
*/
const gordon = a => a.replace(/a/g, '@').replace(/[e|i|o|u]/g, '*').replace(/ /g, '!!!! ').toUpperCase() + '!!!!'
function gordon(ramsay) {
  return ramsay
    .toUpperCase()
    .replace(/\w+/g, '$&!!!!')
    .replace(/[AEIOU]/g, v => v == 'A' ? '@' : '*');
}
//_______________________________________________________________ Absent vowel


/*
Your job is to figure out the index of which vowel is missing from a given string:

A has an index of 0,
E has an index of 1,
I has an index of 2,
O has an index of 3,
U has an index of 4.
Notes: There is no need for string validation and every sentence given will contain all vowels but one. Also, you won't need to worry about capitals.

Examples
"John Doe hs seven red pples under his bsket"          =>  0  ; missing: "a"
"Bb Smith sent us six neatly arranged range bicycles"  =>  3  ; missing: "o"
ARRAYSSTRINGS
*/
function absentVowel(x){
  if (!x.includes('a'))
   return 0 
 if (!x.includes('e'))
   return 1
 if (!x.includes('i'))
   return 2
 if (!x.includes('o'))
   return 3
 if (!x.includes('u'))
   return 4
}
const absentVowel = string =>
  [...'aeiou'].findIndex(letter => !string.includes(letter))
//_______________________________________________________________ Spin Around, Touch the Ground


/*
Given a list of directions to spin, "left" or "right", return an integer of how many full 360° rotations were made. Note that each word in the array counts as a 90° rotation in that direction.

Worked Example
["right", "right", "right", "right", "left", "right"] ➞ 1
# You spun right 4 times (90 * 4 = 360)
# You spun left once (360 - 90 = 270)
# But you spun right once more to make a full rotation (270 + 90 = 360)
Examples
["left", "right", "left", "right"] ➞ 0

["right", "right", "right", "right", "right", "right", "right", "right"] ➞ 2

["left", "left", "left", "left"] ➞ 1
*/
function spinAround(turns) {
  let result = 0;
  for (let i = 0; i < turns.length; i++) {
    if (turns[i] === "right") {
      result += 90;
    } else if (turns[i] === "left") {
      result -= 90;
    }
  }
  return Math.floor(Math.abs(result) / 360);
}
// ___________________________________________ What dominates your array?


/*
A zero-indexed array arr consisting of n integers is given. The dominator of array arr is the value that occurs in more than half of the elements of arr.
For example, consider array arr such that arr = [3,4,3,2,3,1,3,3]
The dominator of arr is 3 because it occurs in 5 out of 8 elements of arr and 5 is more than a half of 8.
Write a function dominator(arr) that, given a zero-indexed array arr consisting of n integers, returns the dominator of arr. The function should return −1 if array does not have a dominator. All values in arr will be >=0.
*/
function dominator(arr) {
  let middle = arr.length / 2
  const res = arr.reduce((acc, i) => {
      if (acc.hasOwnProperty(i)) {
          acc[i] += 1;
      } else {
          acc[i] = 1;
      }
      return acc;
  },{})
  let max = Math.max(...Object.values(res))
  let dominator = Object.keys(res).find(key => res[key] === max);
  return  max > middle ? +dominator : -1;
}

//_______________________________________________________________ Find The Duplicated Number in a Consecutive Unsorted List


/*
You are given an array of n+1 integers 1 through n. In addition there is a single duplicate integer.

The array is unsorted.

An example valid array would be [3, 2, 5, 1, 3, 4]. It has the integers 1 through 5 and 3 is duplicated. [1, 2, 4, 5, 5] would not be valid as it is missing 3.

You should return the duplicate value as a single integer.
*/
function findDup( arr ){
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
   if (!newArr.includes(arr[i])) {
     newArr.push(arr[i]);
     } else {
     return arr[i];
     }
    }
  }

  function findDup(arr){
    return arr.reduce((a,b,i)=>a^b^i,0);
  }
//_______________________________________________________________ Numbers to Objects


/*
You will be given an array of numbers.

For each number in the array you will need to create an object.

The object key will be the number, as a string. The value will be the corresponding character code, as a string.

Return an array of the resulting objects.

All inputs will be arrays of numbers. All character codes are valid lower case letters. The input array will not be empty.
*/
function numObj(s){
  let result = []
  for (let i = 0; i < s.length; i++) {
      let step = {}
      step[s[i]] = String.fromCharCode(s[i])
      result.push(step)
  }
  return result
}
const numObj = ($) => $.map(el => ( {[el]: String.fromCodePoint(el)} ))
//_______________________________________________________________ The Office III - Broken Photocopier


/*
The bloody photocopier is broken... Just as you were sneaking around the office to print off your favourite binary code!

Instead of copying the original, it reverses it: '1' becomes '0' and vice versa.

Given a string of binary, return the version the photocopier gives you as a string.
*/
function broken(x){
  let start = [...x]
  for (let i = 0; i < start.length; i++) {
      if (+start[i]) {
          start[i] = '0'
      } else {
          start[i] = '1'
      }
  }
  return start.join('')
}
//_______________________________________________________________ Well of Ideas - Harder Version


/*
For every good kata idea there seem to be quite a few bad ones!

In this kata you need to check the provided 2 dimensional array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

The sub arrays may not be the same length.

The solution should be case insensitive (ie good, GOOD and gOOd all count as a good idea). All inputs may not be strings.
*/
function well(x){
  let newArr = x.flat().map(w => typeof w === 'string' ? w.toLowerCase() : w);
  let count = 0
  for (let i = 0; i < newArr.length; i++) {
      if (newArr[i] === 'good') count++;
  }
  return count === 0 ? 'Fail!' : count <= 2 ? 'Publish!' : 'I smell a series!'
}
//_______________________________________________________________ Is every value in the array an array?

/*
Is every value in the array an array?

This should only test the second array dimension of the array. The values of the nested arrays don't have to be arrays.

Examples:

[[1],[2]] => true
['1','2'] => false
[{1:1},{2:2}] => false
*/
const arrCheck = value => {
  let count = 0
  for (let v of value) {
    if (Array.isArray(v)) {
      count++
    }
  }
  return count === value.length
}
const arrCheck = a => a.every(Array.isArray) ;
//_______________________________________________________________ Filter unused digits


/*
Given a varying number of integer arguments, return the digits that are not present in any of them.

Example:

[12, 34, 56, 78]  =>  "09"
[2015, 8, 26]     =>  "3479"
Note: the digits in the resulting string should be sorted.
*/
function unusedDigits(...numbers) {
  const allDigits = '0123456789';
  const usedDigits = numbers.join('').split('').filter((digit, index, array) => array.indexOf(digit) === index);
  const unusedDigits = allDigits.split('').filter(digit => !usedDigits.includes(digit));
  return unusedDigits.sort().join('');
}
//_______________________________________________________________ Scrolling Text


/*
Let's create some scrolling text!

Your task is to complete the function which takes a string, and returns an array with all possible rotations of the given string, in uppercase.

Example
scrollingText("codewars") should return:

[ "CODEWARS",
  "ODEWARSC",
  "DEWARSCO",
  "EWARSCOD",
  "WARSCODE",
  "ARSCODEW"
  "RSCODEWA",
  "SCODEWAR" ]
*/
function scrollingText(text){
  text = text.toUpperCase();
  let rotations = [];
  for (let i = 0; i < text.length; i++) {
    let rotation = text.slice(i) + text.slice(0, i);
    rotations.push(rotation);
  }
  return rotations;
}
//_______________________________________________________________ Merge two arrays


/*
Write a function that combines two arrays by alternatingly taking elements from each array in turn.

Examples:

[a, b, c, d, e], [1, 2, 3, 4, 5] becomes  [a, 1, b, 2, c, 3, d, 4, e, 5]

[1, 2, 3], [a, b, c, d, e, f] becomes [1, a, 2, b, 3, c, d, e, f]
Points:

The arrays may be of different lengths, with at least one character/digit.
One array will be of string characters (in lower case, a-z), a second of integers (all positive starting at 1).
*/
function mergeArrays(a, b) {
  let result = []
  let compareLength = a.length > b.length ? a.length : b.length
  for (let i = 0; i < compareLength; i++) {
      if (a[i]) {
          result.push(a[i])
      }
      if (b[i]) {
          result.push(b[i])
      }
  }
  return result
}
//_______________________________________________________________ We Have Liftoff


/*
You have an array of numbers 1 through n (where 1 <= n <= 10). The array needs to be formatted correctly for the person reading the countdown of a spaceship launch.

Unfortunately, the person reading the countdown only knows how to read strings. After the array is sorted correctly make sure it's in a format he can understand.

Between each number should be a space and after the final number (n) should be the word 'liftoff!'

Example:

// Given
instructions = [8,1,10,2,7,9,6,3,4,5]
// Should return
"10 9 8 7 6 5 4 3 2 1 liftoff!"
// Given
instructions = [1,2,4,3,5]
// Should return
"5 4 3 2 1 liftoff!"
*/
const liftoff = instructions => `${instructions.sort((a,b) => b-a).join(' ')} liftoff!`;
//_______________________________________________________________ Multiply Word in String


/*
You are to write a function that takes a string as its first parameter. This string will be a string of words.

You are expected to then use the second parameter, which will be an integer, to find the corresponding word in the given string. The first word would be represented by 0.

Once you have the located string you are finally going to multiply by it the third provided parameter, which will also be an integer. You are additionally required to add a hyphen in between each word.

Example

modifyMultiply ("This is a string", 3, 5) 
*/
function modifyMultiply (str,loc,num) {
    let result = []
    let necessaryWord = str.split(' ')[loc]
    for (let i = 0; i < num; i++) {
        result.push(necessaryWord)
    }
    return result.join('-')
} 
// ___________________________________________ Coding Meetup #15 - Higher-Order Functions Series - Find the odd names

/*
You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

Given the following input array:

var list1 = [
  { firstName: 'Aba', lastName: 'N.', country: 'Ghana', continent: 'Africa', age: 21, language: 'Python' },
  { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
];
write a function that when executed as findOddNames(list1) returns only the developers where if you add the ASCII representation of all characters in their first names, the result will be an odd number:

[
  { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
]
Explanation of the above:

Sum of ASCII codes of letters in 'Aba' is: 65 + 98 + 97 = 260 which is an even number
Sum of ASCII codes of letters in 'Abb' is: 65 + 98 + 98 = 261 which is an odd number
Notes:

Preserve the order of the original list.
Return an empty array [] if there is no developer with an "odd" name.
The input array and first names will always be valid and formatted as in the example above.
*/
function findOddNames(list) {
  let result = []
  for (let i = 0; i < list.length; i++) {
      const value = list[i].firstName.split('').map(l => l.charCodeAt()).reduce((acc, l) => acc + l)
      if (value % 2 !== 0) {
          result.push(list[i])
      }
  }
  return result
}
//_______________________________________________________________ Is Integer Array?


/*
Write a function with the signature shown below:

function isIntArray(arr) {
  return true
}
returns true  / True if every element in an array is an integer or a float with no decimals.
returns true  / True if array is empty.
returns false / False for every other input.
*/
const isIntArray = arr => arr ? arr.every(n => Number.isInteger(n)) : false;
//_______________________________________________________________ Find the Mine!

/*
You've just discovered a square (NxN) field and you notice a warning sign. The sign states that there's a single bomb in the 2D grid-like field in front of you.

Write a function mineLocation/MineLocation that accepts a 2D array, and returns the location of the mine. The mine is represented as the integer 1 in the 2D array. Areas in the 2D array that are not the mine will be represented as 0s.

The location returned should be an array (Tuple<int, int> in C#) where the first element is the row index, and the second element is the column index of the bomb location (both should be 0 based). All 2D arrays passed into your function will be square (NxN), and there will only be one mine in the array.

Examples:
mineLocation( [ [1, 0, 0], [0, 0, 0], [0, 0, 0] ] ) => returns [0, 0]
mineLocation( [ [0, 0, 0], [0, 1, 0], [0, 0, 0] ] ) => returns [1, 1]
mineLocation( [ [0, 0, 0], [0, 0, 0], [0, 1, 0] ] ) => returns [2, 1]
*/
function mineLocation(field){
  let result = []
  for (let i = 0; i < field.length; i++) {
      for (let j = 0; j < field[i].length; j++) {
          if (field[i][j] === 1) {
              result.push(i)
              result.push(j)
          }
      }
  }
  return result
}
//_______________________________________________________________ Fruit Machine


/*
Introduction
Slot machine (American English), informally fruit machine (British English), puggy (Scottish English slang), the slots (Canadian and American English), poker machine (or pokies in slang) (Australian English and New Zealand English) or simply slot (American English), is a casino gambling machine with three or more reels which spin when a button is pushed. Slot machines are also known as one-armed bandits because they were originally operated by one lever on the side of the machine as distinct from a button on the front panel, and because of their ability to leave the player in debt and impoverished. Many modern machines are still equipped with a legacy lever in addition to the button. (Source Wikipedia)

Task
You will be given three reels of different images and told at which index the reels stop. From this information your job is to return the score of the resulted reels.
Rules
1. There are always exactly three reels

2. Each reel has 10 different items.

3. The three reel inputs may be different.

4. The spin array represents the index of where the reels finish.

5. The three spin inputs may be different

6. Three of the same is worth more than two of the same

7. Two of the same plus one "Wild" is double the score.

8. No matching items returns 0.
Scoring
Item
Three of the same
Two of the same
Two of the same plus one Wild
Wild
100
10
N/A
Star
90
9
18
Bell
80
8
16
Shell
70
7
14
Seven
60
6
12
Cherry
50
5
10
Bar
40
4
8
King
30
3
6
Queen
20
2
4
Jack
10
1
2
 

Returns
Return an integer of the score.
Example
Initialise
reel1 = ["Wild","Star","Bell","Shell","Seven","Cherry","Bar","King","Queen","Jack"];
reel2 = ["Wild","Star","Bell","Shell","Seven","Cherry","Bar","King","Queen","Jack"];
reel3 = ["Wild","Star","Bell","Shell","Seven","Cherry","Bar","King","Queen","Jack"];
spin = [5,5,5];
result = fruit([reel1,reel2,reel3],spin);
Scoring
reel1[5] == "Cherry"
reel2[5] == "Cherry"
reel3[5] == "Cherry"

Cherry + Cherry + Cherry == 50
Return
result == 50
*/
function fruit(reels, spins) {

  const scoring = {
      "Wild": { three: 100, two: 10, twoAndWild: 0 },
      "Star": { three: 90, two: 9, twoAndWild: 18 },
      "Bell": { three: 80, two: 8, twoAndWild: 16 },
      "Shell": { three: 70, two: 7, twoAndWild: 14 },
      "Seven": { three: 60, two: 6, twoAndWild: 12 },
      "Cherry": { three: 50, two: 5, twoAndWild: 10 },
      "Bar": { three: 40, two: 4, twoAndWild: 8 },
      "King": { three: 30, two: 3, twoAndWild: 6 },
      "Queen": { three: 20, two: 2, twoAndWild: 4 },
      "Jack": { three: 10, two: 1, twoAndWild: 2 }
  };

  const reel1Item = reels[0][spins[0]];
  const reel2Item = reels[1][spins[1]];
  const reel3Item = reels[2][spins[2]];

  if (reel1Item === reel2Item && reel2Item === reel3Item) {
    return scoring[reel1Item].three;
  }

  if (reel1Item === reel2Item || reel1Item === reel3Item || reel2Item === reel3Item) {
      if (reel1Item === "Wild" && reel2Item === reel3Item) {
          return scoring[reel2Item].twoAndWild;
      } else if (reel2Item === "Wild" && reel1Item === reel3Item) {
          return scoring[reel1Item].twoAndWild;
      } else if (reel3Item === "Wild" && reel1Item === reel2Item) {
          return scoring[reel1Item].twoAndWild;
      } else if (reel1Item === reel2Item) {
          return scoring[reel1Item].two;
      } else if (reel1Item === reel3Item) {
          return scoring[reel1Item].two;
      } else if (reel2Item === reel3Item) {
          return scoring[reel2Item].two;
      }
      return scoring[reel1Item].two + scoring[reel2Item].two + scoring[reel3Item].two;
  }

  return 0;
}
//_______________________________________________________________ Sort Arrays (Ignoring Case)


/*
Sort the given array of strings in alphabetical order, case insensitive. For example:

["Hello", "there", "I'm", "fine"]  -->  ["fine", "Hello", "I'm", "there"]
["C", "d", "a", "B"])              -->  ["a", "B", "C", "d"]
*/
const sortme = names => names.sort( (a,b) => a.toLowerCase().localeCompare(b.toLowerCase()) )
//_______________________________________________________________ Coding Meetup #9 - Higher-Order Functions Series - Is the meetup age-diverse?


/*
You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

Your task is to return:

true if developers from all of the following age groups have signed up: teens, twenties, thirties, forties, fifties, sixties, seventies, eighties, nineties, centenarian (at least 100 years young).
false otherwise.
For example, given the following input array:

var list1 = [
  { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 19, language: 'Python' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 29, language: 'JavaScript' },
  { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
  { firstName: 'Noa', lastName: 'A.', country: 'Israel', continent: 'Asia', age: 40, language: 'Ruby' },
  { firstName: 'Andrei', lastName: 'E.', country: 'Romania', continent: 'Europe', age: 59, language: 'C' },
  { firstName: 'Maria', lastName: 'S.', country: 'Peru', continent: 'Americas', age: 60, language: 'C' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 75, language: 'Python' },
  { firstName: 'Chloe', lastName: 'K.', country: 'Guernsey', continent: 'Europe', age: 88, language: 'Ruby' },
  { firstName: 'Viktoria', lastName: 'W.', country: 'Bulgaria', continent: 'Europe', age: 98, language: 'PHP' },
  { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript' }
];
your function should return true as there is at least one developer from each age group.

Notes:

The input array will always be valid and formatted as in the example above.
Age is represented by a number which can be any positive integer up to 199.

*/
function isAgeDiverse(list) {
  let ageGroups = new Array(10).fill(false);

  for (let i = 0; i < list.length; i++) {
    let age = list[i].age;

    if (age >= 10 && age < 20) {
      ageGroups[0] = true;
    } else if (age >= 20 && age < 30) {
      ageGroups[1] = true;
    } else if (age >= 30 && age < 40) {
      ageGroups[2] = true;
    } else if (age >= 40 && age < 50) {
      ageGroups[3] = true;
    } else if (age >= 50 && age < 60) {
      ageGroups[4] = true;
    } else if (age >= 60 && age < 70) {
      ageGroups[5] = true;
    } else if (age >= 70 && age < 80) {
      ageGroups[6] = true;
    } else if (age >= 80 && age < 90) {
      ageGroups[7] = true;
    } else if (age >= 90 && age < 100) {
      ageGroups[8] = true;
    } else if (age >= 100) {
      ageGroups[9] = true;
    }
  }

  return ageGroups.every(group => group === true);
}
//_______________________________________________________________ Pascal's Triangle #2


/*
Here you will create the classic Pascal's triangle.
Your function will be passed the depth of the triangle and your code has to return the corresponding Pascal's triangle up to that depth.

The triangle should be returned as a nested array. For example:

pascal(5) -> [ [1], [1,1], [1,2,1], [1,3,3,1], [1,4,6,4,1] ]
To build the triangle, start with a single 1 at the top, for each number in the next row you just take the two numbers above it and add them together, except for the edges, which are all 1. e.g.:

      1
    1   1
  1   2   1
1   3   3   1
*/
function pascal(depth) {
  let triangle = [];
  for (let i = 0; i < depth; i++) {
      let row = [];
      for (let j = 0; j <= i; j++) {
          if (j === 0 || j === i) {
              row[j] = 1;
          } else {
              row[j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
          }
      }
      triangle.push(row);
  }
  return triangle;
}
//_______________________________________________________________ Coding Meetup #13 - Higher-Order Functions Series - Is the meetup language-diverse?


/*
You will be given an array of objects representing data about developers who have signed up to attend the next web development meetup that you are organising. Three programming languages will be represented: Python, Ruby and JavaScript.

Your task is to return either:

true if the number of meetup participants representing any of the three programming languages is ** at most 2 times higher than the number of developers representing any of the remaining programming languages**; or
false otherwise.
For example, given the following input array:

var list1 = [
  { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'Python' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'Ruby' },
  { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 43, language: 'Ruby' },
  { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 95, language: 'JavaScript' },
  { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 18, language: 'JavaScript' },
  { firstName: 'Joao', lastName: 'D.', country: 'Portugal', continent: 'Europe', age: 25, language: 'JavaScript' }
];
your function should return false as the number of JavaScript developers (3) is 3 times higher than the number of Python developers (1). It can't be more than 2 times higher to be regarded as language-diverse.

Notes:

The strings representing all three programming languages will always be formatted in the same way (e.g. 'JavaScript' will always be formatted with upper-case 'J' and 'S'.
The input array will always be valid and formatted as in the example above.
Each of the 3 programming languages will always be represented.
*/
function isLanguageDiverse(list) {
  let counts = {
    Python: 0,
    Ruby: 0,
    JavaScript: 0
  };

  for (let i = 0; i < list.length; i++) {
    let language = list[i].language;
    counts[language]++;
  }

  let maxCount = Math.max(...Object.values(counts));
  let minCount = Math.min(...Object.values(counts));

  if (maxCount <= 2 * minCount) {
    return true;
  } else {
    return false;
  }
}
//_______________________________________________________________ Sorting by bits


/*
In this kata you're expected to sort an array of 32-bit integers in ascending order of the number of on bits they have.

E.g Given the array [7, 6, 15, 8]

7 has 3 on bits (000...0111)
6 has 2 on bits (000...0110)
15 has 4 on bits (000...1111)
8 has 1 on bit (000...1000)
So the array in sorted order would be [8, 6, 7, 15].

In cases where two numbers have the same number of bits, compare their real values instead.

E.g between 10 (...1010) and 12 (...1100), they both have the same number of on bits '2' but the integer 10 is less than 12 so it comes first in sorted order.

Your task is to write a function that takes an array of integers and sort them as described above.

Note: your solution has to sort the array in place.

Example:

[3, 8, 3, 6, 5, 7, 9, 1]   =>    [1, 8, 3, 3, 5, 6, 9, 7]
*/
function sortByBit(arr) {
  arr.sort((a, b) => {
    const bitCountA = countBits(a);
    const bitCountB = countBits(b);

    if (bitCountA === bitCountB) {
      return a - b;
    }

    return bitCountA - bitCountB;
  });
}

function countBits(num) {
  let count = 0;
  while (num !== 0) {
    count += num & 1;
    num >>>= 1;
  }
  return count;
}
//_______________________________________________________________ Split and then add both sides of an array together.


/*
You will receive an array as parameter that contains 1 or more integers and a number n.

Here is a little visualization of the process:

Step 1: Split the array in two:

[1, 2, 5, 7, 2, 3, 5, 7, 8]
      /            \
[1, 2, 5, 7]    [2, 3, 5, 7, 8]
Step 2: Put the arrays on top of each other:

   [1, 2, 5, 7]
[2, 3, 5, 7, 8]
Step 3: Add them together:

[2, 4, 7, 12, 15]
Repeat the above steps n times or until there is only one number left, and then return the array.

Example
Input: arr=[4, 2, 5, 3, 2, 5, 7], n=2


Round 1
-------
step 1: [4, 2, 5]  [3, 2, 5, 7]

step 2:    [4, 2, 5]
        [3, 2, 5, 7]

step 3: [3, 6, 7, 12]


Round 2
-------
step 1: [3, 6]  [7, 12]

step 2:  [3,  6]
         [7, 12]

step 3: [10, 18]


Result: [10, 18]
*/
function splitAndAdd(arr, n) {
  while (arr.length > 1 && n > 0) {
    const half = Math.floor(arr.length / 2);
    const firstHalf = arr.slice(0, half);
    const secondHalf = arr.slice(half);

    if (firstHalf.length < secondHalf.length) {
      firstHalf.unshift(0);
    }

    arr = firstHalf.map((num, index) => num + (secondHalf[index] || 0));
    n--;
  }

  return arr;
}
//_______________________________________________________________ Sorting on planet Twisted-3-7


/*
#Sorting on planet Twisted-3-7

There is a planet... in a galaxy far far away. It is exactly like our planet, but it has one difference: #The values of the digits 3 and 7 are twisted. Our 3 means 7 on the planet Twisted-3-7. And 7 means 3.

Your task is to create a method, that can sort an array the way it would be sorted on Twisted-3-7.

7 Examples from a friend from Twisted-3-7:

[1,2,3,4,5,6,7,8,9] -> [1,2,7,4,5,6,3,8,9]
[12,13,14] -> [12,14,13]
[9,2,4,7,3] -> [2,7,4,3,9]
There is no need for a precheck. The array will always be not null and will always contain at least one number.

You should not modify the input array!

Have fun coding it and please don't forget to vote and rank this kata! :-)

I have also created other katas. Take a look if you enjoyed this kata!
*/
function sortTwisted37(array) {
  let copyArray = [...array];

  copyArray.sort((a, b) => twistedValue(a) - twistedValue(b));

  function twistedValue(num) {
      return Number(String(num).replace(/3/g, 'x').replace(/7/g, '3').replace(/x/g, '7'));
  }

  return copyArray;
}
//_______________________________________________________________ Coding Meetup #10 - Higher-Order Functions Series - Create usernames


/*
Given the following input array:

var list1 = [
  { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby' },
  { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure' }
];
write a function that adds the username property to each object in the input array:

[
  { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby', 
    username: 'emilyn1990' },
  { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure', 
    username: 'nore2000' }
]
The value of the username property is composed by concatenating:

firstName in lower-case;
first letter of the lastName in lower-case; and
the birth year which for the purpose of this kata is calculated simply by subtracting age from the current year. Please make sure that your function delivers the correct birth year irrespective of when it will be executed, for example it should also work correctly for a meetup organised in 10-years-time. The example above assumes that the function is run in year 2020.
Notes:

The input array will always be valid and formatted as in the example above.
Age is represented by a number which can be any positive integer.
Lastname will always be one upper-cased letter followed by dot, e.g. 'N.'
Order of the objects in the array should be maintained but order of the properties in the individual objects does not matter.

*/
function addUsername(list) {
  return list.map(p => {
      p['username'] = `${p.firstName.toLowerCase()}${p.lastName[0].toLowerCase()}${new Date().getFullYear() - p.age}`
      return {...p}
  })
}
// ___________________________________________ Almost Even


/*
We need the ability to divide an unknown integer into a given number of even parts - or at least as even as they can be. The sum of the parts should be the original value, but each part should be an integer, and they should be as close as possible.

Complete the function so that it returns an array of integers representing the parts. If the input number is too small to split it into requested amount of parts, the additional parts should have value 0. Ignoring the order of the parts, there is only one valid solution for each input to your function!

Example:
splitInteger(20, 6)  // returns [3, 3, 3, 3, 4, 4]
Inputs
The input to your function will always be valid for this kata.
*/
var splitInteger = function(num, parts) {
  var quotient = Math.floor(num / parts); 
  var remainder = num % parts; 

  var result = []; // Array to store the parts

  // Fill the array with the quotient value
  for (var i = 0; i < parts; i++) {
    result.push(quotient);
  }

  // Distribute the remainder evenly among the parts
  for (var j = 0; j < remainder; j++) {
    result[j]++;
  }

  return result;
};
//_______________________________________________________________ Reducing by steps


/*
Data: an array of integers, a function f of two variables and an init value.

Example: a = [2, 4, 6, 8, 10, 20], f(x, y) = x + y; init = 0

Output: an array of integers, say r, such that

r = [r[0] = f(init, a[0]), r[1] = f(r[0], a[1]), r[2] = f(r[1], a[2]), ...]

With our example: r = [2, 6, 12, 20, 30, 50]

Task:
Write the following functions of two variables

som : (x, y) -> x + y
mini : (x, y) -> min(x, y)
maxi : (x, y) -> max(x, y)
lcmu : (x, y) -> lcm(abs(x), abs(y) (see note for lcm)
gcdi : (x, y) -> gcd(abs(x), abs(y) (see note for gcd)
and

function oper_array(fct, arr, init) (or operArray or oper-array) where

fct is the function of two variables to apply to the array arr (fct will be one of som, mini, maxi, lcmu or gcdi)

init is the initial value

Examples:
a = [18, 69, -90, -78, 65, 40]
oper_array(gcd, a, a[0]) => [18, 3, 3, 3, 1, 1]
oper_array(lcm, a, a[0]) => [18, 414, 2070, 26910, 26910, 107640]
oper_array(sum, a, 0) => [18, 87, -3, -81, -16, 24]
oper_array(min, a, a[0]) => [18, 18, -90, -90, -90, -90]
oper_array(max, a, a[0]) => [18, 69, 69, 69, 69, 69]
Notes:
The form of the parameter fct in oper_array (or operArray or oper-array) changes according to the language. You can see each form according to the language in "Your test cases".

AFAIK there are no corner cases, everything is as nice as possible.

lcm and gcd see: https://en.wikipedia.org/wiki/Least_common_multiple https://en.wikipedia.org/wiki/Greatest_common_divisor

you could google "reduce function (your language)" to have a general view about the reduce functions.

In Shell bash, arrays are replaced by strings.

In OCaml arrays are replaced by lists.
*/
function gcdi(x, y) {
  if (y === 0) {
    return Math.abs(x);
  }
  return gcdi(y, x % y);
}

function lcmu(a, b) {
  return Math.abs(a * b) / gcdi(a, b);
}

function som(a, b) {
  return a + b;
}

function maxi(a, b) {
  return Math.max(a, b);
}

function mini(a, b) {
  return Math.min(a, b);
}

function operArray(fct, arr, init) {
  const result = [fct(init, arr[0])];
  for (let i = 1; i < arr.length; i++) {
    result.push(fct(result[i - 1], arr[i]));
  }
  return result;
}
//_______________________________________________________________ The takeWhile Function

/*
Here's another staple for the functional programmer. You have a sequence of values and some predicate for those values. You want to get the longest prefix of elements such that the predicate is true for each element. We'll call this the takeWhile function. It accepts two arguments. The first is the sequence of values, and the second is the predicate function. The function does not change the value of the original sequence.

Example:
sequence : [2,4,6,8,1,2,5,4,3,2]
predicate: is an even number
result   : [2,4,6,8]
Your task is to implement the takeWhile function.
*/
function takeWhile (arr, pred) {
  let result = [];
  for ( let i = 0; i < arr.length; i++) {
    if(pred(arr[i])) { 
      result.push(arr[i])
    } else { 
      break 
    }
  }
  return result
}
//_______________________________________________________________ Framed Reflection


/*
100th Kata
You are given a message (text) that you choose to read in a mirror (weirdo). Return what you would see, complete with the mirror frame. Example:

'Hello World'

would give:


Words in your solution should be left-aligned.
*/
function mirror(text){
  const words = text.split(' ');
  
  const maxLength = Math.max(...words.map(word => word.length));
  const frame = '*'.repeat(maxLength + 4); 
  
  const mirroredWords = words.map(word => {
    const mirroredWord = word.split('').reverse().join('');
    const padding = ' '.repeat(maxLength - word.length);
    return `* ${mirroredWord}${padding} *`;
  });
  
  return [frame, ...mirroredWords, frame].join('\n');
}
//_______________________________________________________________ Let's Recycle!


/*
You will be given a list of objects. Each object has type, material, and possibly secondMaterial. The existing materials are: paper, glass, organic, and plastic.

Your job is to sort these objects across the 4 recycling bins according to their material (and secondMaterial if it's present), by listing the type's of objects that should go into those bins.

Notes
The bins should come in the same order as the materials listed above
All bins should be listed in the output, even if some of them are empty
If an object is made of two materials, its type should be listed in both of the respective bins
The order of the type's in each bin should be the same as the order of their respective objects was in the input list
Example
input = [
  {"type": "rotten apples", "material": "organic"},
  {"type": "out of date yogurt", "material": "organic", "secondMaterial": "plastic"},
  {"type": "wine bottle", "material": "glass", "secondMaterial": "paper"},
  {"type": "amazon box", "material": "paper"},
  {"type": "beer bottle", "material": "glass", "secondMaterial": "paper"}
]

output = [
  ["wine bottle", "amazon box", "beer bottle"],
  ["wine bottle", "beer bottle"],
  ["rotten apples", "out of date yogurt"],
  ["out of date yogurt"]
]
*/
function recycle(array) {
  let bins = [[], [], [], []];
  for (let obj of array) {
    if (obj.material === "paper") {
      bins[0].push(obj.type);
    }
    if (obj.material === "glass") {
      bins[1].push(obj.type);
    }
    if (obj.material === "organic") {
      bins[2].push(obj.type);
    }
    if (obj.material === "plastic") {
      bins[3].push(obj.type);
    }
    if (obj.secondMaterial === "paper") {
      bins[0].push(obj.type);
    }
    if (obj.secondMaterial === "glass") {
      bins[1].push(obj.type);
    }
    if (obj.secondMaterial === "organic") {
      bins[2].push(obj.type);
    }
    if (obj.secondMaterial === "plastic") {
      bins[3].push(obj.type);
    }
  }
  return bins;
}
//_______________________________________________________________ N smallest elements in original order


/*
Your task is to write a function that does just what the title suggests (so, fair warning, be aware that you are not getting out of it just throwing a lame bas sorting method there) with an array/list/vector of integers and the expected number n of smallest elements to return.

Also:

the number of elements to be returned cannot be higher than the array/list/vector length;
elements can be duplicated;
in case of duplicates, just return them according to the original order (see third example for more clarity).
Same examples and more in the test cases:

firstNSmallest([1,2,3,4,5],3) === [1,2,3] //well, not technically ===, but you get what I mean
firstNSmallest([5,4,3,2,1],3) === [3,2,1]
firstNSmallest([1,2,3,4,1],3) === [1,2,1]
firstNSmallest([1,2,3,-4,0],3) === [1,-4,0]
firstNSmallest([1,2,3,4,5],0) === []
*/
function firstNSmallest(array, n){
  if (n <= 0) {
    return [];
  }
  const indexedArray = array.map((value, index) => ({ value, index }));
  indexedArray.sort((a, b) => a.value - b.value || a.index - b.index);
  const result = indexedArray.slice(0, n);
  result.sort((a, b) => a.index - b.index);
  return result.map((item) => item.value);
}
//_______________________________________________________________ Organise duplicate numbers in list


/*
Sam is an avid collector of numbers. Every time he finds a new number he throws it on the top of his number-pile. Help Sam organise his collection so he can take it to the International Number Collectors Conference in Cologne.

Given an array of numbers, your function should return an array of arrays, where each subarray contains all the duplicates of a particular number. Subarrays should be in the same order as the first occurence of the number they contain:

group([3, 2, 6, 2, 1, 3])
>>> [[3, 3], [2, 2], [6], [1]]
Assume the input is always going to be an array of numbers. If the input is an empty array, an empty array should be returned.
*/
function group(arr) {
  
  let result = [] // создаю результирующий массив
  
  const storage = {} // создаю объект в который потом помещу пары в виде ключ значения для того чтобы понимать какое число сколько раз повторяется
  
  for (let i = 0; i < arr.length; i++) {
      storage[arr[i]] = 0 // задаю изначальное значение 0 для каждого числа из arr
  }

  const keys = Object.keys(storage) // получаю массив уникальных чисел из arr (в виде строк)
  
  for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < keys.length; j++) {
          if (arr[i] === +keys[j]) {
              storage[arr[i]]++ // указываю сколько раз каждое число появляется в arr
          }
      }
  }

  const repeat = function (number, howManyTimes) { // функция для формирования результирующего массива, будет использована ниже
      let newElement = []
      for (let i = 0; i < howManyTimes; i++) {
          newElement.push(number)
      }
      result.push(newElement)
  }
  
  const newKeys = [...new Set(arr)] // формирую массив уникальных значений с сохранением изначальной сортирвки arr
  
  for (let j = 0; j < newKeys.length; j++) { 
      repeat(newKeys[j], storage[newKeys[j]]) // использую результирующую функцию с элементами которые обеспечат необходимый порядок добавления
  }

  return result
}
function group(arr) {
  return [...new Set(arr)].map(n => arr.filter(x => x == n));
}
//_______________________________________________________________ Manhattan Distance


/*
The distance formula can be used to find the distance between two points. What if we were trying to walk from point A to point B, but there were buildings in the way? We would need some other formula..but which?

Manhattan Distance
Manhattan distance is the distance between two points in a grid (like the grid-like street geography of the New York borough of Manhattan) calculated by only taking a vertical and/or horizontal path.

Complete the function that accepts two points and returns the Manhattan Distance between the two points.

The points are arrays or tuples containing the x and y coordinate in the grid. You can think of x as the row in the grid, and y as the column.

Examples
* Input [1, 1], [1, 1] => Output 0
* Input [5, 4], [3, 2] => Output 4
* Input [1, 1], [0, 3] => Output 3
*/
function manhattanDistance(pointA, pointB){
  let distanceX = Math.abs(pointA[0] - pointB[0]);
  let distanceY = Math.abs(pointA[1] - pointB[1]);
  return distanceX + distanceY;
}
//_______________________________________________________________ Calculate number of inversions in array

/*
Array inversion indicates how far the array is from being sorted.

Inversions are pairs of elements in array that are out of order.

Examples
[1, 2, 3, 4]  =>  0 inversions
[1, 3, 2, 4]  =>  1 inversion: 2 and 3
[4, 1, 2, 3]  =>  3 inversions: 4 and 1, 4 and 2, 4 and 3
[4, 3, 2, 1]  =>  6 inversions: 4 and 3, 4 and 2, 4 and 1, 3 and 2, 3 and 1, 2 and 1
Goal
The goal is to come up with a function that can calculate inversions for any arbitrary array
*/
function countInversions(array) {
  let inversions = 0;

  function mergeSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    return merge(left, right);
  }

  function merge(left, right) {
    let result = [];
    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {
      if (left[i] <= right[j]) {
        result.push(left[i]);
        i++;
      } else {
        result.push(right[j]);
        j++;
        inversions += left.length - i;
      }
    }

    result = result.concat(left.slice(i)).concat(right.slice(j));
    return result;
  }

  mergeSort(array);
  return inversions;
}
//_______________________________________________________________

/*

*/

//_______________________________________________________________

/*

*/

//_______________________________________________________________

/*

*/

//_______________________________________________________________

/*

*/

//_______________________________________________________________

/*

*/

//_______________________________________________________________

/*

*/

//_______________________________________________________________

/*

*/

//_______________________________________________________________

/*

*/
//_______________________________________________________________

/*

*/

//_______________________________________________________________

/*

*/

//_______________________________________________________________

/*

*/

//_______________________________________________________________

/*

*/

//_______________________________________________________________

/*

*/

//_______________________________________________________________

/*

*/

//_______________________________________________________________

/*

*/

//_______________________________________________________________

/*

*/

//_______________________________________________________________

/*

*/

//_______________________________________________________________

/*

*/
//_______________________________________________________________

/*

*/

//_______________________________________________________________

/*

*/

//_______________________________________________________________

/*

*/

//_______________________________________________________________

/*

*/

//_______________________________________________________________

/*

*/

//_______________________________________________________________

/*

*/

//_______________________________________________________________

/*

*/

//_______________________________________________________________

/*

*/

//_______________________________________________________________

/*

*/

//_______________________________________________________________

/*

*/
//_______________________________________________________________

/*

*/

//_______________________________________________________________

/*

*/

//_______________________________________________________________

/*

*/

//_______________________________________________________________

/*

*/

//_______________________________________________________________

/*

*/

//_______________________________________________________________

/*

*/

//_______________________________________________________________

/*

*/

//_______________________________________________________________

/*

*/

//_______________________________________________________________

/*

*/

//_______________________________________________________________

/*

*/
//_______________________________________________________________

/*

*/

//_______________________________________________________________

/*

*/

//_______________________________________________________________

/*

*/

//_______________________________________________________________

/*

*/

//_______________________________________________________________

/*

*/

//_______________________________________________________________

/*

*/

//_______________________________________________________________

/*

*/

//_______________________________________________________________

/*

*/

//_______________________________________________________________

/*

*/

//_______________________________________________________________

/*

*/
//_______________________________________________________________

/*

*/

//_______________________________________________________________

/*

*/

//_______________________________________________________________

/*

*/

//_______________________________________________________________

/*

*/

//_______________________________________________________________

/*

*/

//_______________________________________________________________

/*

*/

//_______________________________________________________________

/*

*/

//_______________________________________________________________

/*

*/

//_______________________________________________________________

/*

*/

//_______________________________________________________________

/*

*/
//_______________________________________________________________

/*

*/

//_______________________________________________________________

/*

*/

//_______________________________________________________________

/*

*/

//_______________________________________________________________

/*

*/

//_______________________________________________________________

/*

*/

//_______________________________________________________________

/*

*/

//_______________________________________________________________

/*

*/

//_______________________________________________________________

/*

*/

//_______________________________________________________________

/*

*/

//_______________________________________________________________

/*

*/
//_______________________________________________________________

/*

*/

//_______________________________________________________________

/*

*/

//_______________________________________________________________

/*

*/

//_______________________________________________________________

/*

*/

//_______________________________________________________________

/*

*/

//_______________________________________________________________

/*

*/

//_______________________________________________________________

/*

*/

//_______________________________________________________________

/*

*/

//_______________________________________________________________

/*

*/

//_______________________________________________________________

/*

*/
