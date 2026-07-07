function conquerIsland(map) {
  const pirates = [];
  const targets = [];

  for (let x = 0; x < 8; x++) {
    for (let y = 0; y < 8; y++) {
      const cell = map[x][y];
      if (cell === 'p') pirates.push([x, y]);
      else if (cell === 'u') targets.push([x, y]);
    }
  }

  if (targets.length === 0) {
    for (let x = 0; x < 8; x++) {
      for (let y = 0; y < 8; y++) {
        if (map[x][y] === 'm') targets.push([x, y]);
      }
    }
  }

  if (targets.length === 0) return [];

  let best = Infinity;
  const result = [];

  for (const [tx, ty] of targets) {
    let dist = Infinity;

    for (const [px, py] of pirates) {
      dist = Math.min(dist, Math.abs(tx - px) + Math.abs(ty - py));
    }

    if (dist < best) {
      best = dist;
      result.length = 0;
      result.push([tx, ty]);
    } else if (dist === best) {
      result.push([tx, ty]);
    }
  }

  return result.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
}