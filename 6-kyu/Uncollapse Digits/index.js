function uncollapse(digits) {
  const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const result = [];
  let i = 0;
  
  while (i < digits.length) {
    for (const num of numbers) {
      if (digits.startsWith(num, i)) {
        result.push(num);
        i += num.length;
        break;
      }
    }
  }
  
  return result.join(' ');
}