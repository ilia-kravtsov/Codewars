function verticalHistogramOf(s){
  let counts = {};
  
  for(let i = 0; i < s.length; i++){
    let c = s[i];
    if(c >= 'A' && c <= 'Z'){
      counts[c] = (counts[c] || 0) + 1;
    }
  }
  
  let letters = Object.keys(counts).sort();
  if(letters.length === 0) return '';
  
  let maxCount = 0;
  
  for(let letter of letters){
    if(counts[letter] > maxCount) maxCount = counts[letter];
  }
  
  let rows = [];
  
  for(let i = maxCount; i > 0; i--){
    let row = [];
    for(let letter of letters){
      if(counts[letter] >= i) row.push('*');
      else row.push(' ');
    }
    while(row[row.length - 1] === ' ') row.pop();
    rows.push(row.join(' '));
  }
  
  rows.push(letters.join(' '));
  
  return rows.join('\n');
}