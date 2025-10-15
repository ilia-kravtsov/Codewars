Object.defineProperty(Function.prototype, 'wrap', {
  value: function(wrappedFunc) {
    const original = this;
    return function(...args) {
      return wrappedFunc(original, ...args);
    };
  }
});
​