function dsMultofPfs(nMin, nMax) {
  const res = []
​
  const primeFactorsSum = n => {
    let sum = 0
    let d = 2
    while (n > 1) {
      while (n % d === 0) {
        sum += d
        n /= d
      }
      d++
    }
    return sum
  }
​
  const divisorsSum = n => {
    let sum = 0
    for (let i = 1; i * i <= n; i++) {
      if (n % i === 0) {
        sum += i
        if (i !== n / i) sum += n / i
      }
    }
    return sum
  }
​
  for (let n = nMin; n <= nMax; n++) {
    const pfs = primeFactorsSum(n)
    if (pfs > 0 && divisorsSum(n) % pfs === 0) {
      res.push(n)
    }
  }
​
  return res
}
​