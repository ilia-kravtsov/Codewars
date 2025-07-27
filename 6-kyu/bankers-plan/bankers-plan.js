function fortune(f0, p, c0, n, i) {
    let currentFund = f0;
    let currentWithdrawal = c0;
    for (let year = 1; year < n; year++) {
        if (currentFund < 0) {
            return false;
        }
        currentFund += Math.floor(currentFund * p / 100);
        currentFund -= currentWithdrawal;
        if (currentFund < 0) {
            return false;
        }
        currentWithdrawal += Math.floor(currentWithdrawal * i / 100);
    }
    return true;
}