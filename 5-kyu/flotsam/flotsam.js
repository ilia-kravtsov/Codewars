function solution(image) {
  const h = image.length;
  const w = image[0].length;
​
  let oceanLevel = 0;
  while (oceanLevel < h && image[oceanLevel][0] !== '~') oceanLevel++;
​
  const flooded = Array.from({ length: h }, () => Array(w).fill(false));
  const q = [];
​
  const canFlood = ch =>
    ch === ' ' || ch === '~' || ch === 'x' || ch === 'F' || ch === 'S' || ch === 'T';
​
  for (let r = 0; r < h; r++) {
    for (let c = 0; c < w; c++) {
      if (image[r][c] === '~') {
        flooded[r][c] = true;
        q.push([r, c]);
      }
    }
  }
​
  for (let i = 0; i < q.length; i++) {
    const [r, c] = q[i];
​
    for (const [dr, dc] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
      const nr = r + dr;
      const nc = c + dc;
​
      if (
        nr >= 0 &&
        nr < h &&
        nc >= 0 &&
        nc < w &&
        nr >= oceanLevel &&
        !flooded[nr][nc] &&
        canFlood(image[nr][nc])
      ) {