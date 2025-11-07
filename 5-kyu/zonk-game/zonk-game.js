function getScore(dice) {
  if (!dice.length) return 0;
  let counts = [0, 0, 0, 0, 0, 0, 0];
  
  dice.forEach(d => counts[d]++);
  
  if ([1,2,3,4,5,6].every(v => counts[v] === 1)) return 1000;
  
  if (counts.filter(c => c === 2).length === 3) return 750;
  
  let score = 0;
  
  for (let i = 1; i <= 6; i++) {
    if (counts[i] >= 3) {
      let base = i === 1 ? 1000 : i * 100;
      if (counts[i] === 4) base *= 2;
      else if (counts[i] === 5) base *= 3;
      else if (counts[i] === 6) base *= 4;
      score += base;
      counts[i] = 0;
    }
  }
  
  score += counts[1] * 100 + counts[5] * 50;
  
  return score;
}
​