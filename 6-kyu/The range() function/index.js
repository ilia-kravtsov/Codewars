function range(start, stop, step = 1) {
  if (stop === undefined) {
    stop = start;
    start = 0;
  }
​
  if (stop <= start) return [];
​
  const length = Math.max(0, Math.ceil((stop - start) / (step || 1)));
​
  return Array.from({ length }, (_, i) => start + i * step);
}