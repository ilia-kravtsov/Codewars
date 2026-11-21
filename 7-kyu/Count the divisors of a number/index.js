function getDivisorsCnt(n){
    let countDivisors = 0;
​
    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            if (i === n / i) {
                countDivisors += 1;
            } else {
                countDivisors += 2;
            }
        }
    }
​
    return countDivisors;
}