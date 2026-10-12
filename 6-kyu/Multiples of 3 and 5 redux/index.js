function solution(number){
  function sumOfMultiples(divisor) {
    const n = Math.floor((number - 1) / divisor);
    return divisor * n * (n + 1) / 2;
  }
  
  return sumOfMultiples(3) + sumOfMultiples(5) - sumOfMultiples(15);
}