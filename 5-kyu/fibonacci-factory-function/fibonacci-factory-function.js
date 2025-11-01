function genfib() {
  let a = 0, b = 1;
  return function() {
    let r = a;
    [a, b] = [b, a + b];
    return r;
  };
}
​