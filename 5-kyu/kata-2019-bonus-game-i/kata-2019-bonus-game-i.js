function calc(cards) {
  const n = cards.length;
  const memo = Array.from({ length: n }, () => Array(n).fill(null));
​
  function dp(l, r) {
    if (l > r) return 0;
​
    if (memo[l][r] !== null) return memo[l][r];
​
    const turn = n - (r - l);
    const coef = 2 ** turn;
​
    const takeLeft = cards[l] * coef + dp(l + 1, r);
    const takeRight = cards[r] * coef + dp(l, r - 1);
​
    memo[l][r] = Math.max(takeLeft, takeRight);
    return memo[l][r];
  }
​
  return dp(0, n - 1);
}