var spaghettiCode = function(plate) {
  var rows = Array.isArray(plate) ? plate : String(plate).split('\n');
  var counts = {};
​
  for (var i = 0; i < rows.length; i++) {
    for (var j = 0; j < rows[i].length; j++) {
      var ch = rows[i][j];
      if (ch >= 'A' && ch <= 'Z') counts[ch] = (counts[ch] || 0) + 1;
    }
  }
​
  var best = '';
  var max = 0;
​
  for (var key in counts) {
    if (counts[key] > max) {
      max = counts[key];
      best = key;
    }
  }
​
  return best;
};