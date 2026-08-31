function solve(arr) {
    const sum = arr.reduce((a, b) => a + b, 0);
    const max = Math.max(...arr);
​
    return Math.min(Math.floor(sum / 2), sum - max);
}