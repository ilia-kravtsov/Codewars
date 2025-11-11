function deepCompare(o1, o2) {
  if (o1 === o2) return true;
  if (typeof o1 !== typeof o2 || o1 === null || o2 === null) return false;
  if (typeof o1 !== 'object') return false;
  if (Array.isArray(o1) !== Array.isArray(o2)) return false;
  const k1 = Object.keys(o1), k2 = Object.keys(o2);
  if (k1.length !== k2.length) return false;
  for (let k of k1) {
    if (!k2.includes(k) || !deepCompare(o1[k], o2[k])) return false;
  }
  return true;
}
​