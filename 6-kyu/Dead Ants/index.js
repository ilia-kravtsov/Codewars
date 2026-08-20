deadAntCount = function(ants) {
  if (!ants) return 0;
​
  const alive = (ants.match(/ant/g) || []).length;
​
  const a = (ants.match(/a/g) || []).length;
  const n = (ants.match(/n/g) || []).length;
  const t = (ants.match(/t/g) || []).length;
​
  const total = Math.max(a, n, t);
​
  return total - alive;
}