function code(strng) {
  return [...strng].map(digit => {
    const binary = Number(digit).toString(2);
    return '0'.repeat(binary.length - 1) + '1' + binary;
  }).join('');
}
​
function decode(str) {
  let result = '';
  let i = 0;
​
  while (i < str.length) {
    let zeros = 0;
​
    while (str[i] === '0') {
      zeros++;
      i++;
    }
​
    i++;
​
    const bitLength = zeros + 1;
    const binary = str.slice(i, i + bitLength);
​
    result += parseInt(binary, 2);
    i += bitLength;
  }
​
  return result;
}