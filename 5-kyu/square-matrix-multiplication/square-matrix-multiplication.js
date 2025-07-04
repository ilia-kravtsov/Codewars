function matrixMultiplication(a, b) {
    const n = a.length;
    const c = new Array(n);
    for (let i = 0; i < n; i++) {
        c[i] = new Array(n).fill(0);
    }
​
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            for (let k = 0; k < n; k++) {
                c[i][j] += a[i][k] * b[k][j];
            }
        }
    }
​
    return c;
}