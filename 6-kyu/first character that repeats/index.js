function firstDup(s) {
  const firstIndex = new Map();
  let answer;
  let minIndex = Infinity;

  for (let i = 0; i < s.length; i++) {
    const ch = s[i];

    if (!firstIndex.has(ch)) {
      firstIndex.set(ch, i);
    } else {
      const idx = firstIndex.get(ch);

      if (idx < minIndex) {
        minIndex = idx;
        answer = ch;
      }
    }
  }

  return answer;
}