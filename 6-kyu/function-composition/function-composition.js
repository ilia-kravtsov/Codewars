function compose(f, g) {
  return function(...args) {
    return f(g(...args));
  };
}
​