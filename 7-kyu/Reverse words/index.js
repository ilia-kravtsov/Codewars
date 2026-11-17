function reverseWords(str) {
    const words = str.split(' ');
    const result = [];
  
    for (let i = 0; i < words.length; i++) {
        for (let j = words[i].length - 1; j >= 0; j--) {
            result.push(words[i][j]);
        }
      
        if (i !== words.length - 1) {
            result.push(' ');
        }
    }
  
    return result.join('');
}