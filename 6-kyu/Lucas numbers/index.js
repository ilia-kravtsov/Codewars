function lucasnum(n) {
    if (n < 0) {
        const positiveLucas = lucasnum(-n);
        return n % 2 === 0 ? positiveLucas : -positiveLucas;
    }
    
    if (n === 0) return 2;
    if (n === 1) return 1;
    
    let prev = 2;
    let curr = 1;
    
    for (let i = 2; i <= n; i++) {
        const next = prev + curr;
        prev = curr;
        curr = next;
    }
    
    return curr;
}