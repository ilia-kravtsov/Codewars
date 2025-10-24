function allSquaredPairs(num) {
  const res = [];
  const limit = Math.floor(Math.sqrt(num));
  for (let a = 0; a <= limit; a++) {
    const b2 = num - a * a;
    const b = Math.sqrt(b2);
    if (b % 1 === 0 && b >= a) res.push([a, b]);
  }
  return res;
}
​