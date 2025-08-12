function construct(Class) {
  const args = Array.prototype.slice.call(arguments, 1);
  const obj = Object.create(Class.prototype);
  const result = Class.apply(obj, args);
  return (result && typeof result === 'object') ? result : obj;
}