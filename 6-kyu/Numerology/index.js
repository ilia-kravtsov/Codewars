function solution(date) {
  const str =
    String(date.getMonth() + 1).padStart(2, '0') +
    String(date.getDate()).padStart(2, '0') +
    date.getFullYear();
​
  let sum = 0;
​
  for (const digit of str) {
    sum += Number(digit);
​
    if (sum >= 10) {
      sum = Math.floor(sum / 10) + (sum % 10);
    }
  }
​
  return sum;
}