function fibDigits(n) {
  
  function mul(a, b) {
    return [
      [a[0][0]*b[0][0]+a[0][1]*b[1][0], a[0][0]*b[0][1]+a[0][1]*b[1][1]],
      [a[1][0]*b[0][0]+a[1][1]*b[1][0], a[1][0]*b[0][1]+a[1][1]*b[1][1]]
    ];
  }
  
  function pow(m, p) {
    if (p === 1) return m;
    if (p % 2 === 0) {
      const half = pow(m, p/2);
      return mul(half, half);
    } else {
      return mul(m, pow(m, p-1));
    }
  }
  
  if (n === 0) return [[1,0]];
  if (n === 1) return [[1,1]];
  
  const M = [[1n,1n],[1n,0n]];
  
  function mulBig(a,b){
    return [
      [a[0][0]*b[0][0]+a[0][1]*b[1][0], a[0][0]*b[0][1]+a[0][1]*b[1][1]],
      [a[1][0]*b[0][0]+a[1][1]*b[1][0], a[1][0]*b[0][1]+a[1][1]*b[1][1]]
    ];
  }
  
  function powBig(m,p){
    if(p===1n)return m;
    if(p%2n===0n){const half=powBig(m,p/2n);return mulBig(half,half);}