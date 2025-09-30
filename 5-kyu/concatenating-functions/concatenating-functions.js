Function.prototype.pipe = function(fn) {
  const firstFn = this;
  return function(x) {
    return fn(firstFn(x));
  };
};
​
var addOne = function(e) {
    return e + 1;
};
​
var square = function(e) {
    return e * e;
};
​
var result = [1,2,3,4,5].map(addOne.pipe(square));
​