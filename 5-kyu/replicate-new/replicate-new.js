function nouveau(Constructor, ...args) {
  const instance = Object.create(Constructor.prototype);
  const result = Constructor.apply(instance, args);
  return (result && (typeof result === 'object' || typeof result === 'function')) ? result : instance;
}
​