function fromNb2Str(n, sys) {
  function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
  }
  
  for (let i = 0; i < sys.length; i++) {
    for (let j = i + 1; j < sys.length; j++) {
      if (gcd(sys[i], sys[j]) !== 1) {
        return "Not applicable";
      }
    }
  }
  
  const product = sys.reduce((acc, mod) => acc * mod, 1);
  if (product <= n) {
    return "Not applicable";
  }
  
  let result = "";
  for (let mod of sys) {
    result += "-" + (n % mod) + "-";
  }
  
  return result;
}