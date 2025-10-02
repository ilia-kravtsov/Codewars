function findEmirp(n) {
    if (n < 13) return [0, 0, 0];
    
    const maxLimit = Math.max(n * 10, 1000000);
    const primes = generatePrimes(maxLimit);
    const primeSet = new Set(primes);
    
    let count = 0;
    let largest = 0;
    let sum = 0;
    
    for (const prime of primes) {
        if (prime >= n) break;
        
        const reversed = reverseNumber(prime);
        
        if (reversed === prime) continue;
        
        if (primeSet.has(reversed)) {
            count++;
            largest = Math.max(largest, prime);
            sum += prime;
        }
    }
    
    return [count, largest, sum];
}
​
function generatePrimes(limit) {
    const sieve = new Array(limit + 1).fill(true);
    sieve[0] = sieve[1] = false;
    
    for (let i = 2; i * i <= limit; i++) {
        if (sieve[i]) {
            for (let j = i * i; j <= limit; j += i) {
                sieve[j] = false;
            }
        }
    }
    
    const primes = [];
    for (let i = 2; i <= limit; i++) {
        if (sieve[i]) {
            primes.push(i);
        }
    }
    
    return primes;
}
​
function reverseNumber(num) {
    return parseInt(num.toString().split('').reverse().join(''), 10);
}