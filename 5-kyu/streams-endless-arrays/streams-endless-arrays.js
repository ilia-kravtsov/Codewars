class Stream {
  constructor(start, output, stepping) {
    this.start = start
    this.output = output
    this.stepping = stepping
  }
​
  head() {
    return this.output(this.start)
  }
​
  tail() {
    return new Stream(
      this.stepping(this.start),
      this.output,
      this.stepping
    )
  }
}
​