function getAllPrimeFactors(n) { 
  if (typeof n !== 'number' || n % 1 !== 0 || n <= 0) return [];
  if (n === 1) return [1];
  const res = [];
  let d = 2;
  while (n > 1) {
    while (n % d === 0) {
      res.push(d);
      n /= d;
    }
    d++;
  }
  return res;
}
​
function getUniquePrimeFactorsWithCount(n) { 
  if (typeof n !== 'number' || n % 1 !== 0 || n <= 0) return [[],[]];
  if (n === 1) return [[1],[1]];
  const primes = getAllPrimeFactors(n);
  const uniq = [...new Set(primes)];
  const counts = uniq.map(p => primes.filter(x => x === p).length);
  return [uniq, counts];
}
​
function getUniquePrimeFactorsWithProducts(n) { 
  if (typeof n !== 'number' || n % 1 !== 0 || n <= 0) return [];
  if (n === 1) return [1];
  const [uniq, counts] = getUniquePrimeFactorsWithCount(n);
  return uniq.map((p,i) => p ** counts[i]);
}
​