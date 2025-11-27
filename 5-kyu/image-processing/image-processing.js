function processImage(imageData, height, width, weights) {
  const n = weights.length;
  const r = Math.floor(n / 2);
  const out = new Array(imageData.length).fill(0);
​
  const idx = (y, x, c) => (y * width + x) * 3 + c;
​
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      for (let c = 0; c < 3; c++) {
        let sum = 0;
​
        for (let wy = 0; wy < n; wy++) {
          for (let wx = 0; wx < n; wx++) {
            let iy = y + wy - r;
            let ix = x + wx - r;
​
            if (iy < 0) iy = 0;
            if (ix < 0) ix = 0;
            if (iy >= height) iy = height - 1;
            if (ix >= width) ix = width - 1;
​
            sum += imageData[idx(iy, ix, c)] * weights[wy][wx];
          }
        }
​
        sum = Math.round(sum);
        if (sum < 0) sum = 0;
        if (sum > 255) sum = 255;
​
        out[idx(y, x, c)] = sum;
      }
    }
  }
​
  return out;
}
​