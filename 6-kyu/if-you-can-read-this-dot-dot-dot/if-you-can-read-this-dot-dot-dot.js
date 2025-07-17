function toNato(words) {
  return words
    .toUpperCase()
    .split('')
    .filter(char => char !== ' ')
    .map(char => NATO[char] || char)
    .join(' ');
}
​