function frequency(arr, options = {}) {
  const { criteria, compareTo } = options;
​
  const map = new Map();
​
  for (const item of arr) {
    const key = criteria ? criteria(item) : item;
    map.set(key, (map.get(key) || 0) + 1);
  }
​
  const result = Array.from(map.entries());
​
  if (compareTo) {
    result.sort((a, b) => compareTo(a[0], b[0], a[1], b[1]));
  } else {
    result.sort((a, b) => {
      if (a[0] < b[0]) return -1;
      if (a[0] > b[0]) return 1;
      return 0;
    });
  }
​
  return result;
}