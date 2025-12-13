function createArgumentMap(func) {
  const args = Array.prototype.slice.call(arguments, 1)
  const names = func
    .toString()
    .match(/\(([^)]*)\)/)[1]
    .split(',')
    .map(s => s.trim())
    .filter(Boolean)
​
  return names.reduce((map, name, i) => {
    map[name] = args[i]
    return map
  }, {})
}
​