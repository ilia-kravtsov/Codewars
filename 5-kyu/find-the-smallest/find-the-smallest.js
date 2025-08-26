function smallest(n) {
    let s = n.toString();
    let min = n;
    let from = 0;
    let to = 0;
    
    for (let i = 0; i < s.length; i++) {
        let digit = s[i];
        let without = s.slice(0, i) + s.slice(i + 1);
        
        for (let j = 0; j <= without.length; j++) {
            let candidate = without.slice(0, j) + digit + without.slice(j);
            let num = parseInt(candidate);
            
            if (num < min || (num === min && i < from) || (num === min && i === from && j < to)) {
                min = num;
                from = i;
                to = j;
            }
        }
    }
    
    return [min, from, to];
}