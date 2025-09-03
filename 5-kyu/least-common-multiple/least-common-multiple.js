function lcm(...numbers) {
  if (numbers.length === 0) return 1;
​
  if (numbers.includes(0)) return 0;
​
  const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
​
  return numbers.reduce((acc, n) => {
    return (acc * n) / gcd(acc, n);
  });
}