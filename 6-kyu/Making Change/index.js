const makeChange = (amount) => {
  const coins = [
    ['H', 50],
    ['Q', 25],
    ['D', 10],
    ['N', 5],
    ['P', 1]
  ];
  
  const result = {};
  
  for (const [symbol, value] of coins) {
    if (amount >= value) {
      result[symbol] = Math.floor(amount / value);
      amount %= value;
    }
  }
  
  return result;
};