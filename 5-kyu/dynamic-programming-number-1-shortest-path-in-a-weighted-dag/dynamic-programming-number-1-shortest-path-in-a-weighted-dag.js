function shortest(N, edgeList) {
  const adj = Array.from({ length: N }, () => []);
  for (let i = 0; i < edgeList.length; i++) {
    const e = edgeList[i];
    adj[e[0]].push([e[1], e[2]]);
  }
​
  const INF = Number.POSITIVE_INFINITY;
  const dist = new Array(N).fill(INF);
  dist[0] = 0;
​
  for (let u = 0; u < N; u++) {
    const du = dist[u];
    if (du === INF) continue;
    const edges = adj[u];
    for (let j = 0; j < edges.length; j++) {
      const v = edges[j][0];
      const w = edges[j][1];
      const cand = du + w;
      if (cand < dist[v]) dist[v] = cand;
    }
  }
​
  return dist[N - 1] === INF ? -1 : dist[N - 1];
}
​