var Vector = function (components) {
  this.components = components;
​
  this.checkLengths = function(other) {
    if (this.components.length !== other.components.length) {
      throw new Error("Vectors have different lengths");
    }
  };
​
  this.add = function(other) {
    this.checkLengths(other);
    var result = [];
    for (var i = 0; i < this.components.length; i++) {
      result.push(this.components[i] + other.components[i]);
    }
    return new Vector(result);
  };
​
  this.subtract = function(other) {
    this.checkLengths(other);
    var result = [];
    for (var i = 0; i < this.components.length; i++) {
      result.push(this.components[i] - other.components[i]);
    }
    return new Vector(result);
  };
​
  this.dot = function(other) {
    this.checkLengths(other);
    var sum = 0;
    for (var i = 0; i < this.components.length; i++) {
      sum += this.components[i] * other.components[i];
    }
    return sum;
  };
​
  this.norm = function() {
    var sum = 0;
    for (var i = 0; i < this.components.length; i++) {