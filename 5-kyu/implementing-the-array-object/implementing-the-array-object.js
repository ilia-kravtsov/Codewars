class List {
  constructor(...initialValues) {
    this.length = 0;
    for (let i = 0; i < initialValues.length; i++) {
      this[i] = initialValues[i];
      this.length++;
    }
  }
  
  push(...values) {
    for (let i = 0; i < values.length; i++) {
      this[this.length] = values[i];
      this.length++;
    }
    return this.length;
  }
  
  pop() {
    if (this.length === 0) {
      return undefined;
    }
    const lastValue = this[this.length - 1];
    delete this[this.length - 1];
    this.length--;
    return lastValue;
  }
  
  shift() {
    if (this.length === 0) {
      return undefined;
    }
    const firstValue = this[0];
    for (let i = 1; i < this.length; i++) {
      this[i - 1] = this[i];
    }
    delete this[this.length - 1];
    this.length--;
    return firstValue;
  }
  