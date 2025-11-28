function maxSum(arr, range) {
  const n = arr.length
  const prefix = new Array(n + 1)
  prefix[0] = 0
​
  for (let i = 0; i < n; i++) {
    prefix[i + 1] = prefix[i] + arr[i]
  }
​
  let max = -Infinity
​
  for (let i = 0; i < range.length; i++) {
    const [l, r] = range[i]
    const sum = prefix[r + 1] - prefix[l]
    if (sum > max) max = sum
  }
​
  return max
}
​