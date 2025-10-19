function isBalanced(s, caps) {
  const stack = []
  const pairs = {}
  for (let i = 0; i < caps.length; i += 2) pairs[caps[i + 1]] = caps[i]
  for (const c of s) {
    const openIndex = caps.indexOf(c)
    if (openIndex % 2 === 0 && openIndex !== -1) {
      if (caps[openIndex] === caps[openIndex + 1] && stack[stack.length - 1] === c) stack.pop()
      else stack.push(c)
    } else if (pairs[c] && stack.pop() !== pairs[c]) return false
  }
  return stack.length === 0
}
​