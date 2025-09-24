var compose = function(value, ...fns) {
  return fns.reduce((acc, fn) => fn(acc), value);
};