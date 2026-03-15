function barista(coffees, cMachines) {
  const jobs = coffees.filter(x => x > 0).sort((a, b) => a - b);
  if (jobs.length === 0) return 0;
​
  const heap = Array(cMachines).fill(0);
​
  const siftUp = i => {
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (heap[p] <= heap[i]) break;
      [heap[p], heap[i]] = [heap[i], heap[p]];
      i = p;
    }
  };
​
  const siftDown = i => {
    const n = heap.length;
    while (true) {
      let left = i * 2 + 1;
      let right = left + 1;
      let smallest = i;
​
      if (left < n && heap[left] < heap[smallest]) smallest = left;
      if (right < n && heap[right] < heap[smallest]) smallest = right;
      if (smallest === i) break;
​
      [heap[i], heap[smallest]] = [heap[smallest], heap[i]];
      i = smallest;
    }
  };
​
  const popMin = () => {
    const min = heap[0];
    const last = heap.pop();
    if (heap.length) {
      heap[0] = last;
      siftDown(0);