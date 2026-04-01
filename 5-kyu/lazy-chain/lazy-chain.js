function lazyChain(arg) {
  const calls = [];
​
  return {
    invoke(method, ...args) {
      calls.push(value => value[method](...args));
      return this;
    },
    value() {
      return calls.reduce((res, fn) => fn(res), arg);
    }
  };
}