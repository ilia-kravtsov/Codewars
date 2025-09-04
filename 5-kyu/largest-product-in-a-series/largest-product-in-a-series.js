function greatestProduct(input) {
  let maxProduct = 0;
​
  for (let i = 0; i <= input.length - 5; i++) {
    const digits = input.slice(i, i + 5).split("").map(Number);
    const product = digits.reduce((acc, d) => acc * d, 1);
    if (product > maxProduct) {
      maxProduct = product;
    }
  }
​
  return maxProduct;
}