function isHaiku(text) {
  const lines = text.trim().split(/\n/);
  if (lines.length !== 3) return false;
​
  const countSyllables = (word) => {
    word = word.toLowerCase().replace(/[^a-z]/g, '');
    if (!word) return 0;
​
    let syllables = (word.match(/[aeiouy]+/g) || []).length;
​
    if (
      word.endsWith('e') &&
      !/[aeiouy]e$/.test(word) &&
      syllables > 1
    ) {
      syllables--;
    }
​
    return syllables || 1;
  };
​
  const countLine = (line) =>
    line.split(/\s+/).reduce((sum, w) => sum + countSyllables(w), 0);
​
  const pattern = [5, 7, 5];
​
  return lines.every((line, i) => countLine(line) === pattern[i]);
}