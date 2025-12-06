function solve(input){
  return input.trim().split('\n').map(line => {
    let [a, b] = line.split(' ')
    let carry = 0, c = 0
    for (let i = a.length - 1; i >= 0; i--) {
      let s = +a[i] + +b[i] + c
      if (s > 9) {
        carry++
        c = 1
      } else {
        c = 0
      }
    }
    return carry === 0
      ? 'No carry operation'
      : carry + ' carry operations'
  }).join('\n')
}
​