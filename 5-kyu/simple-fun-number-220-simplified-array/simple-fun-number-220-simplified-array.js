function simplifiedArray(arr) {
  const isPrime = n => {
    if (n < 2 || n % 1 !== 0) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;
    for (let i = 3; i * i <= n; i += 2) {
      if (n % i === 0) return false;
    }
    return true;
  };
​
  while (true) {
    const next = [];
    let sum = arr[0];
    let prevType = isPrime(arr[0]);
​
    for (let i = 1; i < arr.length; i++) {
      const curType = isPrime(arr[i]);
      if (curType === prevType) {
        sum += arr[i];
      } else {
        next.push(sum);
        sum = arr[i];
        prevType = curType;
      }
    }
    next.push(sum);
​
    if (next.length === arr.length && next.every((v, i) => v === arr[i])) {
      return next;
    }
​
    arr = next;
  }
}