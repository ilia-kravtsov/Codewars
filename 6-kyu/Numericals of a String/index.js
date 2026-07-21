function numericals(s) {
  const counts = new Map();
  let result = "";

  for (const char of s) {
    const count = (counts.get(char) || 0) + 1;
    counts.set(char, count);
    result += count;
  }

  return result;
}