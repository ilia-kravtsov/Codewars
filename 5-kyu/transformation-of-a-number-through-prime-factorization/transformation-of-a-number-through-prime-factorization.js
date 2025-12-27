function f(num) {
    let n = num
    let geomDeriv = 1
​
    for (let p = 2; p * p <= n; p++) {
        if (n % p === 0) {
            let k = 0
            while (n % p === 0) {
                n /= p
                k++
            }
            if (k > 1) geomDeriv *= k * Math.pow(p, k - 1)
        }
    }
​
    return geomDeriv
}
​