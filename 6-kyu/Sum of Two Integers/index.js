function add(x, y) {
  while (y !== 0) {
    let carry = x & y;
    x = x ^ y;
    y = carry << 1;
  }
  return x;
}