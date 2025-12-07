function sumProdDiags(matrix) {
    const n = matrix.length
    let sum1 = 0, sum2 = 0
​
    for (let start = 0; start < n; start++) {
        let p = 1, i = start, j = 0
        while (i < n && j < n) p *= matrix[i++][j++]
        sum1 += p
    }
  
    for (let start = 1; start < n; start++) {
        let p = 1, i = 0, j = start
        while (i < n && j < n) p *= matrix[i++][j++]
        sum1 += p
    }
​
    for (let start = 0; start < n; start++) {
        let p = 1, i = start, j = n - 1
        while (i < n && j >= 0) p *= matrix[i++][j--]
        sum2 += p
    }
  
    for (let start = n - 2; start >= 0; start--) {
        let p = 1, i = 0, j = start
        while (i < n && j >= 0) p *= matrix[i++][j--]
        sum2 += p
    }
​
    return sum1 - sum2
}
​