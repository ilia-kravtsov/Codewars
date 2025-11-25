function countOnes(n) {
    let a = 7, ones = 0;
    if (n > 0) ones = 1;
    for (let i = 2; i <= n; i++) {
        let g = gcd(i, a);
        if (g === 1) ones++;
        a += g;
    }
    return ones;
}
​
function maxPn(n) {
    let a = 7;
    let primes = [];
    let seen = new Set();
    for (let i = 2; primes.length < n; i++) {
        let g = gcd(i, a);
        a += g;
        if (g > 1 && isPrime(g) && !seen.has(g)) {
            seen.add(g);
            primes.push(g);
        }
    }
    return Math.max(...primes);
}
​
function anOverAverage(n) {
    let a = 7;
    let arr = [];
    for (let i = 2; arr.length < n; i++) {
        let g = gcd(i, a);
        a += g;
        if (g !== 1) arr.push(a / i);
    }
    return Math.floor(arr.reduce((s, x) => s + x, 0) / n);
}
​
function gcd(a, b) {
    while (b) [a, b] = [b, a % b];
    return a;
}
​
function isPrime(x) {
    if (x < 2) return false;
    if (x % 2 === 0) return x === 2;
    for (let i = 3; i * i <= x; i += 2) if (x % i === 0) return false;
    return true;
}
​