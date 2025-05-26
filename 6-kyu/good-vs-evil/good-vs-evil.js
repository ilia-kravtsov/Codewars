function goodVsEvil(good, evil) {
  const goodWorth = [1, 2, 3, 3, 4, 10];
  const evilWorth = [1, 2, 2, 2, 3, 5, 10];
​
  const goodCounts = good.split(' ').map(Number);
  const evilCounts = evil.split(' ').map(Number);
​
  let goodSum = 0;
  for (let i = 0; i < goodWorth.length; i++) {
    goodSum += goodCounts[i] * goodWorth[i];
  }
​
  let evilSum = 0;
  for (let i = 0; i < evilWorth.length; i++) {
    evilSum += evilCounts[i] * evilWorth[i];
  }
​
  if (goodSum > evilSum) {
    return "Battle Result: Good triumphs over Evil";
  } else if (evilSum > goodSum) {
    return "Battle Result: Evil eradicates all trace of Good";
  } else {
    return "Battle Result: No victor on this battle field";
  }
}
​