​
String.prototype.every = function (fn, thisArg) {
  return toArray(this).every(fn, thisArg);
};
​
String.prototype.reduce = function (fn, init) {
  const arr = toArray(this);
  return arguments.length > 1
    ? arr.reduce(fn, init)
    : arr.reduce(fn);
};
​
String.prototype.reduceRight = function (fn, init) {
  const arr = toArray(this);
  return arguments.length > 1
    ? arr.reduceRight(fn, init)
    : arr.reduceRight(fn);
};
​
String.prototype.sort = function (fn) {
  return toArray(this).sort(fn).join('');
};
​
String.prototype.reverse = function () {
  return toArray(this).reverse().join('');
};
​
String.prototype.push = function (...args) {
  return this + args.join('');
};
​
String.prototype.pop = function () {
  return this.slice(0, -1);
};
​
String.prototype.shift = function () {
  return this.slice(1);
};
​
String.prototype.unshift = function (...args) {
  return args.join('') + this;
};
​
String.prototype.splice = function (start, deleteCount, ...items) {
  const arr = toArray(this);
  arr.splice(start, deleteCount, ...items.join('').split(''));
  return arr.join('');
};