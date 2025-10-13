function findBall(scales) {
    const w1 = scales.getWeight([0, 1, 2], [3, 4, 5]);
​
    let group = [];
  
    if (w1 === 0) {
        const w2 = scales.getWeight([6], [7]);
        return w2 === -1 ? 6 : 7;
    } else if (w1 === -1) {
        group = [0, 1, 2];
    } else {
        group = [3, 4, 5];
    }
​
    const w2 = scales.getWeight([group[0]], [group[1]]);
  
    if (w2 === 0) return group[2];
    if (w2 === -1) return group[0];
  
    return group[1];
}
​