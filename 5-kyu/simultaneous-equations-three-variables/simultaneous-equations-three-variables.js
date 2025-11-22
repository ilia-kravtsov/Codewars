function solveEq(eq){
    const a = eq.map(r => r.slice());
    const n = 3;
​
    for (let i = 0; i < n; i++) {
        let maxRow = i;
        for (let r = i + 1; r < n; r++)
            if (Math.abs(a[r][i]) > Math.abs(a[maxRow][i])) maxRow = r;
​
        [a[i], a[maxRow]] = [a[maxRow], a[i]];
​
        const pivot = a[i][i];
        for (let c = i; c <= n; c++) a[i][c] /= pivot;
​
        for (let r = 0; r < n; r++) {
            if (r === i) continue;
            const factor = a[r][i];
            for (let c = i; c <= n; c++) a[r][c] -= factor * a[i][c];
        }
    }
​
    return [
        Math.round(a[0][3]),
        Math.round(a[1][3]),
        Math.round(a[2][3])
    ];
}
​