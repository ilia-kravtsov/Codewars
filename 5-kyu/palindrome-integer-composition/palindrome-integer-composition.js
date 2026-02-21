function values(n){
  if (n <= 0) return 0;
​
  function isPal(x){
    var s = String(x);
    for (var i = 0, j = s.length - 1; i < j; i++, j--) {
      if (s.charCodeAt(i) !== s.charCodeAt(j)) return false;
    }
    return true;
  }
​
  var limit = Math.floor(Math.sqrt(n - 1));
  if (limit < 2) return 0;
​
  var seen = new Set();
​
  for (var a = 1; a < limit; a++) {
    var b = a + 1;
    var sum = a * a + b * b;
​
    while (sum < n) {
      if (isPal(sum)) seen.add(sum);
      b++;
      if (b > limit) break;
      sum += b * b;
    }
  }
​
  return seen.size;
}