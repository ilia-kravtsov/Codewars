function lengthSupUK(n, k) {
    let u = [0, 1, 1];
    for (let i = 3; i <= n; i++) {
        u[i] = u[i - u[i - 1]] + u[i - u[i - 2]];
    }
    return u.slice(1, n + 1).filter(x => x >= k).length;
}
​
function comp(n) {
    let u = [0, 1, 1];
    let count = 0;
    for (let i = 3; i <= n; i++) {
        u[i] = u[i - u[i - 1]] + u[i - u[i - 2]];
        if (u[i] < u[i - 1]) count++;
    }
    return count;
}