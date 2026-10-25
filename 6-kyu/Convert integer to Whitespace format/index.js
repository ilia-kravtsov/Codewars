function whitespaceNumber(n) {
  if (n === 0) return " \n";
  
  const sign = n > 0 ? " " : "\t";
  const binary = Math.abs(n).toString(2);
  const bits = binary.replace(/0/g, " ").replace(/1/g, "\t");
  
  return sign + bits + "\n";
}