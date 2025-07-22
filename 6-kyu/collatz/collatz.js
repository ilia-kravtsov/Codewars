function collatz(n) {
  const sequence = [n];
​
  while (n !== 1) {
    n = n % 2 === 0 ? n / 2 : 3 * n + 1;
    sequence.push(n);
  }
​
  return sequence.join('->');
}