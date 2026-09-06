function maxPizza(cuts) {
  if (cuts < 0) {
    return -1;
  }
  
  if (cuts === 0) {
    return 1;
  }
  
  return cuts * (cuts + 1) / 2 + 1;
}