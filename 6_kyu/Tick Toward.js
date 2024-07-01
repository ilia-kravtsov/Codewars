/*
Define a function that generates medial values between two coordinates and returns them in an array from start to target. For example, if the starting point is [1,1] and the target point is [3,2] then the shortest route from start to target would be [[1,1], [2,2], [3,2]]. The route should go only through integral coordinates.

Note: you should move diagonally until the path from your current position to the target can be represented as a fully horizontal/vertical line.

Examples:
tickToward([5,5],[5,7])  // => [[5,5],[5,6],[5,7]]
tickToward([3,2],[4,5])  // => [[3,2],[4,3],[4,4],[4,5]]
tickToward([5,1],[5,-2]) // => [[5,1],[5,0],[5,-1],[5,-2]]
*/

function tickToward(start, end) {
  let result = [];
  let [x1, y1] = start;
  const [x2, y2] = end;

  while (x1 !== x2 || y1 !== y2) {
    result.push([x1, y1]);

    if (x1 < x2) x1++;
    else if (x1 > x2) x1--;

    if (y1 < y2) y1++;
    else if (y1 > y2) y1--;
  }
  result.push([x2, y2]);

  return result;
}
