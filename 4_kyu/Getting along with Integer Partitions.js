function part(n) {
  function getPartitions(n, max) {
    if (n === 0) return [[]];
    let result = [];
    for (let i = Math.min(n, max); i >= 1; i--) {
      for (let sub of getPartitions(n - i, i)) {
        result.push([i, ...sub]);
      }
    }
    return result;
  }

  let partitions = getPartitions(n, n);
  let products = [
    ...new Set(partitions.map((p) => p.reduce((a, b) => a * b, 1))),
  ].sort((a, b) => a - b);

  let range = products[products.length - 1] - products[0];
  let average = (products.reduce((a, b) => a + b, 0) / products.length).toFixed(
    2
  );
  let median;
  let mid = Math.floor(products.length / 2);
  if (products.length % 2 === 0) {
    median = ((products[mid - 1] + products[mid]) / 2).toFixed(2);
  } else {
    median = products[mid].toFixed(2);
  }

  return `Range: ${range} Average: ${average} Median: ${median}`;
}
