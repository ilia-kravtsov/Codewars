function maxAndMin(arr1, arr2) {
  let min1 = Infinity, max1 = -Infinity;
  let min2 = Infinity, max2 = -Infinity;
​
  for (const v of arr1) {
    if (v < min1) min1 = v;
    if (v > max1) max1 = v;
  }
​
  for (const v of arr2) {
    if (v < min2) min2 = v;
    if (v > max2) max2 = v;
  }
​
  const maxDiff = Math.max(
    Math.abs(max2 - min1),
    Math.abs(max1 - min2)
  );
​
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);
​
  let i = 0, j = 0, minDiff = Infinity;
​
  while (i < arr1.length && j < arr2.length) {
    const diff = Math.abs(arr1[i] - arr2[j]);
    if (diff < minDiff) minDiff = diff;
    if (arr1[i] < arr2[j]) i++;
    else j++;
  }
​
  return [maxDiff, minDiff];
}
​