function flatten(root) {
  if (!root) return null;
​
  const set = new Set();
​
  function traverse(node) {
    if (!node) return;
​
    let current = node.value;
    while (current) {
      set.add(current.data);
      current = current.next;
    }
​
    traverse(node.left);
    traverse(node.right);
  }
​
  traverse(root);
​
  const values = Array.from(set).sort((a, b) => a - b);
​
  let head = null;
  let tail = null;
​
  for (const value of values) {
    const node = new ListNode(value);
    if (!head) {
      head = node;
      tail = node;
    } else {
      tail.next = node;
      tail = node;
    }
  }
​
  return head;
}
​