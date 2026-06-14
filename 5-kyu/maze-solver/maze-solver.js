function solveMaze(map) {
    const h = map.length;
    const w = map[0].length;
​
    const exits = [];
​
    for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
            if (
                map[y][x] === 0 &&
                (y === 0 || y === h - 1 || x === 0 || x === w - 1)
            ) {
                exits.push([y, x]);
            }
        }
    }
​
    const [start, end] = exits;
​
    const dirs = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1]
    ];
​
    const visited = Array.from(
        { length: h },
        () => Array(w).fill(false)
    );
​
    const parent = Array.from(
        { length: h },
        () => Array(w).fill(null)
    );
​
    const queue = [start];
    visited[start[0]][start[1]] = true;
​
    while (queue.length) {
        const [y, x] = queue.shift();
​
        if (y === end[0] && x === end[1]) {
            break;
        }
​
        for (const [dy, dx] of dirs) {
            const ny = y + dy;
            const nx = x + dx;
​
            if (
                ny >= 0 &&