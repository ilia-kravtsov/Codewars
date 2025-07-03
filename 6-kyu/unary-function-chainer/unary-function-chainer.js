function chained(functions) {
  return function(input) {
    return functions.reduce((acc, fn) => fn(acc), input);
  };
}