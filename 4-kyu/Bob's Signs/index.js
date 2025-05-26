/*
Overview
You need to help Bob be a good businessman and not charge people too much for his signs.

Description
Bob is running a business that creates signs for people. He can charge much less than his competitors because he charges by letter instead by the entire sign. He can take a sign and change a few letters to make a new sign much more cheaply than a competitor can make a sign from scratch.

The only problem is Bob is not very good at pricing these changes. He wants to be able to look at a sign and a customer's request and quickly be able to give the customer an estimate for the total cost.

Task
Write a class SignMaster that is able to help Bob estimate prices quickly. Bob will need to be able to changePrices(prices) so that he can adapt to the changing market. He also needs to estimatePrice(oldSign, newSign) so that he can give his price estimates to his customers.

The changePrices method takes an object that specifies the new prices. The values are the cost of doing an operation (add or remove) and the keys will be add or rem depending on the operation. Bob does not always want to change the price for both adding and removing letters, so this method should handle incomplete input. Before this method is called, the sign changes should be free.

estimatePrice takes two strings. The first string is the old sign of the customer and the second is their request. This method should return the cost of changing the sign from the old message to the new message. If there are multiple ways to change the sign, this method should return the cheapest way.
*/

var SignMaster = function () {
  this.prices = { add: 0, rem: 0 };
};

SignMaster.prototype.changePrices = function (prices) {
  if (prices.add !== undefined) this.prices.add = prices.add;
  if (prices.rem !== undefined) this.prices.rem = prices.rem;
};

SignMaster.prototype.estimatePrice = function (oldSign, newSign) {
  const m = oldSign.length;
  const n = newSign.length;
  const { add, rem } = this.prices;

  const dp = Array(m + 1)
    .fill(null)
    .map(() => Array(n + 1).fill(0));

  for (let i = 0; i <= m; i++) dp[i][0] = i * rem;
  for (let j = 0; j <= n; j++) dp[0][j] = j * add;

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (oldSign[i - 1] === newSign[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(dp[i - 1][j] + rem, dp[i][j - 1] + add);
      }
    }
  }

  return dp[m][n];
};