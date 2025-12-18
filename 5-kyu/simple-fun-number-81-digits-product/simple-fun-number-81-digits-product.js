function digitsProduct(product) {
  if (product === 0) return 10;
  if (product === 1) return 11;
​
  const digits = [];
​
  for (let d = 9; d >= 2; d--) {
    while (product % d === 0) {
      digits.push(d);
      product /= d;
    }
  }
​
  if (product !== 1) return -1;
​
  digits.sort((a, b) => a - b);
​
  if (digits.length === 1) {
    return Number('1' + digits[0]);
  }
​
  return Number(digits.join(''));
}
​