function regSumHits(n, s) {
    let dp = new Array(n * s + 1).fill(0);
    dp[0] = 1;
​
    for (let dice = 1; dice <= n; dice++) {
        const next = new Array(n * s + 1).fill(0);
​
        for (let sum = 0; sum < dp.length; sum++) {
            if (dp[sum] === 0) continue;
​
            for (let face = 1; face <= s; face++) {
                next[sum + face] += dp[sum];
            }
        }
​
        dp = next;
    }
​
    const result = [];
    for (let sum = n; sum <= n * s; sum++) {
        result.push([sum, dp[sum]]);
    }
​
    return result;
}
​