function blackOrWhiteKey(keyPressCount) {
  const key = ((keyPressCount - 1) % 88) + 1;
  const position = ((key - 1) % 12) + 1;

  return [2, 5, 7, 10, 12].includes(position) ? "black" : "white";
}