function spyOn(func) {
  let calls = 0;
  let argsHistory = [];
  let returnHistory = [];
​
  function spy(...args) {
    calls++;
    argsHistory.push(args);
    let result = func.apply(this, args);
    returnHistory.push(result);
    return result;
  }
​
  spy.callCount = function () {
    return calls;
  };
​
  spy.wasCalledWith = function (val) {
    return argsHistory.some(args => args.includes(val));
  };
​
  spy.returned = function (val) {
    return returnHistory.includes(val);
  };
​
  return spy;
}