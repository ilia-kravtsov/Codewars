/*
You are given a non-null array of integers. Implement the method arrayToTree which creates a binary tree from its values in accordance to their order, while creating nodes by depth from left to right.

For example, given the array [17, 0, -4, 3, 15] you should create the following tree:

    17
   /  \
  0   -4
 / \
3   15 
The class TreeNode is available for you:

var TreeNode = function(value, left, right) {
  this.value = value;
  this.left = left;
  this.right = right;
};
*/
var TreeNode = function(value, left, right) {
  this.value = value;
  this.left = left;
  this.right = right;
};

function arrayToTree(array) {
  if (!array.length) {
    return undefined; 
  }

  const nodes = array.map(value => new TreeNode(value));
  for (let i = 0; i < nodes.length; i++) {
    if (2 * i + 1 < nodes.length) {
      nodes[i].left = nodes[2 * i + 1];
    }
    if (2 * i + 2 < nodes.length) {
      nodes[i].right = nodes[2 * i + 2];
    }
  }

  return nodes[0];
}