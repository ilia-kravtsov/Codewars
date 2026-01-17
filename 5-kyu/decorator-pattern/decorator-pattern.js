function Decorator(options) {
  if (!options) {
    options = {};
  }
  this.before = options.before;
  this.after = options.after;
}
​
Decorator.prototype.decorate = function decorate(fn) {
  var decoratorArgs = Array.prototype.slice.call(arguments, 1);
  var before = this.before;
  var after = this.after;
​
  return function () {
    var args = arguments;
​
    if (before) {
      args = before.apply(null, decoratorArgs.concat(Array.prototype.slice.call(args)));
    }
​
    var result = fn.apply(null, args);
​
    if (after) {
      result = after.apply(null, decoratorArgs.concat(result));
    }
​
    return result;
  };
};
​