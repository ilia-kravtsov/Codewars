var normal = function(mu, sigma) {
  let u1 = 0;
  let u2 = 0;
​
  while (u1 === 0) u1 = Math.random();
  while (u2 === 0) u2 = Math.random();
​
  const z0 = Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);
​
  return mu + z0 * sigma;
};