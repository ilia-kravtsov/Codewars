/*
Given three arrays of integers, return the sum of elements that are common in all three arrays.

For example:

common([1,2,3],[5,3,2],[7,3,2]) = 5 because 2 & 3 are common in all 3 arrays
common([1,2,2,3],[5,3,2,2],[7,3,2,2]) = 7 because 2,2 & 3 are common in the 3 arrays
More examples in the test cases.
*/

function common(a, b, c) {
  const counter = {};

  a.forEach((el) => {
    if (!counter[el]) counter[el] = { a: 0, b: 0, c: 0 };
    counter[el].a++;
  });

  b.forEach((el) => {
    if (!counter[el]) counter[el] = { a: 0, b: 0, c: 0 };
    counter[el].b++;
  });

  c.forEach((el) => {
    if (!counter[el]) counter[el] = { a: 0, b: 0, c: 0 };
    counter[el].c++;
  });

  let sum = 0;

  for (let el in counter) {
    if (counter[el].a > 0 && counter[el].b > 0 && counter[el].c > 0) {
      const freq = Math.min(counter[el].a, counter[el].b, counter[el].c);
      sum += freq * parseInt(el);
    }
  }

  return sum;
}
