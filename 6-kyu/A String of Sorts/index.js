function sortString(string, ordering) {
  const order = [...new Set(ordering)];
  const indexMap = new Map();
  order.forEach((ch, i) => indexMap.set(ch, i));
​
  const inOrder = [];
  const notInOrder = [];
​
  for (const ch of string) {
    if (indexMap.has(ch)) {
      inOrder.push(ch);
    } else {
      notInOrder.push(ch);
    }
  }
​
  inOrder.sort((a, b) => indexMap.get(a) - indexMap.get(b));
​
  return inOrder.join('') + notInOrder.join('');
}