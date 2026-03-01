function bouncyRatio(ratio) {
  if (!Number.isFinite(ratio)) throw new Error("ratio must be a number");
​
  if (ratio > 1) ratio = ratio / 100;
​
  if (ratio < 0 || ratio > 0.99) {
    throw new Error("ratio must be between 0% and 99%");
  }
​
  const isBouncy = (n) => {
    let inc = true; 
    let dec = true; 
​
    let prev = n % 10;
    n = (n / 10) | 0;
​
    while (n > 0) {
      const cur = n % 10;
​
      if (cur < prev) inc = false;
      else if (cur > prev) dec = false;
​
      if (!inc && !dec) return true;
​
      prev = cur;
      n = (n / 10) | 0;
    }
    return false;
  };
​
  if (ratio === 0) return 1;
​
  let bouncyCount = 0;
  for (let n = 1; ; n++) {
    if (isBouncy(n)) bouncyCount++;
    if (bouncyCount / n + 1e-12 >= ratio) return n;
  }
}