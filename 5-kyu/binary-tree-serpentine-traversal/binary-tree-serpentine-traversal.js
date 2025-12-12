function serpentineTree(node) {
  if (!node) return [];
  const res = [];
  let q = [node];
  let leftToRight = true;
​
  while (q.length) {
    const next = [];
    const level = [];
    for (let n of q) {
      level.push(n.data);
      if (n.left) next.push(n.left);
      if (n.right) next.push(n.right);
    }
    if (!leftToRight) level.reverse();
    res.push(...level);
    q = next;
    leftToRight = !leftToRight;
  }
​
  return res;
}
​