function consecKprimes(k, arr) {
    function countPrimeFactors(n) {
        let count = 0;
        let divisor = 2;
        
        while (n > 1) {
            while (n % divisor === 0) {
                count++;
                n /= divisor;
            }
            divisor++;
        }
        return count;
    }
    
    let result = 0;
    
    for (let i = 0; i < arr.length - 1; i++) {
        if (countPrimeFactors(arr[i]) === k && countPrimeFactors(arr[i + 1]) === k) {
            result++;
        }
    }
    
    return result;
}