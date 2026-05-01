function BloomFilter(arraySize) {
  this.array = new Array(arraySize).fill(false);
  this.hashFns = Array.prototype.slice.call(arguments, 1);
}
​
BloomFilter.prototype.add = function(str) {
  for (let hashFn of this.hashFns) {
    const index = hashFn(str) % this.array.length;
    this.array[index] = true;
  }
};
​
BloomFilter.prototype.check = function(str) {
  for (let hashFn of this.hashFns) {
    const index = hashFn(str) % this.array.length;
​
    if (!this.array[index]) {
      return false;
    }
  }
​
  return true;
};