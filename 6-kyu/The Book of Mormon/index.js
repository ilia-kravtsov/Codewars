function mormons(startingNumber, reach, target) {
  if (startingNumber >= target) {
    return 0;
  }
​
  return 1 + mormons(startingNumber * (reach + 1), reach, target);
}