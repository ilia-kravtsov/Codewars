var processes = function(source, destination, processList) {
  if (source === destination) return []
​
  const graph = {}
  for (const [name, from, to] of processList) {
    if (!graph[from]) graph[from] = []
    graph[from].push([to, name])
  }
​
  const queue = [[source, []]]
  const visited = new Set([source])
​
  while (queue.length) {
    const [current, path] = queue.shift()
    if (!graph[current]) continue
​
    for (const [next, name] of graph[current]) {
      if (visited.has(next)) continue
      const newPath = path.concat(name)
      if (next === destination) return newPath
      visited.add(next)
      queue.push([next, newPath])
    }
  }
​
  return []
}
​