function MagicFunction(...args) {
  const sum = args.reduce((a, b) => a + (Number(b) || 0), 0)
​
  function next(...nextArgs) {
    return MagicFunction(sum, ...nextArgs)
  }
​
  next.valueOf = () => sum
  next.toString = () => String(sum)
​
  return next
}
​