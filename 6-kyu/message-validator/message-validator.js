function isAValidMessage(message) {
  if (message === "") return true;  
​
  let i = 0;
  while (i < message.length) {
    let numStr = "";
    while (i < message.length && /\d/.test(message[i])) {
      numStr += message[i];
      i++;
    }
    if (numStr === "") return false; 
    let num = parseInt(numStr, 10);
​
    let word = "";
    for (let j = 0; j < num && i < message.length; j++, i++) {
      if (!/[a-zA-Z]/.test(message[i])) return false; 
      word += message[i];
    }
​
    if (word.length !== num) return false; 
  }
​
  return true;
}