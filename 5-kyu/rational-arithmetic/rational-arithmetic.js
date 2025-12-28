class Rational {
    constructor(numerator, denominator) {
        this.numerator = numerator;
        this.denominator = denominator || 1;
        this.simplify();
    }
​
    toString() {
        return this.numerator + "/" + this.denominator;
    }
​
    simplify() {
        if (this.numerator === 0) {
            this.denominator = 1;
            return;
        }
​
        if (this.denominator < 0) {
            this.numerator = -this.numerator;
            this.denominator = -this.denominator;
        }
​
        const gcd = (a, b) => {
            a = Math.abs(a);
            b = Math.abs(b);
            while (b !== 0) {
                [a, b] = [b, a % b];
            }
            return a;
        };
​
        const d = gcd(this.numerator, this.denominator);
        this.numerator /= d;
        this.denominator /= d;
    }