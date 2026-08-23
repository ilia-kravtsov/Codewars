function rotate(data, n) {
  if (data.length === 0) return data;
​
  n = n % data.length;
​
  if (n > 0) {
    return data.slice(-n).concat(data.slice(0, -n));
  }
​
  if (n < 0) {
    return data.slice(-n).concat(data.slice(0, -n));
  }
​
  return data;
}