function pacMan(N, PM, enemies) {
  const [pr, pc] = PM;
​
  let top = -1;
  let bottom = N;
  let left = -1;
  let right = N;
​
  for (const [r, c] of enemies) {
    if (r < pr && r > top) top = r;
    if (r > pr && r < bottom) bottom = r;
    if (c < pc && c > left) left = c;
    if (c > pc && c < right) right = c;
  }
​
  const height = bottom - top - 1;
  const width = right - left - 1;
​
  return height * width - 1;
}