function allLeavesAtSameLevel(node) {
  let leafLevel = null;
​
  function dfs(n, level) {
    if (n === undefined) return true;
​
    const left = n.getLeft();
    const right = n.getRight();
​
    if (left === undefined && right === undefined) {
      if (leafLevel === null) leafLevel = level;
      return level === leafLevel;
    }
​
    return dfs(left, level + 1) && dfs(right, level + 1);
  }
​
  return dfs(node, 0);
}
​