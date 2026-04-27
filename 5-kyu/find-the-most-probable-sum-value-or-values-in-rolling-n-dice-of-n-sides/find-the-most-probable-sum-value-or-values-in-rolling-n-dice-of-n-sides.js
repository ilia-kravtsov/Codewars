function mostProbSum(dice, n) {
  const sides = {
    tetrahedral: 4,
    cubic: 6,
    octahedral: 8,
    ninesides: 9,
    tensides: 10,
    dodecahedral: 12,
    icosahedral: 20
  }[dice];
​
  let counts = [1];
​
  for (let d = 0; d < n; d++) {
    const next = Array(counts.length + sides).fill(0);
​
    for (let sum = 0; sum < counts.length; sum++) {
      for (let face = 1; face <= sides; face++) {
        next[sum + face] += counts[sum];
      }
    }
​
    counts = next;
  }
​
  const maxCount = Math.max(...counts);
  const sums = [];
​
  for (let sum = 0; sum < counts.length; sum++) {
    if (counts[sum] === maxCount) sums.push(sum);
  }
​
  return [sums, maxCount / sides ** n];
}