function combs(comb1, comb2) {
    let minLength = comb1.length + comb2.length; 
    
    for (let offset = -comb2.length; offset <= comb1.length; offset++) {
        let valid = true;
        
        for (let i = 0; i < comb1.length; i++) {
            for (let j = 0; j < comb2.length; j++) {
                if (i === j + offset) {
                    if (comb1[i] === '*' && comb2[j] === '*') {
                        valid = false;
                        break;
                    }
                }
            }
            if (!valid) break;
        }
        
        if (valid) {
            let start = Math.min(0, offset);
            let end = Math.max(comb1.length - 1, offset + comb2.length - 1);
            let length = end - start + 1;
            minLength = Math.min(minLength, length);
        }
    }
    
    return minLength;
}