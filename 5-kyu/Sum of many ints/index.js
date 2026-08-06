function f(n, m) {
  const fullCycles = Math.floor(n / m);
  const remainder = n % m;
  const sumFullCycle = (m - 1) * m / 2;
  const sumRemainder = remainder * (remainder + 1) / 2;
  return fullCycles * sumFullCycle + sumRemainder;
}