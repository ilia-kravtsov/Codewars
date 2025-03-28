/*
Find the closest prime number under a certain integer n that has the maximum possible amount of even digits.

For n = 1000, the highest prime under 1000 is 887, having two even digits (8 twice)

Naming f(), the function that gives that prime, the above case and others will be like the following below.

f(1000) ---> 887 (even digits: 8, 8)

f(1210) ---> 1201 (even digits: 2, 0)

f(10000) ---> 8887

f(500) ---> 487

f(487) ---> 467
Features of the random tests:

Number of tests = 28
1000 <= n <= 5000000
*/

function f(n) {
  function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  function countEvenDigits(num) {
    return num
      .toString()
      .split("")
      .filter((digit) => "02468".includes(digit)).length;
  }

  let prime = -1;
  let maxEvenDigits = -1;

  for (let i = n - 1; i >= 2; i--) {
    if (isPrime(i)) {
      const evenDigits = countEvenDigits(i);
      if (evenDigits > maxEvenDigits) {
        prime = i;
        maxEvenDigits = evenDigits;
      }
    }
  }

  return prime;
}