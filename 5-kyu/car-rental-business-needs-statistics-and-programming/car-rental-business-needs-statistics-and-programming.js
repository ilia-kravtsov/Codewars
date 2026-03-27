function probSimpson(lamb, x, op='='){
    const pmf = k => Math.exp(-lamb) * lamb ** k / fact(k);
​
    function fact(n) {
        let r = 1;
        for (let i = 2; i <= n; i++) r *= i;
        return r;
    }
​
    function sum(a, b) {
        let s = 0;
        for (let k = a; k <= b; k++) s += pmf(k);
        return s;
    }
​
    if (op === '=') return pmf(x);
    if (op === '>') return sum(0, x - 1);
    if (op === '>=') return sum(0, x);
    if (op === '<') return 1 - sum(0, x);
    if (op === '<=') return 1 - sum(0, x - 1);
}