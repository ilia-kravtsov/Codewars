function regexBelow(n){
  n = BigInt(n);
  if (n <= 1n) return '^(?!)$';
​
  const max = (n - 1n).toString();
​
  const range = (a, b) => {
    if (a > b) return '';
    if (a === b) return String(a);
    if (a === 0 && b === 9) return '\\d';
    return `[${a}-${b}]`;
  };
​
  const any = len => {
    if (!len) return '';
    if (len === 1) return '\\d';
    return `\\d{${len}}`;
  };
​
  const leSameLen = (s, first) => {
    if (!s.length) return '';
    const d = s.charCodeAt(0) - 48;
    const low = first ? 1 : 0;
​
    if (s.length === 1) {
      return d < low ? '' : range(low, d);
    }
​
    const out = [];
​
    if (d > low) out.push(range(low, d - 1) + any(s.length - 1));
​
    const tail = leSameLen(s.slice(1), false);
    if (d >= low && tail !== '') out.push(String(d) + tail);
​
    return out.length === 1 ? out[0] : `(?:${out.join('|')})`;
  };
​
  const parts = [];
​
  for (let len = 1; len < max.length; len++) {
    parts.push(len === 1 ? '[1-9]' : `[1-9]${any(len - 1)}`);
  }
​
  parts.push(leSameLen(max, true));
​
  return `^(?:${parts.join('|')})$`;
}