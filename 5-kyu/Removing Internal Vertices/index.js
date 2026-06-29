const removeInternal = (...triangles) => {
  const edgeCount = new Map();

  for (const [a, b, c] of triangles) {
    const edges = [
      [a, b],
      [b, c],
      [c, a]
    ];

    for (let [u, v] of edges) {
      const key = u < v ? `${u}-${v}` : `${v}-${u}`;
      edgeCount.set(key, (edgeCount.get(key) || 0) + 1);
    }
  }

  const result = new Set();

  for (const [key, count] of edgeCount) {
    if (count === 1) {
      const [u, v] = key.split('-').map(Number);
      result.add(u);
      result.add(v);
    }
  }

  return Array.from(result).sort((a, b) => a - b);
};