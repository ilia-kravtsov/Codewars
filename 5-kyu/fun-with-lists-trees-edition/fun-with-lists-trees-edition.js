function flatten(head) {
  if (!head) return null;
​
  const values = new Set();
​
  function collect(root) {
    if (!root) return;
    values.add(root.value);
    collect(root.left);
    collect(root.right);
  }
​
  let current = head;
  while (current) {
    collect(current.data);
    current = current.next;
  }
​
  const sorted = [...values].sort((a, b) => a - b);
  if (sorted.length === 0) return null;
​
  const nodes = sorted.map(v => new TreeNode(v, null, null));
​
  for (let i = 0; i < nodes.length; i++) {
    const left = 2 * i + 1;
    const right = 2 * i + 2;
​
    if (left < nodes.length) nodes[i].left = nodes[left];
    if (right < nodes.length) nodes[i].right = nodes[right];
  }
​
  return nodes[0];
}