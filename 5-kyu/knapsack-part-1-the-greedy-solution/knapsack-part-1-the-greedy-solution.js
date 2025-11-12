var knapsack=function(capacity,items){
  let ratios = items.map((item, i) => [item[1] / item[0], i]);
  ratios.sort((a, b) => b[0] - a[0]);
  
  let result = new Array(items.length).fill(0);
  let remaining = capacity;
  
  for (let i = 0; i < ratios.length; i++) {
    let idx = ratios[i][1];
    let size = items[idx][0];
    let count = Math.floor(remaining / size);
    result[idx] = count;
    remaining -= count * size;
  }
  
  return result;
}