function decode(r) {
  const num = parseInt(r.match(/^\d+/)[0]);
  const encoded = r.slice(String(num).length);
  
  function gcd(a, b) {
    while (b !== 0) {
      [a, b] = [b, a % b];
    }
    return a;
  }
  
  if (gcd(num, 26) !== 1) {
    return "Impossible to decode";
  }
  
  let result = '';
  
  for (let i = 0; i < encoded.length; i++) {
    const charCode = encoded.charCodeAt(i) - 97;
    
    for (let x = 0; x < 26; x++) {
      if ((num * x) % 26 === charCode) {
        result += String.fromCharCode(x + 97);
        break;
      }
    }
  }
  
  return result;
}