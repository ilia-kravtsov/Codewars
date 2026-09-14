function fib(n) {
  let a = 0;
  let b = 1;
​
  for (let i = 1; i < n; i++) {
    [a, b] = [b, a + b];
  }
​
  return a;
}