function integerRightTriangles(p) {
    function gcd(a, b) {
        while (b !== 0) {
            let t = b;
            b = a % b;
            a = t;
        }
        return a;
    }
​
    const result = [];
​
    for (let m = 2; 2 * m * (m + 1) <= p; m++) {
        for (let n = 1; n < m; n++) {
            if (gcd(m, n) !== 1) continue;
            if (m % 2 === 1 && n % 2 === 1) continue;
​
            const p0 = 2 * m * (m + n);
            if (p0 > p) break;          
            if (p % p0 !== 0) continue;
​
            const k = p / p0;
            const a = k * (m * m - n * n);
            const b = k * (2 * m * n);
            const c = k * (m * m + n * n);
​
            const triangle = [a, b, c].sort((x, y) => x - y);
            result.push(triangle);
        }
    }
​
    result.sort((t1, t2) => t1[0] - t2[0]);
    return result;
}