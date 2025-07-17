function twistedSum(n) {
  let totalSum = 0;
  for (let i = 1; i <= n; i++) {
    let num = i;
    while (num > 0) {
      totalSum += num % 10;
      num = Math.floor(num / 10);
    }
  }
  return totalSum;
}