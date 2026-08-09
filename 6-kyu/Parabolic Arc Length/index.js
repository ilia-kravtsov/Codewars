function lenCurve(n) {
    const h = 1 / n;
    let length = 0;
​
    for (let i = 0; i < n; i++) {
        const x1 = i * h;
        const x2 = (i + 1) * h;
​
        const y1 = x1 * x1;
        const y2 = x2 * x2;
​
        const dx = x2 - x1;
        const dy = y2 - y1;
​
        length += Math.sqrt(dx * dx + dy * dy);
    }
​
    return length;
}