function sumTheTreeValues(root) {
  if (root === null) return 0;
  return root.value + sumTheTreeValues(root.left) + sumTheTreeValues(root.right);
}