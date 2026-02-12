function lookAndSayAndSum(n) {
  let cur = [1];
​
  for (let step = 1; step < n; step++) {
    const next = [];
    const L = cur.length;
​
    let i = 0;
    while (i < L) {
      const d = cur[i];
      let j = i + 1;
​
      while (j < L && cur[j] === d) j++;
      const count = j - i;
​
      next.push(count, d);
​
      i = j;
    }
​
    cur = next;
  }
​
  let sum = 0;
  for (let i = 0; i < cur.length; i++) sum += cur[i];
  return sum;
}
​