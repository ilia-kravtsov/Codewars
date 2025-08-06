function amountOfPages(summary) {
  let digits = 0;
  let n = 0;
​
  while (digits < summary) {
    n++;
    digits += n.toString().length;
  }
​
  return n;
}