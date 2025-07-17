function meeting(s) {
  return s
    .toUpperCase()
    .split(';')
    .map(name => {
      const [first, last] = name.split(':');
      return `(${last}, ${first})`;
    })
    .sort()
    .join('');
}
​