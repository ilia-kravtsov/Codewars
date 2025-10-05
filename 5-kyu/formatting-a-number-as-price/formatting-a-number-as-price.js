var numberToPrice = function(number) {
  if (typeof number !== "number" || isNaN(number)) return "NaN";
  let neg = number < 0 ? "-" : "";
  number = Math.abs(number);
​
  let str = number.toString();
  let [intPart, decPart = ""] = str.split(".");
​
  if (decPart.length >= 2) {
    decPart = decPart.slice(0, 2);
  } else {
    decPart = decPart.padEnd(2, "0");
  }
​
  intPart = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
​
  return neg + intPart + "." + decPart;
};