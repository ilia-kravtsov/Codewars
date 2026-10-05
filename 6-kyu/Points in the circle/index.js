function pointsNumber(radius) {
  const r2 = radius * radius;
  let count = 0;
  for (let x = -radius; x <= radius; x++) {
    for (let y = -radius; y <= radius; y++) {
      if (x * x + y * y <= r2) {
        count++;
      }
    }
  }
  return count;
}