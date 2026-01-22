const RealDate = Date;
​
Date = class extends RealDate {
  constructor(...args) {
    if (args.length === 0) {
      return new RealDate('December 24, 2024');
    }
    return new RealDate(...args);
  }
};