const getOptionsCount = (target, arr) => {
    const n = target.length;
    const dp = new Array(n + 1).fill(0);
    dp[n] = 1; 
    
    for (let i = n - 1; i >= 0; i--) {
        for (const word of arr) {
            const len = word.length;
            if (i + len <= n && target.substring(i, i + len) === word) {
                dp[i] += dp[i + len];
            }
        }
    }
    
    return dp[0];
};