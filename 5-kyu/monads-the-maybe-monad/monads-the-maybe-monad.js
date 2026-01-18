/////////////////////////////////////////////////////////////////
function Maybe () {
  Object.freeze(this);
}
​
/////////////////////////////////////////////////////////////////
function Just (x) {
  this.toString = function () { return "Just " + x.toString(); };
  this.just = x;
  Object.freeze(this);
}
Just.prototype = new Maybe();
Just.prototype.constructor = Just;
​
/////////////////////////////////////////////////////////////////
function Nothing () {
  this.toString = function () { return "Nothing"; };
  Object.freeze(this);
}
Nothing.prototype = new Maybe();
Nothing.prototype.constructor = Nothing;
​
/////////////////////////////////////////////////////////////////
Maybe.unit = function (x) {
  return new Just(x);
};
​
Maybe.bind = function (f) {
  return function (m) {
    if (!(m instanceof Maybe)) {
      throw new Error("bind expects a Maybe");
    }
    if (m instanceof Nothing) {
      return new Nothing();
    }
    return f(m.just);