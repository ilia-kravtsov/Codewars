function sumFracts(l) {
    if (!l.length) return null;
​
    const gcd = (a, b) => b ? gcd(b, a % b) : a;
    const lcm = (a, b) => (a * b) / gcd(a, b);
​
    let commonDen = l.reduce((acc, [_, den]) => lcm(acc, den), 1);
​
    let numerator = l.reduce((acc, [num, den]) => acc + num * (commonDen / den), 0);
​
    let divisor = gcd(numerator, commonDen);
    numerator /= divisor;
    commonDen /= divisor;
​
    return commonDen === 1 ? numerator : [numerator, commonDen];
}