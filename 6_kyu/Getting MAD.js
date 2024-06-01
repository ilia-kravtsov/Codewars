/*
For [-10, 0, -3, 1]

the MAD is 1.

Explanation:

| -10 -    0  | = 10
| -10 -  (-3) | =  7
| -10 -    1  | = 11
|   0 - (-10) | = 10
|   0 -  (-3) | =  3
|   0 -    1  | =  1
|  -3 - (-10) | =  7
|  -3 -    0  | =  3
|  -3 -    1  | =  4
|   1 - (-10) | = 11
|   1 -    0  | =  1
|   1 -  (-3) | =  4
The minimum value is 1 ( both | 0 - 1 | and | 1 - 0 | ).

Note
Note that the same value can appear more than once in the array. In that case, the MAD will be 0.
*/

function gettingMad(array) {
  array.sort((a, b) => a - b);

  let mad = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < array.length - 1; i++) {
    let diff = Math.abs(array[i] - array[i + 1]);

    if (diff < mad) {
      mad = diff;
    }
  }

  return mad;
}
