function preOrder(node) {
  if (!node) return [];
  return [node.data].concat(preOrder(node.left), preOrder(node.right));
}
​
function inOrder(node) {
  if (!node) return [];
  return [].concat(inOrder(node.left), [node.data], inOrder(node.right));
}
​
function postOrder(node) {
  if (!node) return [];
  return [].concat(postOrder(node.left), postOrder(node.right), [node.data]);
}