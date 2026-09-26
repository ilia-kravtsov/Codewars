function expandedForm(num) {
  const [whole, fraction = ""] = String(num).split(".");
  const terms = [];
​
  for (let i = 0; i < whole.length; i++) {
    const digit = whole[i];
    const zeros = whole.length - i - 1;
​
    if (digit !== "0") {
      terms.push(digit + "0".repeat(zeros));
    }
  }
​
  for (let i = 0; i < fraction.length; i++) {
    const digit = fraction[i];
​
    if (digit !== "0") {
      terms.push(`${digit}/${10 ** (i + 1)}`);
    }
  }
​
  return terms.length ? terms.join(" + ") : "0";
}