function decode(str) {
  if (typeof str !== 'string') {
    return "Input is not a string";
  }
  
  return str.split('').map(char => {
    const code = char.charCodeAt(0);
    if (code >= 97 && code <= 122) {
      return String.fromCharCode(219 - code);
    } else if (code >= 65 && code <= 90) {
      return String.fromCharCode(155 - code);
    }
    return char;
  }).join('');
}