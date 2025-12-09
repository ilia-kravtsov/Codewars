function reverseInParens(text){
  let stack = [];
  
  for (let ch of text) {
    if (ch !== ')') stack.push(ch);
    else {
      let acc = '';
      while (stack.length && stack[stack.length - 1] !== '(') acc = stack.pop() + acc;
      stack.pop();
      acc = acc.split('').reverse().join('');
      acc = acc.replace(/\(/g, '#').replace(/\)/g, '(').replace(/#/g, ')');
      acc = '(' + acc + ')';
      stack.push(acc);
    }
  }
  
  return stack.join('');
}
​