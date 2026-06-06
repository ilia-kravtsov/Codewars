function counterfeitDollar(results) {
  const coins = "ABCDEFGHIJKL";
  const matches = [];
​
  const getOutcome = (left, right, coin, type) => {
    let l = 0;
    let r = 0;
​
    for (const c of left) {
      if (c === coin) l += type === "heavy" ? 1 : -1;
    }
​
    for (const c of right) {
      if (c === coin) r += type === "heavy" ? 1 : -1;
    }
​
    if (l === r) return "even";
    return l > r ? "up" : "down";
  };
​
  for (const coin of coins) {
    for (const type of ["light", "heavy"]) {
      let valid = true;
​
      for (const result of results) {
        const [left, right, outcome] = result.split(" ");
​
        if (getOutcome(left, right, coin, type) !== outcome) {
          valid = false;
          break;
        }
      }
​
      if (valid) {
        matches.push({ coin, type });
      }
    }
  }
​
  if (matches.length !== 1) return "???";
​
  const { coin, type } = matches[0];
  return `${coin} is the counterfeit coin and it is ${type}.`;
}