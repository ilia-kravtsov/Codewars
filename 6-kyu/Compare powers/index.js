function comparePowers(n1, n2) {
  const [base1, exp1] = n1;
  const [base2, exp2] = n2;
  
  const log1 = exp1 * Math.log(base1);
  const log2 = exp2 * Math.log(base2);
  
  const epsilon = 1e-10;
  
  if (Math.abs(log1 - log2) < epsilon) {
    return 0;  
  } else if (log1 > log2) {
    return -1; 
  } else {
    return 1;  
  }
}