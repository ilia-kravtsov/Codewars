function validate(n) {
  const digits = n.toString().split('').map(Number);
  const length = digits.length;
​
  const processed = digits.map((digit, i) => {
    const shouldDouble = (length % 2 === 0) ? i % 2 === 0 : i % 2 !== 0;
    if (shouldDouble) {
      const doubled = digit * 2;
      return doubled > 9 ? doubled - 9 : doubled;
    }
    return digit;
  });
​
  const sum = processed.reduce((acc, val) => acc + val, 0);
  return sum % 10 === 0;
}
​