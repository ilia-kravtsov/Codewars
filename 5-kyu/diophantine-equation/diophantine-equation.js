function solequa(n) {
    let res = [];
    
    for (let a = 1; a * a <= n; a++) {
        if (n % a === 0) {
            let b = n / a;
            let x = (a + b) / 2;
            let y = (b - a) / 4;
            if (Number.isInteger(x) && Number.isInteger(y) && x >= 0 && y >= 0) {
                res.push([x, y]);
            }
        }
    }
    
    res.sort((p1, p2) => p2[0] - p1[0]);
    
    return res;
}