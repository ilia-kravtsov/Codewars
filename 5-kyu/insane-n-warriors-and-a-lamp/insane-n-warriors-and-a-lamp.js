function shortestTime(times) {
  const t = [...times].sort((a, b) => a - b);
  let n = t.length;
  let total = 0;
​
  while (n > 3) {
    const a = t[0];
    const b = t[1];
    const y = t[n - 2];
    const z = t[n - 1];
​
    total += Math.min(
      a + 2 * b + z,
      2 * a + y + z
    );
​
    n -= 2;
  }
​
  if (n === 1) return total + t[0];
  if (n === 2) return total + t[1];
  return total + t[0] + t[1] + t[2];
}