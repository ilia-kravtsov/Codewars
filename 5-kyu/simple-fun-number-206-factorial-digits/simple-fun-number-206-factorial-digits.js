function factDigits(n) {
  if (n === 0 || n === 1) return 1
  let sum = 0
  
  for (let i = 2; i <= n; i++) {
    sum += Math.log10(i)
  }
  
  return Math.floor(sum) + 1
}
​