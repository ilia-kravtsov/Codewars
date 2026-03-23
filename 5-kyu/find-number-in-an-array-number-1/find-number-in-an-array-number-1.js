function duplicateOrUnique(arr){
  var len = arr.length, sum = 0, i = 0;
  for (; i < len; i++) sum += arr[i];
​
  if ((len & 1) === 0) {
    var n = len - 1;
    return sum - n * (n + 1) / 2;
  }
​
  var n2 = (len + 1) / 2;
  var s2 = n2 * (n2 + 1) / 2;
  var unique = 2 * s2 - sum;
​
  return unique >= 1 && unique <= n2
    ? unique
    : sum - (len - 1) * len / 2;
}