function myFirstInterpreter(code) {
  let cell = 0;
  let output = '';
​
  for (let char of code) {
    if (char === '+') {
      cell = (cell + 1) % 256;
    } else if (char === '.') {
      output += String.fromCharCode(cell);
    }
  }
​
  return output;
}