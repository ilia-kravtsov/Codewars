function maxSum(root) {
    if (!root) return 0;
​
    function helper(node) {
        if (!node.left && !node.right) {
            return node.value; 
        }
​
        if (!node.left) {
            return node.value + helper(node.right); 
        }
​
        if (!node.right) {
            return node.value + helper(node.left); 
        }
​
        return node.value + Math.max(helper(node.left), helper(node.right));
    }
​
    return helper(root);
}