function weakNumbers(n) {
  const divisors = Array(n + 1).fill(0)
​
  for (let i = 1; i <= n; i++) {
    for (let j = i; j <= n; j += i) {
      divisors[j]++
    }
  }
​
  const weakness = Array(n + 1).fill(0)
  let maxWeakness = 0
​
  for (let i = 1; i <= n; i++) {
    let count = 0
    for (let j = 1; j < i; j++) {
      if (divisors[j] > divisors[i]) count++
    }
    weakness[i] = count
    if (count > maxWeakness) maxWeakness = count
  }
​
  let howMany = 0
  for (let i = 1; i <= n; i++) {
    if (weakness[i] === maxWeakness) howMany++
  }
​
  return [maxWeakness, howMany]
}
​