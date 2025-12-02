function sameFactRev(nMax) {
    const primes = n => {
        const s = new Set()
        let d = 2
        while (d * d <= n) {
            while (n % d === 0) {
                s.add(d)
                n /= d
            }
            d++
        }
        if (n > 1) s.add(n)
        return s
    }
​
    const rev = n => +String(n).split('').reverse().join('')
​
    const eq = (a, b) => {
        if (a.size !== b.size) return false
        for (const x of a) if (!b.has(x)) return false
        return true
    }
​
    const res = []
    for (let n = 10; n < nMax; n++) {
        const r = rev(n)
        if (r === n) continue
        if (eq(primes(n), primes(r))) res.push(n)
    }
  
    return res
}
​