function f(s) {
  const n = s.length;
  
  for (let len = 1; len <= n; len++) {
    if (n % len === 0) {
      const k = n / len;
      const t = s.substring(0, len);
      
      let isRepeating = true;
      for (let i = 0; i < n; i++) {
        if (s[i] !== t[i % len]) {
          isRepeating = false;
          break;
        }
      }
      
      if (isRepeating) {
        return [t, k];
      }
    }
  }
  
  return [s, 1];
}