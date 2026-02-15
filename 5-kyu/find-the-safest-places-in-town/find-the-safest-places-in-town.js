function advice(agents, n) {
  if (n <= 0) return [];
​
  const size = n * n;
  const dist = new Int32Array(size);
  dist.fill(-1);
​
  const isAgent = new Uint8Array(size);
​
  const qx = new Int32Array(size);
  const qy = new Int32Array(size);
  let head = 0, tail = 0;
​
  for (let i = 0; i < agents.length; i++) {
    const a = agents[i];
    const x = a[0] | 0, y = a[1] | 0;
    if (x < 0 || y < 0 || x >= n || y >= n) continue;
    const idx = x * n + y;
    if (isAgent[idx]) continue;
    isAgent[idx] = 1;
    dist[idx] = 0;
    qx[tail] = x;
    qy[tail] = y;
    tail++;
  }
​
  if (tail === 0) {
    const all = [];
    for (let x = 0; x < n; x++) for (let y = 0; y < n; y++) all.push([x, y]);
    return all;
  }
​
  while (head < tail) {
    const x = qx[head];
    const y = qy[head];
    const d = dist[x * n + y];
    head++;
​
    let nx, ny, idx;