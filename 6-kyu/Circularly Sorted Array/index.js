function isCircleSorted(arr) {
  let breaks = 0;
​
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[(i + 1) % arr.length]) {
      breaks++;
    }
  }
​
  return breaks <= 1;
}