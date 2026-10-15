function sequenceSum(begin, end, step) {
  if (begin === end) {
    return begin;
  }
  
  if ((begin < end && step < 0) || (begin > end && step > 0)) {
    return 0;
  }
  
  let n;
  if (step > 0) {
    n = Math.floor((end - begin) / step) + 1;
  } else {
    n = Math.floor((begin - end) / Math.abs(step)) + 1;
  }
  
  const last = begin + (n - 1) * step;
  
  return n * (begin + last) / 2;
}