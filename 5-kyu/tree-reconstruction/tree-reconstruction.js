function reconstructTree(inOrder, preOrder) {
  const pos = new Map();
  for (let i = 0; i < inOrder.length; i++) pos.set(inOrder[i], i);
​
  let p = 0;
​
  function build(l, r) {
    if (l > r) return [];
    const v = preOrder[p++];
    const m = pos.get(v);
    return [v, build(l, m - 1), build(m + 1, r)];
  }
​
  return build(0, inOrder.length - 1);
}
​