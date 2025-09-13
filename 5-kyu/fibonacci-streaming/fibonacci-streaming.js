function fibonacciSequence() {
  let a = 1n, b = 1n
  return {
    [Symbol.iterator]() {
      return this
    },
    next() {
      let value = a
      ;[a, b] = [b, a + b]
      return { value, done: false }
    }
  }
}