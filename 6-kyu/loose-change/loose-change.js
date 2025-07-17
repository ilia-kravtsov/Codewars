function looseChange(cents) {
  cents = Math.floor(cents);
  if (cents <= 0) {
    return { Nickels: 0, Pennies: 0, Dimes: 0, Quarters: 0 };
  }
​
  const result = { Nickels: 0, Pennies: 0, Dimes: 0, Quarters: 0 };
​
  result.Quarters = Math.floor(cents / 25);
  cents %= 25;
​
  result.Dimes = Math.floor(cents / 10);
  cents %= 10;
​
  result.Nickels = Math.floor(cents / 5);
  cents %= 5;
​
  result.Pennies = cents;
​
  return result;
}