function makeLooper(str) {
  let index = 0;
  return function() {
    const result = str[index];
    index = (index + 1) % str.length;
    return result;
  };
}