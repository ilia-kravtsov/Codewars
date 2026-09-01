function calculate1RM(w, r) {
    if (r === 0) return 0;
    if (r === 1) return w;
​
    const epley = w * (1 + r / 30);
​
    const mcGlothin = 100 * w / (101.3 - 2.67123 * r);
​
    const lombardi = w * Math.pow(r, 0.10);
​
    return Math.round(Math.max(epley, mcGlothin, lombardi));
}