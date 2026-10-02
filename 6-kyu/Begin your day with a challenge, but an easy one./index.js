function oneTwoThree(n) {
    if (n === 0) {
        return ['0', '0'];
    }
    
    let smallest = '';
    let remaining = n;
    
    let numNines = Math.floor(n / 9);
    let remainder = n % 9;
    
    smallest = '9'.repeat(numNines);
    
    if (remainder > 0) {
        smallest += remainder;
    }
    
    let largest = '1'.repeat(n);
    
    return [smallest, largest];
}