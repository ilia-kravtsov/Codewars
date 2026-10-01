function money_value(s) {
  s = s.trim();
  
  if (s === '') return 0.0;
  
  s = s.replace(/\s/g, '');
  
  if ((s.match(/\$/g) || []).length > 1) return 0.0;
  
  if (s.includes('$')) {
    s = s.replace('$', '');
  }
  
  let isNegative = false;
  if (s.startsWith('-')) {
    isNegative = true;
    s = s.substring(1);
  }
  
  if (s === '') return 0.0;
  
  const numberRegex = /^(\d+\.?\d*|\.\d+)$/;
  if (!numberRegex.test(s)) return 0.0;
  
  const num = parseFloat(s);
  
  if (isNaN(num)) return 0.0;
  
  return isNegative ? -num : num;
}