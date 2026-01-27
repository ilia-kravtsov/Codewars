function quicksort(data) {
  const snapshots = [];
  const arr = data.slice();
​
  function swap(i, j) {
    if (i === j) return;
    if (arr[i] === arr[j]) return;
​
    [arr[i], arr[j]] = [arr[j], arr[i]];
    snapshots.push(arr.slice());
  }
​
  function partition(left, right) {
    const pivot = arr[left];
    let i = left + 1;
    let j = right;
​
    while (true) {
      while (i <= j && arr[i] <= pivot) i++;
      while (i <= j && arr[j] >= pivot) j--;
​
      if (i > j) break;
​
      swap(i, j);
      i++;
      j--;
    }
​
    swap(left, j);
    return j;
  }
​
  function sort(left, right) {
    if (left >= right) return;
​
    const pivotIndex = partition(left, right);
    sort(left, pivotIndex - 1);
    sort(pivotIndex + 1, right);
  }
​
  sort(0, arr.length - 1);
  return snapshots;
}
​