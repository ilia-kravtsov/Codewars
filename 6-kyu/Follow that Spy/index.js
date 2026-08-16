function findRoutes(routes) {
  const from = new Set();
  const to = new Set();
​
  for (const [start, end] of routes) {
    from.add(start);
    to.add(end);
  }
​
  let current = [...from].find(place => !to.has(place));
​
  const result = [];
​
  while (current !== undefined) {
    result.push(current);
​
    const route = routes.find(([start]) => start === current);
​
    if (!route) break;
​
    current = route[1];
  }
​
  return result.join(", ");
}