function pageDigits(n) {
  let digits = 0n
  let length = 1n
  let start = 1n
  n = BigInt(n)
  
  while (start * 10n <= n) {
    digits += (start * 10n - start) * length
    start *= 10n
    length++
  }
  
  digits += (n - start + 1n) * length
  
  return digits
}
​