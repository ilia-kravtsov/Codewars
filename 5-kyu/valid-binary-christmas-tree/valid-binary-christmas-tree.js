function isValidTree(tree) {
  if (!tree || tree.ornament !== 'star') return false;
​
  function validate(node, isRoot) {
    if (!node) return true;
​
    const hasLeft = !!node.left;
    const hasRight = !!node.right;
    const childrenCount = (hasLeft ? 1 : 0) + (hasRight ? 1 : 0);
​
    if (!isRoot) {
      if (childrenCount === 0 && node.color !== 'blue') return false;
      if (childrenCount > 0 && node.color !== 'red') return false;
    }
​
    return validate(node.left, false) && validate(node.right, false);
  }
​
  return validate(tree, true);
}
​