function sortByPerfsq(arr) {
  const isSquare = n => {
    const r = Math.sqrt(n)
    return Number.isInteger(r)
  }
​
  const countSquares = n => {
    const digits = String(n).split('')
    const freq = {}
    for (const d of digits) freq[d] = (freq[d] || 0) + 1
​
    const res = new Set()
    const len = digits.length
​
    const dfs = (path) => {
      if (path.length === len) {
        if (path[0] !== '0') {
          const num = +path.join('')
          if (isSquare(num)) res.add(num)
        }
        return
      }
      for (const d in freq) {
        if (freq[d] > 0) {
          freq[d]--
          path.push(d)
          dfs(path)
          path.pop()
          freq[d]++
        }
      }
    }
​
    dfs([])
    return res.size
  }
​
  return arr
    .map(v => [v, countSquares(v)])
    .sort((a, b) => b[1] - a[1] || a[0] - b[0])
    .map(v => v[0])
}
​