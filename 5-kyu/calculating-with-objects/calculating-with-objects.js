Num.prototype[Symbol.toPrimitive] = function (hint) {
  return this.num;
};