/*
100th Kata
You are given a message (text) that you choose to read in a mirror (weirdo). Return what you would see, complete with the mirror frame. Example:

'Hello World'

would give:


Words in your solution should be left-aligned.
*/
function mirror(text){
  const words = text.split(' ');
  
  const maxLength = Math.max(...words.map(word => word.length));
  const frame = '*'.repeat(maxLength + 4); 
  
  const mirroredWords = words.map(word => {
    const mirroredWord = word.split('').reverse().join('');
    const padding = ' '.repeat(maxLength - word.length);
    return `* ${mirroredWord}${padding} *`;
  });
  
  return [frame, ...mirroredWords, frame].join('\n');
}