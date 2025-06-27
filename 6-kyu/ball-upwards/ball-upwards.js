function maxBall(v0) {
    const g = 9.81;
    const v0_mps = v0 * (1000 / 3600);
    let maxHeight = 0;
    let maxTimeTenth = 0;
    let t = 0; // time in seconds
    let currentHeight;
    
    while (true) {
        currentHeight = v0_mps * t - 0.5 * g * t * t;
        if (currentHeight < maxHeight && t > 0) {
            break;
        }
        if (currentHeight > maxHeight) {
            maxHeight = currentHeight;
            maxTimeTenth = Math.round(t * 10); 
        }
        t += 0.1; 
    }
    
    return maxTimeTenth;
}