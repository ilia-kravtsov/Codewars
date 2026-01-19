function findPartMaxProd(n) {
  if (n === 1) return [[1], 1]
​
  let parts = []
  let product = 1
  let k = n
​
  while (k > 4) {
    parts.push(3)
    product *= 3
    k -= 3
  }
​
  parts.push(k)
  product *= k
​
  let results = [parts.slice().sort((a, b) => b - a)]
​
  if (k === 4 && parts.includes(4)) {
    let alt = []
    let rest = n
    while (rest > 4) {
      alt.push(3)
      rest -= 3
    }
    alt.push(2, 2)
    results.push(alt.slice().sort((a, b) => b - a))
  }
​
  results = results
    .map(p => JSON.stringify(p))
    .filter((v, i, a) => a.indexOf(v) === i)
    .map(v => JSON.parse(v))
    .sort((a, b) => a.length - b.length)
​
  return results.length === 1
    ? [results[0], product]
    : [...results, product]
}
​