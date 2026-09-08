Object.create = function(prototype, properties) {
  if (
    prototype !== null &&
    (typeof prototype !== "object" && typeof prototype !== "function")
  ) {
    throw new TypeError("Object prototype may only be an Object or null");
  }
​
  const obj = {};
​
  Object.setPrototypeOf(obj, prototype);
​
  if (properties !== undefined) {
    Object.defineProperties(obj, properties);
  }
​
  return obj;
};