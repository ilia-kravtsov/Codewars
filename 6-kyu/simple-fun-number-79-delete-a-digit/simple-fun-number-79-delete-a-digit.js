function deleteDigit(n) {
  const str = n.toString();
  let max = 0;
​
  for (let i = 0; i < str.length; i++) {
    const candidate = parseInt(str.slice(0, i) + str.slice(i + 1));
    if (candidate > max) {
      max = candidate;
    }
  }
​
  return max;
}