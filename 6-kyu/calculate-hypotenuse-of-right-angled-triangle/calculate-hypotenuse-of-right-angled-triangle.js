function calculateHypotenuse(a, b) {
  if (typeof a !== "number" || typeof b !== "number" || isNaN(a) || isNaN(b)) {
    throw new Error("Both arguments must be valid numbers.");
  }
  if (a <= 0 || b <= 0) {
    throw new Error("Both arguments must be greater than zero.");
  }
​
  const hypotenuse = Math.sqrt(a * a + b * b);
​
  return Math.round(hypotenuse * 1000) / 1000;
}