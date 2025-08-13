Array.prototype.reduce = function (process, initial) {
  let hasInitial = arguments.length > 1;
  let acc = hasInitial ? initial : this[0];
  let startIndex = hasInitial ? 0 : 1;
​
  for (let i = startIndex; i < this.length; i++) {
    acc = process(acc, this[i], i, this);
  }
​
  return acc;
};