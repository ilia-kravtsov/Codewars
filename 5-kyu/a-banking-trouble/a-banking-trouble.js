function makeOp(opName) {
  var protoOp = Account && Account.prototype && Account.prototype[opName];
  if (typeof protoOp !== 'function') throw new Error('Unsupported operation: ' + opName);
​
  return function (account, amount) {
    if (account == null || (typeof account !== 'object' && typeof account !== 'function')) {
      throw new TypeError('Invalid account');
    }
​
    var safeOperation = protoOp.bind(account);
​
    return this.gateway.doOperation(amount, safeOperation);
  };
}
​
function OnlineBank() {
  this.gateway = new Gateway();
}
​
OnlineBank.prototype.deposit = makeOp('deposit');