function hasSubpattern(string) {
  const n = string.length;
  
  for (let len = 1; len <= n / 2; len++) {
    if (n % len !== 0) continue;
    
    const pattern = string.slice(0, len);
    let isRepeating = true;
    
    for (let i = len; i < n; i += len) {
      if (string.slice(i, i + len) !== pattern) {
        isRepeating = false;
        break;
      }
    }
    
    if (isRepeating) return true;
  }
  
  return false;
}