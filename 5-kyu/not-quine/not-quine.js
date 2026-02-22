var notQuine = function () {
  var src = notQuine.toString();
  var used = {};
  for (var i = 0; i < src.length; i++) {
    used[src.charCodeAt(i)] = true;
  }
​
  var result = "";
  for (var c = 32; c <= 254; c++) {
    if (!used[c]) {
      result += String.fromCharCode(c);
    }
  }
​
  return result;
};