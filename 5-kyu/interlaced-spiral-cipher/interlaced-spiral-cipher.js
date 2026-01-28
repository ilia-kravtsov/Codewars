const InterlacedSpiralCipher = {};
​
function buildOrder(n) {
  const order = [];
  let top = 0, bottom = n - 1, left = 0, right = n - 1;
​
  while (top <= bottom && left <= right) {
    order.push([top, left]);
    if (left !== right) order.push([top, right]);
    if (top !== bottom) order.push([bottom, right]);
    if (top !== bottom && left !== right) order.push([bottom, left]);
​
    for (let i = 1; i < right - left; i++) {
      order.push([top, left + i]);
      order.push([top + i, right]);
      order.push([bottom, right - i]);
      order.push([bottom - i, left]);
    }
​
    top++;
    bottom--;
    left++;
    right--;
  }
​
  return order;
}
​
InterlacedSpiralCipher.encode = function (str) {
  const n = Math.ceil(Math.sqrt(str.length));
  const grid = Array.from({ length: n }, () => Array(n).fill(' '));