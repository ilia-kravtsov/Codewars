function number2words(n) {
  if (n === 0) return "zero";
​
  const ones = [
    "", "one", "two", "three", "four", "five", "six",
    "seven", "eight", "nine", "ten", "eleven", "twelve",
    "thirteen", "fourteen", "fifteen", "sixteen",
    "seventeen", "eighteen", "nineteen"
  ];
​
  const tens = [
    "", "", "twenty", "thirty", "forty", "fifty",
    "sixty", "seventy", "eighty", "ninety"
  ];
​
  function helper(num) {
    let result = "";
    if (num < 20) {
      result = ones[num];
    } else if (num < 100) {
      result = tens[Math.floor(num / 10)] + (num % 10 ? "-" + ones[num % 10] : "");
    } else if (num < 1000) {
      result =
        ones[Math.floor(num / 100)] +
        " hundred" +
        (num % 100 ? " " + helper(num % 100) : "");
    }
    return result;
  }
​
  let words = "";
  if (n >= 1000) {
    words += helper(Math.floor(n / 1000)) + " thousand";
    if (n % 1000) words += " " + helper(n % 1000);
  } else {
    words = helper(n);
  }
​
  return words.trim();
}