function regression_line(x, y) {
  const n = x.length;
  
  let sumX = 0;
  let sumY = 0;
  let sumXY = 0;
  let sumX2 = 0;
  
  for (let i = 0; i < n; i++) {
    sumX += x[i];
    sumY += y[i];
    sumXY += x[i] * y[i];
    sumX2 += x[i] * x[i];
  }
  
  const denominator = n * sumX2 - sumX * sumX;
  
  const b = (n * sumXY - sumX * sumY) / denominator;
  
  const a = (sumX2 * sumY - sumX * sumXY) / denominator;
  
  const roundedA = Math.round(a * 10000) / 10000;
  const roundedB = Math.round(b * 10000) / 10000;
  
  return [roundedA, roundedB];
}