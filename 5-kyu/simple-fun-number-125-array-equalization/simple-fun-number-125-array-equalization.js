function arrayEqualization(a, k) {
  let answer = Infinity;
​
  for (let x = 1; x <= 10; x++) {
    let updates = 0;
    let i = 0;
​
    while (i < a.length) {
      if (a[i] === x) {
        i++;
      } else {
        updates++;
        i += k;
      }
    }
​
    answer = Math.min(answer, updates);
  }
​
  return answer;
}