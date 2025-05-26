/*
Given positive integers a and b as strings, evaluate a / b and return the quotient and the remainder as strings in the form [quotient, remainder].

a and b can be very large (at the order of 10^150 to 10^200)
As usual, your result should not have leading 0s
require is disabled in JavaScript. Do it yourself ;-)
*/

function divideStrings(a, b) {
  if (b === "0") throw new Error("Division by zero is not allowed");

  let quotient = "";
  let remainder = "";

  for (let i = 0; i < a.length; i++) {
    remainder += a[i];
    remainder = remainder.replace(/^0+/, "") || "0";

    if (compareStrings(remainder, b) < 0) {
      quotient += "0";
      continue;
    }

    let left = 0,
      right = 9,
      best = 0;

    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      let product = multiplyString(b, mid);

      if (compareStrings(product, remainder) <= 0) {
        best = mid;
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    quotient += best;
    remainder = subtractStrings(remainder, multiplyString(b, best));
  }

  quotient = quotient.replace(/^0+/, "") || "0";
  remainder = remainder.replace(/^0+/, "") || "0";

  return [quotient, remainder];
}

function multiplyString(num, digit) {
  if (digit === 0) return "0";

  let carry = 0,
    result = "";
  for (let i = num.length - 1; i >= 0; i--) {
    let prod = digit * parseInt(num[i]) + carry;
    result = (prod % 10) + result;
    carry = Math.floor(prod / 10);
  }
  if (carry > 0) result = carry + result;

  return result;
}

function compareStrings(a, b) {
  if (a.length > b.length) return 1;
  if (a.length < b.length) return -1;
  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) return 1;
    if (a[i] < b[i]) return -1;
  }
  return 0;
}

function subtractStrings(a, b) {
  if (a === b) return "0";
  let result = "",
    borrow = 0;
  a = a.padStart(b.length, "0");
  b = b.padStart(a.length, "0");

  for (let i = a.length - 1; i >= 0; i--) {
    let diff = parseInt(a[i]) - (parseInt(b[i]) + borrow);
    if (diff < 0) {
      diff += 10;
      borrow = 1;
    } else {
      borrow = 0;
    }
    result = diff + result;
  }

  return result.replace(/^0+/, "") || "0";
}