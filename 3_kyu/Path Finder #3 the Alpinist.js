/*
Task
You are at start location [0, 0] in mountain area of NxN and you can only move in one of the four cardinal directions (i.e. North, East, South, West). Return minimal number of climb rounds to target location [N-1, N-1]. Number of climb rounds between adjacent locations is defined as difference of location altitudes (ascending or descending).

Location altitude is defined as an integer number (0-9).
*/

function pathFinder(area) {
  const grid = area.split("\n").map((line) => line.split("").map(Number));
  const n = grid.length;
  const dist = Array.from({ length: n }, () => Array(n).fill(Infinity));
  dist[0][0] = 0;
  class PriorityQueue {
    constructor() {
      this.heap = [];
    }
    push(item) {
      this.heap.push(item);
      this._bubbleUp(this.heap.length - 1);
    }
    pop() {
      if (!this.heap.length) return;
      const top = this.heap[0];
      const end = this.heap.pop();
      if (this.heap.length) {
        this.heap[0] = end;
        this._bubbleDown(0);
      }
      return top;
    }
    _bubbleUp(idx) {
      while (idx > 0) {
        const parent = Math.floor((idx - 1) / 2);
        if (this.heap[idx].cost < this.heap[parent].cost) {
          [this.heap[idx], this.heap[parent]] = [
            this.heap[parent],
            this.heap[idx],
          ];
          idx = parent;
        } else break;
      }
    }
    _bubbleDown(idx) {
      const length = this.heap.length;
      while (true) {
        let left = 2 * idx + 1,
          right = 2 * idx + 2,
          smallest = idx;
        if (left < length && this.heap[left].cost < this.heap[smallest].cost) {
          smallest = left;
        }
        if (
          right < length &&
          this.heap[right].cost < this.heap[smallest].cost
        ) {
          smallest = right;
        }
        if (smallest === idx) break;
        [this.heap[idx], this.heap[smallest]] = [
          this.heap[smallest],
          this.heap[idx],
        ];
        idx = smallest;
      }
    }
  }
  const pq = new PriorityQueue();
  pq.push({ x: 0, y: 0, cost: 0 });
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  while (pq.heap.length) {
    const { x, y, cost } = pq.pop();
    if (x === n - 1 && y === n - 1) return cost;
    if (cost > dist[x][y]) continue;
    for (const [dx, dy] of directions) {
      const nx = x + dx,
        ny = y + dy;
      if (nx >= 0 && nx < n && ny >= 0 && ny < n) {
        const step = Math.abs(grid[nx][ny] - grid[x][y]);
        const newCost = cost + step;
        if (newCost < dist[nx][ny]) {
          dist[nx][ny] = newCost;
          pq.push({ x: nx, y: ny, cost: newCost });
        }
      }
    }
  }
  return -1;
}
