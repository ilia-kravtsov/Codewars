function total(arr) {
  let sum = 0;

  for (let i = 2; i < arr.length; i++) {
    let prime = true;

    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        prime = false;
        break;
      }
    }

    if (prime) {
      sum += arr[i];
    }
  }

  return sum;
}