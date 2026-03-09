function costFunctionJ(trainingSet, theta1, theta2) {
  const m = trainingSet.length;
  const sum = trainingSet.reduce((acc, [x, y]) => {
    const h = theta1 + theta2 * x;
    return acc + (h - y) ** 2;
  }, 0);
​
  return Math.round((sum / (2 * m)) * 1000) / 1000;
}