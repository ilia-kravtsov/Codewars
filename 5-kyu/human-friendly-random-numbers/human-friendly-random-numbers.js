function RNG(n) {
  this.n = n
  this.pool = []
  this.index = 0
  this._refill()
}
​
RNG.prototype._refill = function () {
  this.pool = Array.from({ length: this.n }, (_, i) => i)
​
  for (let i = this.pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[this.pool[i], this.pool[j]] = [this.pool[j], this.pool[i]]
  }
​
  this.index = 0
}
​
RNG.prototype.rand = function () {
  if (this.index >= this.n) {
    this._refill()
  }
​
  return this.pool[this.index++]
}
​