function threeSplit(a) {
  const total = a.reduce((sum, x) => sum + x, 0);
​
  if (total % 3 !== 0) return 0;
​
  const target = total / 3;
  let countFirstCuts = 0;
  let ways = 0;
  let sum = 0;
​
  for (let i = 0; i < a.length - 1; i++) {
    sum += a[i];
​
    if (sum === target * 2) {
      ways += countFirstCuts;
    }
​
    if (sum === target) {
      countFirstCuts++;
    }
  }
​
  return ways;
}