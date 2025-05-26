/*
You have the following lattice points with their corresponding coordinates and each one with an specific colour.

Point   [x ,  y]     Colour
----------------------------
 A     [ 3, -4]     Blue
 B     [-7, -1]     Red
 C     [ 7, -6]     Yellow
 D     [ 2,  5]     Yellow
 E     [ 1, -5]     Red
 F     [-1,  4]     Red
 G     [ 1,  7]     Red
 H     [-3,  5]     Red
 I     [-3, -5]     Blue
 J     [ 4,  1]     Blue
We want to count the triangles that have the three vertices with the same colour. The following picture shows the distribution of the points in the plane with the required triangles.

source: imgur.com

The input that we will have for the field of lattice points described above is:

[[[3, -4], "blue"],  [[-7, -1], "red"], [[7, -6], "yellow"], [[2, 5], "yellow"],
 [[1, -5], "red"],   [[-1, 4], "red"],  [[1, 7], "red"],     [[-3, 5], "red"], 
 [[-3, -5], "blue"], [[4, 1], "blue"] ]
We see the following result from it:

Colour   Amount of Triangles       Triangles
Yellow         0                    -------
Blue           1                      AIJ
Red            10                   BEF,BEG,BEH,BFG,BFH,BGH,EFG,EFH,EHG,FGH
As we have 5 different points in red and each combination of 3 points that are not aligned.

We need a code that may give us the following information in order:

1) Total given points
2) Total number of colours
3) Total number of possible triangles
4) and 5) The colour (or colours, sorted alphabetically) with the highest amount of triangles
In Python our function will work like:

[10, 3, 11, ["red",10]]) == count_col_triang([[[3, -4], "blue"],  [[-7, -1], "red"], [[7, -6], "yellow"], [[2, 5], "yellow"], 
                                              [[1, -5], "red"],   [[-1, 4], "red"],  [[1, 7], "red"],     [[-3, 5], "red"],
                                              [[-3, -5], "blue"], [[4, 1], "blue"] ])
In the following case we have some points that are aligned and we have less triangles that can be formed:

[10, 3, 7, ["red", 6]] == count_col_triang([[[3, -4], "blue"],  [[-7, -1], "red"], [[7, -6], "yellow"], [[2, 5], "yellow"],
                                            [[1, -5], "red"],   [[1, 1], "red"],   [[1, 7], "red"],     [[1, 4], "red"], 
                                            [[-3, -5], "blue"], [[4, 1], "blue"] ])
Just to see the change with the previous case we have this:

source: imgur.com

In the special case that the list of points does not generate an even single triangle, the output will be like this case:

[9, 3, 0, []] == count_col_triang([[[1, -2], "red"], [[7, -6], "yellow"], [[2, 5], "yellow"], [[1, -5], "red"],
                                  [[1, 1], "red"],   [[1, 7], "red"],     [[1, 4], "red"],    [[-3, -5], "blue"], 
                                  [[4, 1], "blue"] ])
It will be this case:

source: imgur.com

If in the result we have two or more colours with the same maximum amount of triangles, the last list should be like (e.g)

[35, 6, 35, ["blue", "red", "yellow", 23]]     # having the names of the colours sorted alphabetically
For the condition of three algined points A, B, C, you should know that the the following determinant should be 0.

 | xA    yA    1|
 | xB    yB    1|    = 0
 | xC    yC    1|
Assumptions:

In the list you have unique points, so a point can have only one colour.

All the inputs are valid

Enjoy it!
*/

function countColTriang(pointsList) {
  const totalPoints = pointsList.length;
  const groups = {};
  for (const [coords, color] of pointsList) {
    if (!groups[color]) groups[color] = [];
    groups[color].push(coords);
  }
  const colors = Object.keys(groups);
  const totalColors = colors.length;

  function gcd(a, b) {
    while (b) {
      const temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }

  function getSlope(p, q) {
    const dx = q[0] - p[0],
      dy = q[1] - p[1];
    if (dx === 0) return "vertical";
    if (dy === 0) return "0";
    let absDx = Math.abs(dx),
      absDy = Math.abs(dy);
    const g = gcd(absDx, absDy);
    let normDx = dx / g,
      normDy = dy / g;
    if (normDx < 0) {
      normDx = -normDx;
      normDy = -normDy;
    }
    return `${normDy}/${normDx}`;
  }

  const colorTriangleCount = {};
  let totalTriangles = 0;

  for (const color of colors) {
    const pts = groups[color];
    const n = pts.length;
    if (n < 3) {
      colorTriangleCount[color] = 0;
      continue;
    }
    const totalTriples = (n * (n - 1) * (n - 2)) / 6;

    let collinearSum = 0;
    for (let i = 0; i < n; i++) {
      const slopes = {};
      for (let j = 0; j < n; j++) {
        if (i === j) continue;
        const slope = getSlope(pts[i], pts[j]);
        slopes[slope] = (slopes[slope] || 0) + 1;
      }
      for (const key in slopes) {
        const count = slopes[key];
        if (count >= 2) {
          collinearSum += (count * (count - 1)) / 2;
        }
      }
    }
    const collinearTriples = collinearSum / 3;
    const validTriangles = totalTriples - collinearTriples;
    colorTriangleCount[color] = validTriangles;
    totalTriangles += validTriangles;
  }

  let maxCount = 0;
  for (const c in colorTriangleCount) {
    if (colorTriangleCount[c] > maxCount) {
      maxCount = colorTriangleCount[c];
    }
  }

  let maxColors = [];
  if (maxCount > 0) {
    for (const c in colorTriangleCount) {
      if (colorTriangleCount[c] === maxCount) {
        maxColors.push(c);
      }
    }
    maxColors.sort();
    if (maxColors.length === 1) {
      maxColors = [maxColors[0], maxCount];
    } else {
      maxColors.push(maxCount);
    }
  }

  return [totalPoints, totalColors, totalTriangles, maxColors];
}
