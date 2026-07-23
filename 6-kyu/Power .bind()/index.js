Function.prototype.bind = function (ctx) {
  const fn = this._originalFn || this;
  
  const boundFn = function() {
    return fn.call(ctx);
  };
  
  boundFn._originalFn = fn;
  
  return boundFn;
};