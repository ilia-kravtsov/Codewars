function eqDice(set_) {
    let product = 1;
    for (let i = 0; i < set_.length; i++) {
        product *= set_[i];
    }
    
    let sortedInput = [...set_].sort((a, b) => a - b);
    let results = [];
    findFactorizations(product, 3, 20, [], results);
    
    let count = 0;
    for (let factorization of results) {
        if (factorization.length >= 2) {
            let sorted = [...factorization].sort((a, b) => a - b);
            let isSame = sorted.length === sortedInput.length && 
                         sorted.every((val, idx) => val === sortedInput[idx]);
            if (!isSame) {
                count++;
            }
        }
    }
    
    return count;
}

function findFactorizations(n, min, max, current, results) {
    if (n === 1) {
        results.push([...current]);
        return;
    }
    
    let start = Math.max(min, 2);
    for (let i = start; i <= Math.min(max, n); i++) {
        if (n % i === 0) {
            if (current.length === 0 || i >= current[current.length - 1]) {
                current.push(i);
                findFactorizations(n / i, i, max, current, results);
                current.pop();
            }
        }
    }
}