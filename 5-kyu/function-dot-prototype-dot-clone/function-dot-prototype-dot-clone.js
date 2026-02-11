Object.defineProperty(Function.prototype, 'clone', {
  value: function clone() {
    var src = Function.prototype.toString.call(this).trim();
​
    function splitParams(s) {
      s = (s || '').trim();
      if (!s) return [];
      return s.split(',').map(function (x) { return x.trim(); }).filter(Boolean);
    }
​
    function make(params, body, isAsync) {
      var fn;
      if (isAsync) {
        fn = new (Object.getPrototypeOf(async function () {}).constructor)(
          params.length ? params.join(',') : '',
          body
        );
      } else {
        fn = new Function(params, body);
      }
​
      if (this && this.prototype) {
        try {
          fn.prototype = this.prototype;
        } catch (_) {}
      }
      return fn;
    }
​
    var m = src.match(/^function\b[^(]*\(([^)]*)\)\s*\{([\s\S]*)\}\s*$/);
    if (m) return make.call(this, splitParams(m[1]), m[2], false);
​
    m = src.match(/^async\s+function\b[^(]*\(([^)]*)\)\s*\{([\s\S]*)\}\s*$/);
    if (m) return make.call(this, splitParams(m[1]), m[2], true);
​
    var isAsyncArrow = false;
    if (/^async\b/.test(src)) {
      isAsyncArrow = true;
      src = src.replace(/^async\s+/, '');
    }
​