function packBasket(basket, pile) {
  const nums = (pile.match(/\d+/g) || []).map(Number);
​
  const cap = basket;
  const dp = Array(cap + 1).fill(false);
  dp[0] = true;
​
  for (const w of nums) {
    if (w > cap) continue;
    for (let s = cap - w; s >= 0; s--) {
      if (dp[s]) dp[s + w] = true;
    }
  }
​
  let best = 0;
  for (let s = cap; s >= 0; s--) {
    if (dp[s]) { best = s; break; }
  }
​
  return `The basket weighs ${best} kilograms`;
}