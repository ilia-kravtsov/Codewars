Number.prototype.toDecimal = function () {
    const str = this.toString();
​
    if (!/[eE]/.test(str)) return str;
​
    let [coef, exp] = str.toLowerCase().split('e');
    exp = Number(exp);
​
    let sign = '';
    if (coef[0] === '-') {
        sign = '-';
        coef = coef.slice(1);
    }
​
    let [intPart, fracPart = ''] = coef.split('.');
    const digits = intPart + fracPart;
    const pointPos = intPart.length;
    const newPos = pointPos + exp;
​
    if (newPos <= 0) {
        return sign + '0.' + '0'.repeat(-newPos) + digits;
    }
​
    if (newPos >= digits.length) {
        return sign + digits + '0'.repeat(newPos - digits.length);
    }
​
    return sign + digits.slice(0, newPos) + '.' + digits.slice(newPos);
};