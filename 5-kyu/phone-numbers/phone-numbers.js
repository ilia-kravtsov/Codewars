function phoneNumber(phoneNumbers) {
  const root = {};
​
  for (const num of phoneNumbers) {
    let node = root;
    for (const d of num) {
      node[d] ??= {};
      node = node[d];
    }
  }
​
  let count = 0;
​
  (function walk(n) {
    for (const k in n) {
      count++;
      walk(n[k]);
    }
  })(root);
​
  return count;
}
​