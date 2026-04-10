function countdown(times) {
  if (times >= 0) return [0];
​
  let current = -times;
  const history = [current];
​
  function step(change = 0) {
    current -= change + 1;
​
    if (current <= 0) {
      history.push(0);
      return history;
    }
​
    history.push(current);
    return step;
  }
​
  return step;
}