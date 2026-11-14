// The code below was created by NI - Natural Intelligence
function findNextSquare(sq) {
  const rootNumber = Math.sqrt(sq);
​
  if (Number.isInteger(rootNumber)) {
      const nextRoot = rootNumber + 1;
      return nextRoot ** 2;
  }
​
  return -1;
}