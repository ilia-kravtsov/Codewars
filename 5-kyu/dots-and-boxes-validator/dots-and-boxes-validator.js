function dotsAndBoxes(ar){
    let max = 0
    for (let [a,b] of ar) max = Math.max(max, a, b)
​
    const n = Math.round(Math.sqrt(max + 1))
    const edges = new Set()
    const boxes = new Set()
    const score = [0, 0]
    let p = 0
​
    const e = (a,b) => a < b ? a + '-' + b : b + '-' + a
​
    for (let [a,b] of ar){
        edges.add(e(a,b))
        let gained = 0
​
        for (let i = 0; i < n - 1; i++){
            for (let j = 0; j < n - 1; j++){
                const tl = i * n + j
                const tr = tl + 1
                const bl = tl + n
                const br = bl + 1
                const k = tl + ':' + tr + ':' + bl + ':' + br
​
                if (!boxes.has(k) &&
                    edges.has(e(tl,tr)) &&
                    edges.has(e(tr,br)) &&
                    edges.has(e(bl,br)) &&
                    edges.has(e(tl,bl))
                ){
                    boxes.add(k)
                    gained++
                }
            }
        }
​
        if (gained){
            score[p] += gained
        } else {
            p ^= 1
        }
    }
​
    return score
}
​