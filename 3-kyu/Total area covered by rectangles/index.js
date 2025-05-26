/*
Your task in order to complete this Kata is to write a function which calculates the area covered by a union of rectangles.
Rectangles can have non-empty intersection, in this way simple solution: Sall = S1 + S2 + ... + Sn-1 + Sn (where n - the quantity of rectangles) will not work.

Preconditions
each rectangle is represented as: [x0, y0, x1, y1]
(x0, y0) - coordinates of the bottom left corner
(x1, y1) - coordinates of the top right corner
xi, yi - positive integers or zeroes (0, 1, 2, 3, 4..)
sides of rectangles are parallel to coordinate axes
your input data is array of rectangles
Requirements
Number of rectangles in one test (not including simple tests) range from 3000 to 15000. There are 10 tests with such range. So, your algorithm should be optimal.
Sizes of the rectangles can reach values like 1e6.
Example
There are three rectangles:

R1: [3,3,8,5], with area 10
R2: [6,3,8,9], with area 12
R3: [11,6,14,12], with area 18
R1 and R2 are overlapping (2x2), the grayed area is removed from the total area
Hence the total area is 10 + 12 + 18 - 4 = 36

Note: expected time complexity: something around O(N²), but with a good enough constant factor. If you think about using something better, try this kata instead: Total area covered by more rectangles
*/

function calculate(recs) {
  if (recs.length === 0) return 0;

  const yCoordsSet = new Set();
  const events = [];
  for (let [x0, y0, x1, y1] of recs) {
    yCoordsSet.add(y0);
    yCoordsSet.add(y1);
    events.push({ x: x0, y0, y1, type: 1 });
    events.push({ x: x1, y0, y1, type: -1 });
  }

  const Y = Array.from(yCoordsSet).sort((a, b) => a - b);
  const yIndex = new Map();
  for (let i = 0; i < Y.length; i++) {
    yIndex.set(Y[i], i);
  }

  const N = Y.length - 1;
  const st = new Array(4 * N);

  function build(idx, l, r) {
    st[idx] = { l, r, count: 0, total: 0 };
    if (r - l <= 1) return;
    const mid = Math.floor((l + r) / 2);
    build(idx * 2, l, mid);
    build(idx * 2 + 1, mid, r);
  }

  if (N > 0) build(1, 0, N);

  function update(idx, ul, ur, delta) {
    const node = st[idx];
    if (node.r <= ul || node.l >= ur) return;
    if (ul <= node.l && node.r <= ur) {
      node.count += delta;
    } else {
      update(idx * 2, ul, ur, delta);
      update(idx * 2 + 1, ul, ur, delta);
    }
    if (node.count > 0) {
      node.total = Y[node.r] - Y[node.l];
    } else {
      if (node.r - node.l <= 1) {
        node.total = 0;
      } else {
        node.total = st[idx * 2].total + st[idx * 2 + 1].total;
      }
    }
  }

  events.sort((a, b) => {
    if (a.x !== b.x) return a.x - b.x;
    return b.type - a.type;
  });

  let area = 0;
  let lastX = events[0].x;
  for (let event of events) {
    const x = event.x;
    const dx = x - lastX;
    if (dx) {
      area += dx * (N > 0 ? st[1].total : 0);
      lastX = x;
    }
    update(1, yIndex.get(event.y0), yIndex.get(event.y1), event.type);
  }

  return area;
}
