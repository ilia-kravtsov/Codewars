function dist(v, mu) {
  const g = 9.81;
  const vMs = v / 3.6;

  return vMs + (vMs * vMs) / (2 * mu * g);
}

function speed(d, mu) {
  const g = 9.81;
  const b = 2 * mu * g;

  const vMs = (-b + Math.sqrt(b * b + 8 * mu * g * d)) / 2;

  return vMs * 3.6;
}