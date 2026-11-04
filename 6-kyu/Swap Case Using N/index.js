function swap(s, n) {
  const bits = n.toString(2);
  let bitIndex = 0;
  let result = '';
  
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    
    if (/[a-zA-Z]/.test(ch)) {
      const bit = bits[bitIndex % bits.length];
      if (bit === '1') {
        if (ch === ch.toUpperCase()) {
          result += ch.toLowerCase();
        } else {
          result += ch.toUpperCase();
        }
      } else {
        result += ch;
      }
      bitIndex++;
    } else {
      result += ch;
    }
  }
  
  return result;
}