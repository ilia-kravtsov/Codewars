function computeDepth(x) {
    const digitsFound = new Set();
    let count = 0;
    while (digitsFound.size < 10) {
        count++;
        const multiple = x * count;
        const digits = String(multiple).split('');
        for (const digit of digits) {
            digitsFound.add(digit);
        }
    }
    return count;
}