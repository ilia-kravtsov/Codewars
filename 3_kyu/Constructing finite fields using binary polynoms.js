/*
Introduction
Polynoms are useful in many branches of math and computer science. In this Kata we will work on the polynom field F28, which is used in the AES encryption algorithm. But don't worry, you won't have to know that!

Working with polynoms
When adding polynoms, we simply add up the coefficients of the monoms (monoms are the single parts of a polynom, e.g. x2, or x0 = 1):

(2 * x^2 + 3 * x^0) + (x^3 + x^2) = x^3 + (2 + 1) * x^2 + x^0
Multiplication is a bit more complicated, but still not hard: For every monom of the first polynom, we multiply the monom with the second polynom and finally sum up all generated polynoms:

(x^2 + 1) * (x + 1) = (x^2 * (x + 1)) + (1 * (x + 1)) = (x^3 + x^2) + (x + 1) = x^3 + x^2 + x + 1
Polynoms are defined over a field, you may know polynoms with coefficients from the real numbers. We define our polynoms over the field consisting of {0, 1}, that means every coefficient is either 0 or 1. Additionally we use the addition and multiplication within that field on the coefficients ( 0 + 1 = 1 + 0 = 1, 0 + 0 = 1 + 1 = 0). Therefore we can cancel out coefficients:

(x + 1) + (x^2 + x) = x^2 + 1
Step 1:

Find a good representation for your polynoms. It should be namespaced BinaryPolynom.
Define namespaced polynoms ZERO and ONE.
Define a namespaced method fromPowers, which takes a list of powers and returns a corresponding polynom.
Define addition and multiplication over such binary polynoms, implemented as methods add and mul.
Define an accessor property deg, which returns the degree of a polynom. ( The degree of a polynom is the power of the monom with the biggest power: (x^2 + x).deg => 2. Note: (0).deg => -1 )
Define a namespaced method fromDegree, which constructs a monom with the given degree.
Define a method toString, such that: BinaryPolynom.fromDegree(-1).toString() => "0" BinaryPolynom.fromPowers([1,3]).toString() => "x^3 + x^1"
(Hint: The maximum degree of our polynoms will be smaller than 16.)

From ring to field
To get field properties, e.g. multiplicative inverse elements for all elements but zero (p(x) * p(x)^{-1} = 1), we have to change a few things (but don't worry, you won't have to change any code you have already written).

Here starts the fun part: We can divide polynoms like natural numbers, some of you may recall long division from school. Let's say we want to calculate (x^4 + x^3 + x^2) : (x + 1):

  (x^4 + x^3 + x^2) : (x + 1) = x^3 + x + 1 remainder 1
+ x^4 + x^3
  -----------------
             x^2
           + x^2 + x
             -------
                   x
                 + x + 1
                   -----
                       1
             
First we look at the degree of x^4 + x^3 + x^2, which is 4. Because (x + 1) * x^3 has degree 4, we add x^3 to the result and add (x + 1) * x^3 = x^4 + x^3 with x^4 + x^3 + x^2. We repeat that process on the remaining polynom until we can't build polynoms of the degree of the remaining polynom. We just defined div and mod on binary polynoms!

Step 2: Define a method divMod, which performs div and mod on two polynoms.

Like prime numbers in the natural numbers, there exists something similar in the polynom ring, irreducible polynoms, which can not be written as factors of other polynoms (e.g. x or x + 1). We use the irreducible polynom m(x) = x^8 + x^4 + x^3 + x + 1, to finally construct a finite field of polynoms:

F28 = { a(x) | deg(a(x)) ≤ 7 }
Multiplication is defined as: fldMul(a(x), b(x)) = a(x) * b(x) mod m(x) ( Multiplication of two polynoms from F28 wil now result in a polynom which is also in F28. ) fldMul is to be implemented as a polynom method.
Addition works the same way as before.
Step 3: Implement multiplication.
*/

class BinaryPolynom {
    constructor(coefficients = 0) {
        this.coefficients = coefficients;
    }

    static fromPowers(powers) {
        let coefficients = 0;
        for (let power of powers) {
            coefficients |= (1 << power);
        }
        return new BinaryPolynom(coefficients);
    }

    add(other) {
        return new BinaryPolynom(this.coefficients ^ other.coefficients);
    }

    mul(other) {
        let result = 0;
        let a = this.coefficients;
        let b = other.coefficients;
        while (b) {
            if (b & 1) result ^= a;
            b >>= 1;
            a <<= 1;
        }
        return new BinaryPolynom(result);
    }

    divMod(divisor) {
      let dividend = this.coefficients;
      let divisorCoeff = divisor.coefficients;
      let quotient = 0;

      while (dividend && (BinaryPolynom.fromPowers([Math.floor(Math.log2(dividend))]).deg >= divisor.deg)) {
          let shift = Math.floor(Math.log2(dividend)) - divisor.deg;
          quotient ^= (1 << shift);
          dividend ^= (divisorCoeff << shift);
      }

      return [new BinaryPolynom(quotient), new BinaryPolynom(dividend)];
    }

    fldMul(other) {
        let result = this.mul(other);
        let modPoly = BinaryPolynom.fromPowers([8, 4, 3, 1, 0]);
        return result.divMod(modPoly)[1]; 
    }

    get deg() {
        let degree = -1;
        let coeffs = this.coefficients;
        while (coeffs) {
            coeffs >>= 1;
            degree++;
        }
        return degree;
    }

    static fromDegree(degree) {
        return new BinaryPolynom(degree >= 0 ? (1 << degree) : 0);
    }

    toString() {
        if (this.coefficients === 0) return "0";
        let terms = [];
        for (let i = 0; i <= this.deg; i++) {
            if (this.coefficients & (1 << i)) {
                terms.push(i === 0 ? "1" : `x^${i}`);
            }
        }
        return terms.reverse().join(" + ");
    }
}

BinaryPolynom.ZERO = new BinaryPolynom(0);
BinaryPolynom.ONE = new BinaryPolynom(1);