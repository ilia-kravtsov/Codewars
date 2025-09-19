function bestMatch(ALAHLYGoals, zamalekGoals) {
  let bestIndex = 0;
  let bestDiff = ALAHLYGoals[0] - zamalekGoals[0];
  let bestZamalekGoals = zamalekGoals[0];
​
  for (let i = 1; i < ALAHLYGoals.length; i++) {
    const diff = ALAHLYGoals[i] - zamalekGoals[i];
    const zGoals = zamalekGoals[i];
​
    if (diff < bestDiff || 
      (diff === bestDiff && zGoals > bestZamalekGoals)) {
      bestDiff = diff;
      bestZamalekGoals = zGoals;
      bestIndex = i;
    }
  }
​
  return bestIndex;
}