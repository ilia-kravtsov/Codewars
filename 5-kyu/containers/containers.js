function Containers(input) {
  const tops = [];
​
  for (const c of input) {
    let left = 0;
    let right = tops.length;
​
    while (left < right) {
      const mid = (left + right) >> 1;
      if (tops[mid] >= c) right = mid;
      else left = mid + 1;
    }
​
    if (left === tops.length) tops.push(c);
    else tops[left] = c;
  }
​
  return tops.length;
}