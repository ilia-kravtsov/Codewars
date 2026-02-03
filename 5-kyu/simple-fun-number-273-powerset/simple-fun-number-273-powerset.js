function powerset(nums) {
  const result = [];
  const current = [];
​
  function dfs(index) {
    if (index === nums.length) {
      result.push([...current]);
      return;
    }
​
    dfs(index + 1);
​
    current.push(nums[index]);
    dfs(index + 1);
    current.pop();
  }
​
  dfs(0);
  return result;
}
​