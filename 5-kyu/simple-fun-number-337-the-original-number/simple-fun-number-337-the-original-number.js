function originalNumber(s) {
  const count = {};
  for (const ch of s) count[ch] = (count[ch] || 0) + 1;
​
  const digits = Array(10).fill(0);
​
  digits[0] = count.Z || 0; 
  digits[2] = count.W || 0; 
  digits[4] = count.U || 0; 
  digits[6] = count.X || 0; 
  digits[8] = count.G || 0; 
​
  digits[1] = (count.O || 0) - digits[0] - digits[2] - digits[4];
  digits[3] = (count.H || 0) - digits[8];
  digits[5] = (count.F || 0) - digits[4];
  digits[7] = (count.S || 0) - digits[6];
  digits[9] = (count.I || 0) - digits[5] - digits[6] - digits[8];
​
  let result = '';
  for (let i = 0; i <= 9; i++) {
    result += String(i).repeat(digits[i]);
  }
​
  return result;
}
​