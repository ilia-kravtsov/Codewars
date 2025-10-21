function Jar() {
  this.total = 0;
  this.contents = {};
}
​
Jar.prototype.add = function(amount, type) {
  this.total += amount;
  this.contents[type] = (this.contents[type] || 0) + amount;
};
​
Jar.prototype.pourOut = function(amount) {
  if (this.total === 0) return;
  const ratio = amount / this.total;
  for (let t in this.contents) {
    this.contents[t] -= this.contents[t] * ratio;
  }
  this.total -= amount;
};
​
Jar.prototype.getTotalAmount = function() {
  return this.total;
};
​
Jar.prototype.getConcentration = function(type) {
  if (this.total === 0) return 0;
  return (this.contents[type] || 0) / this.total;
};
​