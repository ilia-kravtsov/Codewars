function cut(number, target) {
  let ans = -1;
  const n = number.length;

  function dfs(pos, sum, current) {
    if (sum > target) return;

    if (pos === n) {
      const total = sum + current;
      if (total <= target && total > ans) ans = total;
      return;
    }

    const digit = number.charCodeAt(pos) - 48;

    dfs(pos + 1, sum, current * 10 + digit);

    dfs(pos + 1, sum + current, digit);
  }

  dfs(1, 0, Number(number[0]));

  return ans;
}