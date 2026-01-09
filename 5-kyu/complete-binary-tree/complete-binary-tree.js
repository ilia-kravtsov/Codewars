function completeBinaryTree(a) {
  const res = Array(a.length);
​
  function leftSize(n) {
    if (n <= 1) return 0;
    const h = Math.floor(Math.log2(n));
    const nodesAbove = (1 << h) - 1;
    const lastLevel = n - nodesAbove;
    const leftLast = Math.min(lastLevel, 1 << (h - 1));
    return ((1 << (h - 1)) - 1) + leftLast;
  }
​
  function build(arr, i) {
    if (!arr.length) return;
    const l = leftSize(arr.length);
    res[i] = arr[l];
    build(arr.slice(0, l), 2 * i + 1);
    build(arr.slice(l + 1), 2 * i + 2);
  }
​
  build(a, 0);
  return res;
}
​