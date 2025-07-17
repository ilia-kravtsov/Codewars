function stringTransformer(str) {
  return str
    .split(' ')
    .reverse()
    .map(word =>
      word
        .split('')
        .map(char =>
          char === char.toUpperCase()
            ? char.toLowerCase()
            : char.toUpperCase()
        )
        .join('')
    )
    .join(' ');
}