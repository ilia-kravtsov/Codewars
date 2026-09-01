function diagonal(n, p) {
    let result = 1;
​
    for (let i = 1; i <= p + 1; i++) {
        result = result * (n + 2 - i) / i;
    }
​
    return result;
}