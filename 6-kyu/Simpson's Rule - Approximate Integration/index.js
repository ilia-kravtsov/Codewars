function simpson(n) {
    const a = 0;
    const b = Math.PI;
    const h = (b - a) / n;
    
    const f = (x) => (3/2) * Math.pow(Math.sin(x), 3);
    
    let sum4 = 0;
    for (let i = 1; i <= n/2; i++) {
        sum4 += f(a + (2*i - 1) * h);
    }
    
    let sum2 = 0;
    for (let i = 1; i <= n/2 - 1; i++) {
        sum2 += f(a + 2*i * h);
    }
    
    return (b - a) / (3 * n) * (f(a) + f(b) + 4 * sum4 + 2 * sum2);
}