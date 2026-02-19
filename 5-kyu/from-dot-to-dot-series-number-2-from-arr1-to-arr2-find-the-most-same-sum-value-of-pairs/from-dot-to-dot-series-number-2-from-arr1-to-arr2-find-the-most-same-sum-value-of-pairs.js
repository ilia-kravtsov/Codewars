function findPair(arr1, arr2) {
  const map = new Map();
​
  for (let i = 0; i < arr1.length; i++) {
    const sum = arr1[i] + arr2[i];
    if (!map.has(sum)) {
      map.set(sum, []);
    }
    map.get(sum).push([arr1[i], arr2[i]]);
  }
​
  let maxCount = 0;
  let bestSum = null;
​
  for (const [sum, pairs] of map.entries()) {
    if (
      pairs.length > maxCount ||
      (pairs.length === maxCount && sum > bestSum)
    ) {
      maxCount = pairs.length;
      bestSum = sum;
    }
  }
​
  return maxCount > 1 ? map.get(bestSum) : [];
}
​