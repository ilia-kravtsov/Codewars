function navigate(numberOfIntersections, roads, start, finish) {
  const graph = Array.from({ length: numberOfIntersections }, () => [])
  for (const { from, to, drivingTime } of roads) {
    graph[from].push([to, drivingTime])
  }
​
  const dist = Array(numberOfIntersections).fill(Infinity)
  const prev = Array(numberOfIntersections).fill(null)
  const visited = Array(numberOfIntersections).fill(false)
​
  dist[start] = 0
​
  for (let i = 0; i < numberOfIntersections; i++) {
    let u = -1
    let best = Infinity
​
    for (let j = 0; j < numberOfIntersections; j++) {
      if (!visited[j] && dist[j] < best) {
        best = dist[j]
        u = j
      }
    }
​
    if (u === -1) break
    if (u === finish) break
​
    visited[u] = true
​
    for (const [v, w] of graph[u]) {
      if (dist[u] + w < dist[v]) {
        dist[v] = dist[u] + w
        prev[v] = u
      }
    }
  }
​
  if (dist[finish] === Infinity) return null
​
  const path = []
  for (let at = finish; at !== null; at = prev[at]) {
    path.push(at)
  }
​
  return path.reverse()
}
​