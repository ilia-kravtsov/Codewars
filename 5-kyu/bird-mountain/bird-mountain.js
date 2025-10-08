var peakHeight = function(mountain) {
  const rows = mountain.length;
  const cols = Math.max(...mountain.map(r => r.length));
  let grid = Array.from({length: rows}, (_, i) => Array.from({length: cols}, (_, j) => mountain[i][j] === '^'));
  let height = 0;
  const anyTrue = g => g.some(row => row.some(v => v));
  const erode = g => {
    const next = Array.from({length: rows}, () => Array(cols).fill(false));
    for (let i=0;i<rows;i++){
      for (let j=0;j<cols;j++){
        if (!g[i][j]) continue;
        if (i>0 && g[i-1][j] && i<rows-1 && g[i+1][j] && j>0 && g[i][j-1] && j<cols-1 && g[i][j+1]) next[i][j]=true;
      }
    }
    return next;
  };
  while(anyTrue(grid)){
    grid = erode(grid);
    height++;
  }
  return height;
}