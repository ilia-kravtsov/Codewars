/*
This kata is a slightly harder version of Gravity Flip. It is recommended to do that first.

Bob is bored in his physics lessons yet again, and this time, he's brought a more complex gravity-changing box with him. It's 3D, with small cubes arranged in a matrix of n×m columns. It can change gravity to go in a certain direction, which can be 'L', 'R', 'D', and 'U' (left, right, down, and up).

Given the initial configuration of the cubes inside of the box as a 2D array, determine how the cubes are arranged after Bob switches the gravity.

See the sample tests for examples.
*/

function flip(d, a) {
  const copy = a.map((row) => [...row]);

  const sortFunc = d === "U" || d === "L" ? (a, b) => b - a : (a, b) => a - b;

  switch (d) {
    case "L":
    case "R":
      return copy.map((row) => row.sort(sortFunc));
    case "U":
    case "D":
      for (let i = 0; i < copy[0].length; i++) {
        let column = copy.map((row) => row[i]);
        column.sort(sortFunc);
        for (let j = 0; j < copy.length; j++) {
          copy[j][i] = column[j];
        }
      }
      return copy;
    default:
      return a;
  }
}
