function dec2FactString(nb) {
    const digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
    let i = 1, fact = 1;
    while (fact <= nb) {
        i++;
        fact *= i;
    }
    i--; 
    
    let res = "";
    for (; i >= 0; i--) {
        let f = factorial(i);
        let d = Math.floor(nb / f);
        res += digits[d];
        nb -= d * f;
    }
    return res;
}
​
function factString2Dec(str) {
    const digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const map = {};
    for (let i = 0; i < digits.length; i++) map[digits[i]] = i;
    
    let n = str.length;
    let res = 0;
    for (let i = 0; i < n; i++) {
        let d = map[str[i]];
        let f = factorial(n - i - 1);
        res += d * f;
    }
    return res;
}
​
function factorial(n) {
    let res = 1;
    for (let i = 2; i <= n; i++) res *= i;
    return res;
}