function epidemic(tm, n, s0, i0, b, a) {
    const dt = tm / n;
    
    const S = new Array(n + 1);
    const I = new Array(n + 1);
    const R = new Array(n + 1);
    
    S[0] = s0;
    I[0] = i0;
    R[0] = 0;
    
    let maxInfected = i0;
    
    for (let k = 0; k < n; k++) {
        S[k + 1] = S[k] - dt * b * S[k] * I[k];
      
        I[k + 1] = I[k] + dt * (b * S[k] * I[k] - a * I[k]);
        
        R[k + 1] = R[k] + dt * I[k] * a;
        
        if (I[k + 1] > maxInfected) {
            maxInfected = I[k + 1];
        }
    }
    
    return Math.floor(maxInfected);
}