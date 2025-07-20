function scoreThrows(radii) {
  if (radii.length === 0) return 0;
​
  let score = 0;
  let allUnder5 = true;
​
  for (let r of radii) {
    if (r < 5) {
      score += 10;
    } else if (r <= 10) {
      score += 5;
      allUnder5 = false;
    } else {
      allUnder5 = false;
    }
  }
​
  if (allUnder5) score += 100;
​
  return score;
}