function encode(input) {
  if (!input) return '';
​
  let result = '';
  let prevAlpha = null;
​
  for (let ch of input) {
    if (/[a-z]/i.test(ch)) {
      const current = ch.toUpperCase();
​
      if (!prevAlpha) {
        result += current;
        prevAlpha = current;
        continue;
      }
​
      const shift = prevAlpha.charCodeAt(0) - 64;
      const code =
        ((current.charCodeAt(0) - 65 + shift) % 26) + 65;
​
      const encoded = String.fromCharCode(code);
​
      result += encoded;
      prevAlpha = current;
    } else {
      result += ch;
    }
  }
​
  return result;
}
​
function decode(input) {
  if (!input) return '';
​
  let result = '';
  let prevAlpha = null;
​
  for (let ch of input) {
    if (/[a-z]/i.test(ch)) {
      const current = ch.toUpperCase();
​
      if (!prevAlpha) {
        result += current;
        prevAlpha = current;
        continue;