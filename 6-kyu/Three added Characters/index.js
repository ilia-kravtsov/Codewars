function addedChar(s1, s2){
  const count = {};
​
  for (const c of s1) {
    count[c] = (count[c] || 0) - 1;
  }
  
  for (const c of s2) {
    count[c] = (count[c] || 0) + 1;
  }
  
  for (const c in count) {
    if (count[c] === 3) return c;
  }
}