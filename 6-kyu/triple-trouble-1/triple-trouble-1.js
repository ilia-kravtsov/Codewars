function tripledouble(num1, num2) {
    const str1 = String(num1);
    const str2 = String(num2);
    
    for (let i = 0; i <= 9; i++) {
        const triple = `${i}${i}${i}`;
        const double = `${i}${i}`;
        if (str1.includes(triple) && str2.includes(double)) {
            return 1;
        }
    }
    return 0;
}
​