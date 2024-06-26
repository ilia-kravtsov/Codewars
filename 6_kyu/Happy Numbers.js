/*
Math geeks and computer nerds love to anthropomorphize numbers and assign emotions and personalities to them. Thus there is defined the concept of a "happy" number. A happy number is defined as an integer in which the following sequence ends with the number 1.

Start with the number itself.
Calculate the sum of the square of each individual digit.
If the sum is equal to 1, then the number is happy. If the sum is not equal to 1, then repeat steps 1 and 2. A number is considered unhappy once the same number occurs multiple times in a sequence because this means there is a loop and it will never reach 1.
For example, the number 7 is a "happy" number:

72 = 49 --> 42 + 92 = 97 --> 92 + 72 = 130 --> 12 + 32 + 02 = 10 --> 12 + 02 = 1

Once the sequence reaches the number 1, it will stay there forever since 12 = 1

On the other hand, the number 6 is not a happy number as the sequence that is generated is the following: 6, 36, 45, 41, 17, 50, 25, 29, 85, 89, 145, 42, 20, 4, 16, 37, 58, 89

Once the same number occurs twice in the sequence, the sequence is guaranteed to go on infinitely, never hitting the number 1, since it repeat this cycle.

Your task is to write a program which will print a list of all happy numbers between 1 and x (both inclusive), where:

2 <= x <= 10000
*/

function happyNumbers(x) {
  function getSumOfSquares(num) {
    let sum = 0;
    while (num > 0) {
      let digit = num % 10;
      sum += digit * digit;
      num = Math.floor(num / 10);
    }
    return sum;
  }

  function isHappyNumber(num) {
    let seen = new Set();
    while (num !== 1 && !seen.has(num)) {
      seen.add(num);
      num = getSumOfSquares(num);
    }
    return num === 1;
  }

  const result = [];
  for (let i = 1; i <= x; i++) {
    if (isHappyNumber(i)) {
      result.push(i);
    }
  }
  return result;
}
