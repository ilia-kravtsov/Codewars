function encode(input) {
  if (!input) return "";
  
  let result = "";
  let count = 1;
  
  for (let i = 1; i <= input.length; i++) {
    if (i < input.length && input[i] === input[i - 1]) {
      count++;
    } else {
      result += count + input[i - 1];
      count = 1;
    }
  }
  
  return result;
}
​
function decode(input) {
  if (!input) return "";
  
  let result = "";
  let count = "";
  
  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    if (char >= '0' && char <= '9') {
      count += char;
    } else {
      result += char.repeat(parseInt(count, 10));
      count = "";
    }
  }
  
  return result;
}