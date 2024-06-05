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