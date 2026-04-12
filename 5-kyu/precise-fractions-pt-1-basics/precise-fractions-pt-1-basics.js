​
  if (whole === 0) return sign + rem + '/' + d;
​
  return sign + whole + ' ' + rem + '/' + d;
};
​
Fraction.prototype.add = function (value) {
  const v = toFraction(value);
  return new Fraction(
    this.n * v.d + v.n * this.d,
    this.d * v.d
  );
};
​
Fraction.prototype.subtract = function (value) {
  const v = toFraction(value);
  return new Fraction(
    this.n * v.d - v.n * this.d,
    this.d * v.d
  );
};
​
Fraction.prototype.multiply = function (value) {
  const v = toFraction(value);
  return new Fraction(
    this.n * v.n,
    this.d * v.d
  );
};
​
Fraction.prototype.divide = function (value) {
  const v = toFraction(value);
  return new Fraction(
    this.n * v.d,
    this.d * v.n
  );
};