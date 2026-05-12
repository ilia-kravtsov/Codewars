function defaults(obj, defs) {
  obj = obj || {};
  var result = {};
​
  for (var key in defs) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      result[key] = obj[key];
    } else {
      var value = defs[key];
​
      if (value && value.__mandatory__) {
        throw value.error;
      }
​
      result[key] = value;
    }
  }
​
  for (var key in obj) {
    if (!Object.prototype.hasOwnProperty.call(result, key)) {
      result[key] = obj[key];
    }
  }
​
  return result;
}
​
function mandatory(err) {
  return {
    __mandatory__: true,
    error: err
  };
}