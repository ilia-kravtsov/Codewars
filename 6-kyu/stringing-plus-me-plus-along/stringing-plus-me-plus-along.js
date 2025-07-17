function createMessage(word) {
  const words = [word];
​
  function next(nextWord) {
    if (nextWord === undefined) {
      return words.join(' ');
    }
    words.push(nextWord);
    return next;
  }
​
  return next;
}