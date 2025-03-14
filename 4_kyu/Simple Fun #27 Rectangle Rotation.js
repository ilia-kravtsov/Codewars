function rectangleRotation(a, b) {
  const sqrt2 = Math.sqrt(2);
  let count = 0;

  let maxX = Math.ceil((a + b) / (2 * sqrt2));

  for (let x = -maxX; x <= maxX; x++) {
    let lowerBound = Math.max(-a / sqrt2 - x, x - b / sqrt2);
    let upperBound = Math.min(a / sqrt2 - x, x + b / sqrt2);

    let yStart = Math.ceil(lowerBound);
    let yEnd = Math.floor(upperBound);

    if (yStart <= yEnd) {
      count += yEnd - yStart + 1;
    }
  }

  return count;
}
