function giveTriang(per) {
  let count = 0;
​
  for (let a = 1; a <= per; a++) {
    for (let b = a; b <= per; b++) {
      let c2 = a * a + b * b + a * b;
      let c = Math.sqrt(c2);
      if (Number.isInteger(c)) {
        if (a + b + c <= per) count++;
      }
    }
  }
​
  return count;
}
​