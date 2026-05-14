function checkTrip(start, target, stationLinks) {
  const visited = new Set();
  const queue = [start];
​
  while (queue.length) {
    const station = queue.shift();
​
    if (station === target) return "Possible";
    if (visited.has(station)) continue;
​
    visited.add(station);
​
    for (const next of stationLinks[station] || []) {
      if (!visited.has(next)) queue.push(next);
    }
  }
​
  return "Impossible";
}