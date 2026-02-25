function minUnfairness(arr, k) {
  const n = arr.length;
  if (k <= 1 || n < 2 || k === 0) return 0;
  if (k > n) return 0;
​
  arr.sort((a, b) => a - b);
​
  let best = Infinity;
  for (let i = 0; i + k - 1 < n; i++) {
    const diff = arr[i + k - 1] - arr[i];
    if (diff < best) best = diff;
  }
  return best === Infinity ? 0 : best;
}