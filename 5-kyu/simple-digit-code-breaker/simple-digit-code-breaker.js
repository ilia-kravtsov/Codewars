let lows = [0,0,0], highs = [9,9,9], last = [0,0,0];
​
function tryCode(indications) {
  if (!indications) {
    last = [0,0,0];
    return last;
  }
  
  for (let i=0;i<3;i++) {
    if (indications[i] === 1) lows[i] = last[i] + 1;
    if (indications[i] === -1) highs[i] = last[i] - 1;
  }
  
  last = lows.map((l,i)=>Math.floor((l+highs[i])/2));
  
  return last;
}
​