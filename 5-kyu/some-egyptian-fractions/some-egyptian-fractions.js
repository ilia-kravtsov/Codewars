function decompose(n) {
  if (typeof n === "string" && n.includes("/")) {
    let [a, b] = n.split("/").map(BigInt);
    return decomposeFraction(a, b);
  } else if (typeof n === "number" || (typeof n === "string" && n.includes("."))) {
    let str = n.toString();
    if (str.includes(".")) {
      let d = str.length - str.indexOf(".") - 1;
      let den = 10n ** BigInt(d);
      let num = BigInt(Math.round(parseFloat(str) * 10 ** d));
      return decomposeFraction(num, den);
    } else {
      return decomposeFraction(BigInt(str), 1n);
    }
  } else {
    return decomposeFraction(BigInt(n), 1n);
  }
}
​
function decomposeFraction(num, den) {
  if (num === 0n) return [];
  let res = [];
  
  if (num >= den) {
    let q = num / den;
    res.push(q.toString());
    num = num % den;
    if (num === 0n) return res;
  }
  
  while (num !== 0n) {
    let d = (den + num - 1n) / num;
    res.push("1/" + d.toString());
    num = num * d - den;
    den = den * d;
    let g = gcd(num, den);
    num /= g;
    den /= g;
  }
  return res;
}
​
function gcd(a, b) {
  while (b !== 0n) {
    let t = b;
    b = a % b;
    a = t;
  }
  
  return a;
}