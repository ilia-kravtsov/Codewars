function inSphere(coords, radius) {
  return coords.reduce((sum, x) => sum + x * x, 0) <= radius * radius;
}