function exEuler(n) {
    const h = 1 / n;
    const y = new Array(n + 1);
    const z = new Array(n + 1);
​
    y[0] = 1;
    z[0] = 1;
​
    const exact = x => 1 + 0.5 * Math.exp(-4 * x) - 0.5 * Math.exp(-2 * x);
​
    for (let k = 0; k < n; k++) {
        const xk = k * h;
        const f = 2 - Math.exp(-4 * xk) - 2 * y[k];
        y[k + 1] = y[k] + f * h;
    }
​
    for (let k = 0; k <= n; k++) {
        z[k] = exact(k * h);
    }
​
    let sum = 0;
    for (let k = 0; k <= n; k++) {
        sum += Math.abs(y[k] - z[k]) / z[k];
    }
​
    return Math.trunc((sum / (n + 1)) * 1e6) / 1e6;
}
​