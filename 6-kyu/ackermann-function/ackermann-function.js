const Ackermann = function (m, n) {
​
  if (
    typeof m !== 'number' || typeof n !== 'number' ||
    !Number.isInteger(m) || !Number.isInteger(n) ||
    m < 0 || n < 0
  ) return null;
​
  const A = (m, n) => {
    if (m === 0) return n + 1;
    if (n === 0) return A(m - 1, 1);
    return A(m - 1, A(m, n - 1));
  };
​
  return A(m, n);
};