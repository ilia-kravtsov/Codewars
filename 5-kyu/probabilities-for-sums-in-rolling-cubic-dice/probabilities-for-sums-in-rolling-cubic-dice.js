function rolldiceSumProb(target, dice) {
    const sides = 6;
    const totalOutcomes = Math.pow(sides, dice);
​
    let dp = Array.from({ length: dice + 1 }, () => ({}));
    dp[0][0] = 1;
​
    for (let d = 1; d <= dice; d++) {
        for (let s in dp[d - 1]) {
            s = Number(s);
            for (let face = 1; face <= sides; face++) {
                const newSum = s + face;
                dp[d][newSum] = (dp[d][newSum] || 0) + dp[d - 1][s];
            }
        }
    }
​
    const favorable = dp[dice][target] || 0;
    return favorable / totalOutcomes;
}