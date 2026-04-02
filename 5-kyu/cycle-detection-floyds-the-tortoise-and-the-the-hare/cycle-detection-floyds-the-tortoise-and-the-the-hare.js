floyd = function(f, x0){
  let tortoise = f(x0);
  let hare = f(f(x0));
​
  while (tortoise !== hare) {
    tortoise = f(tortoise);
    hare = f(f(hare));
  }
​
  let mu = 0;
  tortoise = x0;
​
  while (tortoise !== hare) {
    tortoise = f(tortoise);
    hare = f(hare);
    mu++;
  }
​
  let lam = 1;
  hare = f(tortoise);
​
  while (tortoise !== hare) {
    hare = f(hare);
    lam++;
  }
​
  return [mu, lam];
}