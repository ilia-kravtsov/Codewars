function calculate(num1, num2) {
    function binToDec(str) {
        let res = 0;
        for (let i = 0; i < str.length; i++) {
            res = res * 2 + (str[i] === '1' ? 1 : 0);
        }
        return res;
    }
    return binToDec(num1) + binToDec(num2);
}