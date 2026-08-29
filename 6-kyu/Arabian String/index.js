function camelize(str) {
  return str
    .split(/[^a-zA-Z0-9]+/)
    .filter(Boolean)
    .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join('');
}