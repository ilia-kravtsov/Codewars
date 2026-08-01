function findTheBall(start, swaps) {
  let position = start;

  for (const [a, b] of swaps) {
    if (position === a) {
      position = b;
    } else if (position === b) {
      position = a;
    }
  }

  return position;
}