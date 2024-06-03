
// __________________________________________________ Street Fighter 2 - Character Selection



// __________________________________________________ Fibonacci, Tribonacci and friends



// __________________________________________________ Moving Zeros To The End



// __________________________________________________Pick peaks
 


// __________________________________________________ PaginationHelper




// __________________________________________________ Tic-Tac-Toe Checker


// Coding Meetup #4 - Higher-Order Functions Series - Find the first Python developer

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
//_______________________________________________________________ Arrays Similar


/*
Write a function that determines whether the passed in sequences are similar. Similar means they contain the same elements, and the same number of occurrences of elements.

var arr1 = [1, 2, 2, 3, 4],
    arr2 = [2, 1, 2, 4, 3],
    arr3 = [1, 2, 3, 4],
    arr4 = [1, 2, 3, "4"]
arraysSimilar(arr1, arr2); // Should equal true
arraysSimilar(arr2, arr3); // Should equal false
arraysSimilar(arr3, arr4); // Should equal false
*/
function arraysSimilar(arr1, arr2) {
  if (arr1.length === arr2.length) {
    arr1.sort((a,b) => a - b)
    arr2.sort((a,b) => a - b)
    const newArr1 = JSON.stringify(arr1)
    const newArr2 = JSON.stringify(arr2)
    return newArr1 === newArr2
  } else {
    return false
  }
}
//_______________________________________________________________ Emotional Sort ( ︶︿︶)


/*
You'll have a function called "sortEmotions" that will return an array of emotions sorted. It has two parameters, the first parameter called "arr" will expect an array of emotions where an emotion will be one of the following:

:D -> Super Happy
:) -> Happy
:| -> Normal
:( -> Sad
T_T -> Super Sad
Example of the array:[ 'T_T', ':D', ':|', ':)', ':(' ]

And the second parameter is called "order", if this parameter is true then the order of the emotions will be descending (from Super Happy to Super Sad) if it's false then it will be ascending (from Super Sad to Super Happy)

Example if order is true with the above array: [ ':D', ':)', ':|', ':(', 'T_T' ]

Super Happy -> Happy -> Normal -> Sad -> Super Sad
If order is false: [ 'T_T', ':(', ':|', ':)', ':D' ]

Super Sad -> Sad -> Normal -> Happy -> Super Happy
Example:

arr = [':D', ':|', ':)', ':(', ':D']
sortEmotions(arr, true) // [ ':D', ':D', ':)', ':|', ':(' ]
sortEmotions(arr, false) // [ ':(', ':|', ':)', ':D', ':D' ]
More in test cases!

Notes:

The array could be empty, in that case return the same empty array ¯\_( ツ )_/¯
All emotions will be valid
*/
function sortEmotions(arr, order){
  // the main idea of my code is to convert the emotions into numbers
  // then sort numbers according to the order property
  // and then convert sorted array of numbers into emotions array in the appropriate order 
  let prepare = []
  const priority = {
    ':D' : 2,
    ':)' : 1,
    ':|' : 0,
    ':(' : -1,
    'T_T' : -2,
  }

  const priorityKeys = Object.keys(priority)

  for (let i = 0; i < arr.length; i++) {
    prepare.push(priority[arr[i]])
  }
  prepare.sort((a,b) => order ? b - a : a - b)
  const result = prepare.map(n => {
    for (const key in priority) {
      if (priority[key] === n) {
        return key
      }
    }
  })
  return result
}
function sortEmotions(arr, order){
  const emotions = { ':D': 1, ':)': 2, ':|': 3, ':(': 4, 'T_T': 5 }
  arr = arr.sort((a, b) => emotions[a] - emotions[b]);
  return order && arr || arr.reverse();
}
//_______________________________________________________________ Coding Meetup #16 - Higher-Order Functions Series - Ask for missing details

/*
You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

Given the following input array:

var list1 = [
  { firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null },
  { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
];
write a function that

adds the question property to each object in the input array where the developer has not provided the relevant details (marked with a null value in JavaScript, with the default value in COBOL). The value of the question property should be the following string:
Hi, could you please provide your <property name>.

and returns only the developers with missing details:
[
  { firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java', 
  question: 'Hi, could you please provide your firstName.' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null, 
  question: 'Hi, could you please provide your language.' }
]
Notes:

At most only one of the values will be null / empty.
Preserve the order of the original list.
Return an empty array [] if there is no developer with missing details.
The input array will always be valid and formatted as in the example above.

*/
function askForMissingDetails(list) {
  const newList = list.filter((p) => {
     for (const key in p) {
       if (p[key] === null) {
         p['question'] = `Hi, could you please provide your ${key}.`;
       }
     }
     return p.hasOwnProperty('question');
   });
   return newList;
 }
<<<<<<< HEAD
//_______________________________________________________________ Odd-heavy Array


/*
An array is defined to be odd-heavy if it contains at least one odd element and every element whose value is odd is greater than every even-valued element.

eg.

Array [11,4,9,2,8] is odd-heavy,
because its odd elements [11,9] are greater than all the even elements [4,2,8]

Array [11,4,9,2,3,10] is not odd-heavy,
because one of its even elements (10 from [4,2,10]) is greater than two of
its odd elements (9 and 3 from [11,9,3])

Array [] is not odd-heavy,
because it does not contain any odd numbers

Array [3] is odd-heavy,
because it does not contain any even numbers.
write a function called isOddHeavy or is_odd_heavy that accepts an integer array and returns true if the array is odd-heavy else return false.
*/
function isOddHeavy(n){
  const even = []
  const odd = []
  for (let i = 0; i < n.length; i++) {
    if (n[i] % 2 === 0) {
      even.push(n[i])
    } else {
      odd.push(n[i])
    }
  }
  if (!odd.length) return false;
  if (!even.length) return true;
  return Math.min(...odd) > Math.max(...even)
}
//_______________________________________________________________
=======
//_______________________________________________________________ Multiples of 3 or 5


/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

Additionally, if the number is negative, return 0.

Note: If the number is a multiple of both 3 and 5, only count it once.
*/
function solution(number){
  if(number < 0) {
    return 0;
  }
  
  let sum = 0;
  
  for(let i = 3; i < number; i++) {
    if((i % 3 === 0) || (i % 5 === 0)) {
      sum += i;
    }
  }
  
  return sum;
}
//_______________________________________________________________ Stop gninnipS My sdroW!

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
//_______________________________________________________________ Inside Out Strings


/*
You are given a string of words (x), for each word within the string you need to turn the word 'inside out'. By this I mean the internal letters will move out, and the external letters move toward the centre.

If the word is even length, all letters will move. If the length is odd, you are expected to leave the 'middle' letter of the word where it is.

An example should clarify:

'taxi' would become 'atix' 'taxis' would become 'atxsi'
*/
function insideOut(x){
  const arr = x.split(' ')
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > 3) {
      if (arr[i].length % 2 === 0) {
        let firstPart = arr[i].slice(0, arr[i].length / 2)
        let secondPart = arr[i].slice(arr[i].length / 2)
        firstPart = firstPart.split('').reverse().join('')
        secondPart = secondPart.split('').reverse().join('')
        arr[i] = firstPart + secondPart
      } else {
        let firstPart = arr[i].slice(0, arr[i].length / 2)
        let secondPart = arr[i].slice(arr[i].length / 2 + 1)
        let middleLetter = arr[i].slice(firstPart.length)[0]
        firstPart = firstPart.split('').reverse().join('')
        secondPart = secondPart.split('').reverse().join('')
        arr[i] = firstPart + middleLetter + secondPart
      }
    }
  }
  return arr.join(' ')
}
//_______________________________________________________________ Find the odd int

/*
Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
*/
    function findOdd(A) {
        let result = {}
        for (let i = 0; i < A.length; i++) {
            result[A[i]] = 0
        }

        const keys = Object.keys(result).map(n => +n)

        for (let i = 0; i < A.length; i++) {
            for (let j = 0; j < keys.length; j++) {
                if (A[i] === keys[j]) {
                    result[A[i]] = result[A[i]] + 1
                }
            }
        }

        let exit = 0
        for (const key in result) {
            if (result[key] % 2 !== 0) {
                exit = key
            }
        }

        return +exit
    }
//_______________________________________________________________ Basics 03: Strings, Numbers and Calculation


/*
Here you have to do some mathematical operations on a "dirty string". This kata checks some basics, it's not too difficult.

So what to do?

Input: String which consists of two positive numbers (doubles) and exactly one operator like +, -, * or / always between these numbers. The string is dirty, which means that there are different characters inside too, not only numbers and the operator. You have to combine all digits left and right, perhaps with "." inside (doubles), and to calculate the result which has to be rounded to an integer and converted to a string at the end.

Easy example:
Input: "gdfgdf234dg54gf*23oP42"
Output: "54929268" (because 23454*2342=54929268)
First there are some static tests, later on random tests too...
*/
function calculateString(st){
const cleanedString = st.replace(/[^0-9.+\-*/]/g, ''); 
const numbers = cleanedString.match(/[\d.]+/g).map(Number); 
const operator = cleanedString.match(/[\+\-\*\/]/)[0]; 

let result;
switch (operator) {
  case '+':
    result = numbers.reduce((a, b) => a + b);
    break;
  case '-':
    result = numbers.reduce((a, b) => a - b);
    break;
  case '*':
    result = numbers.reduce((a, b) => a * b);
    break;
  case '/':
    result = numbers.reduce((a, b) => a / b);
    break;
  default:
    return 'Invalid operator';
}

return String(Math.round(result));
}
//_______________________________________________________________ Cat and Mouse - Harder Version


/*
You will be given a string (x) featuring a cat 'C', a dog 'D' and a mouse 'm'. The rest of the string will be made up of '.'.

You need to find out if the cat can catch the mouse from it's current position. The cat can jump (j) characters.

Also, the cat cannot jump over the dog.

So:

if j = 5:

..C.....m. returns 'Caught!' <-- not more than j characters between

.....C............m...... returns 'Escaped!' <-- as there are more than j characters between the two, the cat can't jump far enough

if j = 10:

...m.........C...D returns 'Caught!' <--Cat can jump far enough and jump is not over dog

...m....D....C....... returns 'Protected!' <-- Cat can jump far enough, but dog is in the way, protecting the mouse

Finally, if all three animals are not present, return 'boring without all three'
*/
function catMouse(x, j){
  if (!x.includes('C') || !x.includes('D') || !x.includes('m')) {
    return 'boring without all three';
  }

  const catIndex = x.indexOf('C');
  const mouseIndex = x.indexOf('m');
  const dogIndex = x.indexOf('D');

  if (Math.abs(mouseIndex - catIndex) <= j) {
    if (dogIndex > Math.min(catIndex, mouseIndex) && dogIndex < Math.max(catIndex, mouseIndex)) {
      return 'Protected!';
    } else {
      return 'Caught!';
    }
  } else {
    return 'Escaped!';
  }
}
//_______________________________________________________________ TV channels


/*
Program channels into your TV's memory. An array with channels (strings) will be passed as an argument to the function redarr(). Sort the channels in an alphabetical order, remove duplicates and, finally, return an object where each channel (object's value) is assigned to a whole number (objects's key), starting with 0.

Examples:

var arr = ["BBC1", "BBC2", "MTV"];

redarr(arr) // returns {"0":"BBC1", "1":"BBC2", "2":"MTV"}

var arr = ["BBC1", "BBC1", "BBC2", "MTV"];

redarr(arr) // returns {"0":"BBC1", "1":"BBC2", "2":"MTV"}
*/
function redarr(arr) {
  const uniq = [...new Set(arr)]
  uniq.sort()
  const result = {}
  for (let i = 0; i < uniq.length; i++) {
      result[i] = uniq[i]
  }
  return result
}
function redarr(arr) {
  return Object.assign({}, Array.from(new Set(arr)).sort());
}
//_______________________________________________________________ flatten()


/*
For this exercise you will create a global flatten method. The method takes in any number of arguments and flattens them into a single array. If any of the arguments passed in are an array then the individual objects within the array will be flattened so that they exist at the same level as the other arguments. Any nested arrays, no matter how deep, should be flattened into the single array result.

The following are examples of how this function would be used and what the expected results would be:

flatten(1, [2, 3], 4, 5, [6, [7]]) // returns [1, 2, 3, 4, 5, 6, 7]
flatten('a', ['b', 2], 3, null, [[4], ['c']]) // returns ['a', 'b', 2, 3, null, 4, 'c']
*/
function flatten(...input) {
  // I decided to write a more detailed version of the code...
  let primitives = ['number', 'string', 'boolean', 'undefined', 'symbol']
  let result = []
  
  for (let i = 0; i < input.length; i++) {
      // the line of code below is like this because 'typeof null - "object"' -> this is a known quirk in JavaScript :D
      if (primitives.some(n => typeof input[i] === n) || input[i] === null) { 
          result.push(input[i])
      } else if (Array.isArray(input[i])) {
          // here i wrote a recursive version of the flat() method
          function flattenArray(arr) {
              let flattened = [];

              arr.forEach((element) => {
                  if (Array.isArray(element)) {
                      flattened = flattened.concat(flattenArray(element));
                  } else {
                      flattened.push(element);
                  }
              });

              return flattened;
          }

          for (let j = 0; j < flattenArray(input[i]).length; j++) {
              result.push(flattenArray(input[i])[j])
          }

      }
  }
  return result
}
function flatten(...input) {
  let result = []
  let primitives = ['number', 'string', 'boolean', 'undefined', 'symbol']
  
//     version 1
//     for (let i = 0; i < input.length; i++) {
//         if (primitives.some(n => typeof input[i] === n) || input[i] === null) {
//             result.push(input[i])
//         } else if (Array.isArray(input[i])) {
//             result = result.concat(input[i].flat(Infinity));
//         }
//     }
     
//     version 2
  for (let i = 0; i < input.length; i++) {
      if (primitives.some(n => typeof input[i] === n) || input[i] === null) {
        result.push(input[i]);
      } else if (Array.isArray(input[i])) {
        result = result.concat(flatten(...input[i]));
      }
  }
  return result
}
var flatten=function(...arr){
  return arr.toString().split(",");
}
//_______________________________________________________________ Remember


/*
Write a function that takes a string and returns an array of the repeated characters (letters, numbers, whitespace) in the string.

If a charater is repeated more than once, only show it once in the result array.

Characters should be shown by the order of their first repetition. Note that this may be different from the order of first appearance of the character.

Characters are case sensitive.

For F# return a "char list"

Examples:
remember("apple") => returns ["p"]
remember("apPle") => returns []          // no repeats, "p" != "P"
remember("pippi") => returns ["p","i"]   // show "p" only once
remember('Pippi') => returns ["p","i"]   // "p" is repeated first
*/
function remember(str) {
  var repeatedChars = [];
  var seenChars = new Set();
  
  for (var i = 0; i < str.length; i++) {
    var char = str[i];
    
    if (str.indexOf(char) !== i && !seenChars.has(char)) {
      repeatedChars.push(char);
      seenChars.add(char);
    }
  }
  
  return repeatedChars;
}
//_______________________________________________________________ Sort arrays - 3


/*
This time the input is a sequence of course-ids that are formatted in the following way:

name-yymm
The return of the function shall first be sorted by yymm, then by the name (which varies in length).
*/
function sortme(courses) {
  return courses.sort((a, b) => {
    const [nameA, yymmA] = a.split("-");
    const [nameB, yymmB] = b.split("-");

    if (yymmA === yymmB) {
      return nameA.localeCompare(nameB);
    } else {
      return yymmA.localeCompare(yymmB);
    }
  });
}
//_______________________________________________________________ Maximum Contiguous Sum


/*
Given an unsorted array of integer values, find the maximum positive sum of any contiguous range within the array.

An array containing only negative values can return 0. Your solution should be efficient enough to not throw a timeout exception.

Example:
maxContiguousSum([3, -4, 8, 7, -10, 19, -3]); // returns 24
maxContiguousSum([-8, -10, -12, -2, -3, 5]); // returns 5
Visual example:
[3, -4, 8, 7, -10, 19, -3]
       |_____________|
             ||
             \/
             24
*/
function maxContiguousSum (arr) {
  let maxSum = 0;
  let currentSum = 0;

  for (let i = 0; i < arr.length; i++) {
    currentSum = Math.max(currentSum + arr[i], 0);
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}
//_______________________________________________________________ Fun with trees: array to tree


/*
You are given a non-null array of integers. Implement the method arrayToTree which creates a binary tree from its values in accordance to their order, while creating nodes by depth from left to right.

For example, given the array [17, 0, -4, 3, 15] you should create the following tree:

    17
   /  \
  0   -4
 / \
3   15 
The class TreeNode is available for you:

var TreeNode = function(value, left, right) {
  this.value = value;
  this.left = left;
  this.right = right;
};
*/
var TreeNode = function(value, left, right) {
  this.value = value;
  this.left = left;
  this.right = right;
};

function arrayToTree(array) {
  if (!array.length) {
    return undefined; 
  }

  const nodes = array.map(value => new TreeNode(value));
  for (let i = 0; i < nodes.length; i++) {
    if (2 * i + 1 < nodes.length) {
      nodes[i].left = nodes[2 * i + 1];
    }
    if (2 * i + 2 < nodes.length) {
      nodes[i].right = nodes[2 * i + 2];
    }
  }

  return nodes[0];
}
//_______________________________________________________________
>>>>>>> 4d3402752ac07dc5227b42ad3fa3edc405e0b8a2

/*
Don't Drink the Water

Given a two-dimensional array representation of a glass of mixed liquids, sort the array such that the liquids appear in the glass based on their density. (Lower density floats to the top) The width of the glass will not change from top to bottom.

======================
|   Density Chart    |
======================
| Honey   | H | 1.36 |
| Water   | W | 1.00 |
| Alcohol | A | 0.87 |
| Oil     | O | 0.80 |
----------------------

{                             {
  { 'H', 'H', 'W', 'O' },        { 'O','O','O','O' },
  { 'W', 'W', 'O', 'W' },  =>    { 'W','W','W','W' },
  { 'H', 'H', 'O', 'O' }         { 'H','H','H','H' }
}                             }
 
The glass representation may be larger or smaller. If a liquid doesn't fill a row, it floats to the top and to the left.
*/
function separateLiquids(glass) {
  const densityChart = {
    'H': 1.36,
    'W': 1.00,
    'A': 0.87,
    'O': 0.80
  };

  const flattenedGlass = glass.reduce((acc, row) => acc.concat(row), []);
  const sortedLiquids = flattenedGlass.sort((a, b) => densityChart[a] - densityChart[b]);

  const separatedGlass = [];
  let index = 0;

  for (let i = 0; i < glass.length; i++) {
    const row = [];

    for (let j = 0; j < glass[i].length; j++) {
      row.push(sortedLiquids[index]);
      index++;
    }

    separatedGlass.push(row);
  }

  return separatedGlass;
}
//_______________________________________________________________ Interleaving Arrays


/*
Create a function, that accepts an arbitrary number of arrays and returns a single array generated by alternately appending elements from the passed in arguments. If one of them is shorter than the others, the result should be padded with empty elements.

Examples:

interleave([1, 2, 3], ["c", "d", "e"]) === [1, "c", 2, "d", 3, "e"]
interleave([1, 2, 3], [4, 5]) === [1, 4, 2, 5, 3, null]
interleave([1, 2, 3], [4, 5, 6], [7, 8, 9]) === [1, 4, 7, 2, 5, 8, 3, 6, 9]
interleave([]) === []
*/
function interleave(...arrays) {
  const maximum = Math.max(...arrays.map(a => a.length));
  const result = new Array(arrays.length * maximum).fill(null);
  for (let i = 0, x = 0, y = -1; i < result.length; i++, x++) {
    if (0 === i % arrays.length) [x, y] = [0, y + 1];
    if (y < arrays[x].length) result[i] = arrays[x][y];
  }
  return result;
}

function interleave(...input) {
  let result = [];
  let maxLength = Math.max(...input.map((arr) => arr.length));

  for (let i = 0; i < maxLength; i++) {
      for (let j = 0; j < input.length; j++) {
          const element = input[j][i];
          result.push(element !== undefined ? element : null);
      }
  }

  return result;
}
//_______________________________________________________________ Partition On

/*
Write a function which partitions a list of items based on a given predicate.

After the partition function is run, the list should be of the form [ F, F, F, T, T, T ] where the Fs (resp. Ts) are items for which the predicate function returned false (resp. true).

NOTE: the partitioning should be stable; in other words: the ordering of the Fs (resp. Ts) should be preserved relative to each other.

For convenience and utility, the partition function should return the boundary index. In other words: the index of the first T value in items.

For example:

var items = [1, 2, 3, 4, 5, 6];
function isEven(n) {return n % 2 == 0}
var i = partitionOn(isEven, items);
// items should now be [1, 3, 5, 2, 4, 6]
// i     should now be 3
*/
function partitionOn(pred, items) {
  let trueArr = []
  let falseArr = []
  for (let i = 0; i < items.length; i++) {
      if (pred(items[i])) {
          trueArr.push(items[i])
      } else {
          falseArr.push(items[i])
      }
  }
  items.length = 0; 
  items.push(...falseArr, ...trueArr);
  return items.indexOf(trueArr[0])
}
<<<<<<< Updated upstream
//_______________________________________________________________ Human Readable Time


/*
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.
*/

function humanReadable(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  const formattedHours = String(hours).padStart(2, '0');
  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(remainingSeconds).padStart(2, '0');

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}
=======
>>>>>>> Stashed changes
//_______________________________________________________________ Rotate an array matrix


/*
Write a function that rotates a two-dimensional array (a matrix) either clockwise or anti-clockwise by 90 degrees, and returns the rotated array.

The function accepts two parameters: a matrix, and a string specifying the direction or rotation. The direction will be either "clockwise" or "counter-clockwise".

Examples
For matrix:

[
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
Clockwise rotation:

[
  [7, 4, 1],
  [8, 5, 2],
  [9, 6, 3]
]
Counter-clockwise rotation:

[
  [3, 6, 9],
  [2, 5, 8],
  [1, 4, 7]
]
*/
function rotate(matrix, direction) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  const rotatedMatrix = new Array(cols).fill(0).map(() => new Array(rows).fill(0));

  if (direction === 'counter-clockwise') {
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        rotatedMatrix[cols - 1 - j][i] = matrix[i][j];
      }
    }
  } else if (direction === 'clockwise') {
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        rotatedMatrix[j][rows - 1 - i] = matrix[i][j];
      }
    }
  }

  return rotatedMatrix;
}
