function primeBefAft(num) {
    function isPrime(n) {
        if (n < 2) return false;
        if (n === 2) return true;
        if (n % 2 === 0) return false;
        
        for (let i = 3; i * i <= n; i += 2) {
            if (n % i === 0) return false;
        }
        return true;
    }
    
    let befPrime = num - 1;
    while (befPrime >= 2 && !isPrime(befPrime)) {
        befPrime--;
    }
    
    let aftPrime = num + 1;
    while (!isPrime(aftPrime)) {
        aftPrime++;
    }
    
    return [befPrime, aftPrime];
}