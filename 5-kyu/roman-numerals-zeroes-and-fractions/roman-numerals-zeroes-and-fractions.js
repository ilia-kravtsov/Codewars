function romanFractions(integer, fraction) {
  if (
    integer < 0 ||
    integer > 5000 ||
    (fraction !== undefined && (fraction < 0 || fraction > 11))
  ) {
    return "NaR";
  }
​
  const romanMap = [
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"]
  ];
​
  const fractionMap = [
    "",
    ".",
    ":",
    ":.",
    "::",
    ":.:",
    "S",
    "S.",
    "S:",
    "S:.",