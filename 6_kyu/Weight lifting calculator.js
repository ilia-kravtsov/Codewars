/**
Your gym is well stocked, you have an unlimited number of each of these weights:

20kg
15kg
10kg
5kg
2.5kg
1.25kg
Working this out every time is getting tiresome. Create a function that returns an array showing the smallest combination of weights you can put on to reach the total weight w. Return a false error for any weight that cannot be split evenly on the bar or is <20.

For example:

your total weight is w = 175

175 - 20kg bar weight = 155 = 77.5kg on each side of the bar

so the expected output would be:

[20, 20, 20, 15, 2.5]

Finally, if the input is exactly 20kg then the function should return an empty array as that is the result for a bar without any weight.
*/

function liftingCalc(w) {
  if (w < 20 || w % 2.5 !== 0) return false;
  let weightPerSide = (w - 20) / 2;
  let weights = [20, 15, 10, 5, 2.5, 1.25]; 
  let result = [];

  for (let i = 0; i < weights.length; i++) {
    while (weightPerSide >= weights[i]) {
      weightPerSide -= weights[i];
      result.push(weights[i]);
    }
  }

  return result;
}
