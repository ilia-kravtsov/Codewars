function tankvol(h, d, vt) {
  const r = d / 2;
  const theta = Math.acos((r - h) / r);
  const segmentArea = r * r * theta - (r - h) * Math.sqrt(2 * r * h - h * h);
  const fullArea = Math.PI * r * r;
  const length = vt / fullArea;
  const volume = segmentArea * length;
  return Math.floor(volume);
}