function meters(x) {
  const units = [
    { value: 1e24, symbol: "Ym" },
    { value: 1e21, symbol: "Zm" },
    { value: 1e18, symbol: "Em" },
    { value: 1e15, symbol: "Pm" },
    { value: 1e12, symbol: "Tm" },
    { value: 1e9,  symbol: "Gm" },
    { value: 1e6,  symbol: "Mm" },
    { value: 1e3,  symbol: "km" },
    { value: 1,    symbol: "m" }
  ];
​
  for (let u of units) {
    if (x >= u.value) {
      let scaled = x / u.value;
      return (scaled % 1 === 0 ? scaled.toString() : scaled.toString()) + u.symbol;
    }
  }
}