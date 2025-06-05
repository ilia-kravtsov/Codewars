function nbMonths(startPriceOld, startPriceNew, savingPerMonth, percentLossByMonth) {
  if (startPriceOld >= startPriceNew) {
    return [0, Math.round(startPriceOld - startPriceNew)];
  }
​
  let months = 0;
  let savings = 0;
  let oldPrice = startPriceOld;
  let newPrice = startPriceNew;
  let percent = percentLossByMonth;
​
  while ((oldPrice + savings) < newPrice) {
    months++;
    if (months % 2 === 0) {
      percent += 0.5;
    }
    oldPrice *= (1 - percent / 100);
    newPrice *= (1 - percent / 100);
    savings += savingPerMonth;
  }
​
  const leftover = Math.round(oldPrice + savings - newPrice);
  return [months, leftover];
}
​