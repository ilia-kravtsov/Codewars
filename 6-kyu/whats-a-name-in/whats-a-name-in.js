function nameInStr(str, name) {
  str = str.toLowerCase();
  name = name.toLowerCase();
  
  let j = 0;
  
  for (let i = 0; i < str.length && j < name.length; i++) {
    if (str[i] === name[j]) {
      j++;
    }
  }
  
  return j === name.length; 
}