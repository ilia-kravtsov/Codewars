const BN = require('bignumber.js')
​
function solve(arr) {
    let A = new BN(arr[0])
    let B = new BN(arr[1])
​
    for (let i = 2; i < arr.length; i += 2) {
        const C = new BN(arr[i])
        const D = new BN(arr[i + 1])
​
        const newA = A.times(C).minus(B.times(D)).abs()
        const newB = A.times(D).plus(B.times(C)).abs()
​
        A = newA
        B = newB
    }
​
    return [A.toString(), B.toString()]
}
​