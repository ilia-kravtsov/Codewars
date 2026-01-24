function isEven(n) {
  return !(n & 1)
}
​
function isOdd(n) {
  return !!(n & 1)
}
​
function halfAndFloor(n) {
  return n >> 1
}
​
function isPowerOfTwo(n) {
  return !!(n && !(n & (n - 1)))
}
​
function nthPowerOfTwo(n) {
  return 1 << n
}
​
function truncate(n) {
  return n >> 0
}
​
function abs(n) {
  const mask = n >> 31
  return (n ^ mask) - mask
}
​