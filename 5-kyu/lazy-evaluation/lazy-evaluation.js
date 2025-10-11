function Lazy() {
  var chain = [];
  this.add = function(fn) {
    var args = Array.prototype.slice.call(arguments, 1);
    chain.push({ fn: fn, args: args });
    return this;
  };
  this.invoke = function(target) {
    var result = target;
    for (var i = 0; i < chain.length; i++) {
      var entry = chain[i];
      var callArgs = entry.args.slice();
      if (Array.isArray(result)) {
        callArgs = callArgs.concat(result);
      } else {
        callArgs.push(result);
      }
      result = entry.fn.apply(null, callArgs);
    }
    return result;
  };
}
​