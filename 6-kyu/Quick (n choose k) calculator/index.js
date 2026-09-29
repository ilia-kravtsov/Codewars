function choose(n, k) {
    n = BigInt(n);
    k = BigInt(k);
    
    if (k < 0n || k > n) return 0n;
    if (k === 0n || k === n) return 1n;
    
    if (k > n - k) {
        k = n - k;
    }
    
    let result = 1n;
    for (let i = 0n; i < k; i++) {
        result = result * (n - i) / (i + 1n);
    }
    
    return result;
}