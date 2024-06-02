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