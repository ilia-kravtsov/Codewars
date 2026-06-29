function hashRadSeq(n, k){
    const rad = Array(n + 1).fill(1);

    for (let p = 2; p <= n; p++) {
        if (rad[p] === 1) {
            for (let m = p; m <= n; m += p)
                rad[m] *= p;
        }
    }

    const arr = [];
    for (let i = 1; i <= n; i++)
        arr.push([rad[i], i]);

    arr.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

    return arr[k - 1][1];
}