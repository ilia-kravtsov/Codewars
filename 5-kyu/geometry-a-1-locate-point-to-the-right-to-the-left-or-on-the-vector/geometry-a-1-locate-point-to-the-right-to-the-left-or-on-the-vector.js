function pointVsVector(point, vector) {
  const [px, py] = point
  const [[x1, y1], [x2, y2]] = vector
  const z = (x2 - x1) * (py - y1) - (y2 - y1) * (px - x1)
  return z === 0 ? 0 : z > 0 ? -1 : 1
}
​