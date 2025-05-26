/*
Given any number of arrays each sorted in ascending order, find the nth smallest number of all their elements.

All the arguments except the last will be arrays, the last argument is n.

nthSmallest([1,5], [2], [4,8,9], 4) // returns 5 because it's the 4th smallest value
Be mindful of performance.
*/

function nthSmallest(...args) {
  const n = args.pop();
  const minHeap = new MinHeap();

  args.flat().forEach((element) => minHeap.add(element));

  let nthSmallest;
  for (let i = 0; i < n; i++) {
    nthSmallest = minHeap.poll();
  }

  return nthSmallest;
}

class MinHeap {
  constructor() {
    this.heap = [];
  }

  add(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  poll() {
    const smallest = this.heap[0];
    const end = this.heap.pop();
    if (this.heap.length) {
      this.heap[0] = end;
      this.heapifyDown();
    }
    return smallest;
  }

  heapifyUp() {
    let index = this.heap.length - 1;
    while (this.hasParent(index) && this.parent(index) > this.heap[index]) {
      this.swap(index, this.parentIndex(index));
      index = this.parentIndex(index);
    }
  }

  heapifyDown() {
    let index = 0;
    while (this.hasLeftChild(index)) {
      let smallerChildIndex = this.leftChildIndex(index);
      if (this.hasRightChild(index) && this.rightChild(index) < this.leftChild(index)) {
        smallerChildIndex = this.rightChildIndex(index);
      }
      if (this.heap[index] < this.heap[smallerChildIndex]) {
        break;
      } else {
        this.swap(index, smallerChildIndex);
      }
      index = smallerChildIndex;
    }
  }

  swap(indexOne, indexTwo) {
    [this.heap[indexOne], this.heap[indexTwo]] = [this.heap[indexTwo], this.heap[indexOne]];
  }

  parentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2);
  }

  leftChildIndex(parentIndex) {
    return 2 * parentIndex + 1;
  }

  rightChildIndex(parentIndex) {
    return 2 * parentIndex + 2;
  }

  hasParent(childIndex) {
    return this.parentIndex(childIndex) >= 0;
  }

  hasLeftChild(parentIndex) {
    return this.leftChildIndex(parentIndex) < this.heap.length;
  }

  hasRightChild(parentIndex) {
    return this.rightChildIndex(parentIndex) < this.heap.length;
  }

  parent(childIndex) {
    return this.heap[this.parentIndex(childIndex)];
  }

  leftChild(parentIndex) {
    return this.heap[this.leftChildIndex(parentIndex)];
  }

  rightChild(parentIndex) {
    return this.heap[this.rightChildIndex(parentIndex)];
  }
}