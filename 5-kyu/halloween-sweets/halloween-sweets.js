function pick(bags, scale) {
  const w1 = scale.weigh([bags[0], bags[1], bags[2]],
                         [bags[3], bags[4], bags[5]]);
​
  if (w1 === 0) {
    const w2 = scale.weigh([bags[6]], [bags[7]]);
    if (w2 === -1) return bags[6];
    if (w2 === 1)  return bags[7];
    return bags[8];
  }
​
  if (w1 === -1) {
    const w2 = scale.weigh([bags[0]], [bags[1]]);
    if (w2 === -1) return bags[0];
    if (w2 === 1)  return bags[1];
    return bags[2];
  }
​
  const w2 = scale.weigh([bags[3]], [bags[4]]);
  if (w2 === -1) return bags[3];
  if (w2 === 1)  return bags[4];
​
  return bags[5];
}
​