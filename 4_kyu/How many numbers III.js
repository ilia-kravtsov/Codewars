function findAll(sum, count) {
  if (sum < count || sum > count * 9) return [];

  let totalCount = 0;
  let minStr = null;
  let maxStr = null;

  function dfs(remaining, start, currentStr, remainingSum) {
    if (remaining === 0) {
      if (remainingSum === 0) {
        totalCount++;
        if (minStr === null) minStr = currentStr;
        maxStr = currentStr;
      }
      return;
    }

    for (let d = start; d <= 9; d++) {
      if (d > remainingSum) break;

      if (remaining > 1) {
        let minPossible = d * (remaining - 1);
        let maxPossible = 9 * (remaining - 1);
        if (remainingSum - d < minPossible || remainingSum - d > maxPossible)
          continue;
      }

      dfs(remaining - 1, d, currentStr + d, remainingSum - d);
    }
  }

  dfs(count, 1, "", sum);

  return totalCount ? [totalCount, minStr, maxStr] : [];
}
