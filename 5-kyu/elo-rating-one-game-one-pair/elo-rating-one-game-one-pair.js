function elo(experience, opponent, score, k) {
  const player = experience.length ? experience[experience.length - 1] : 1000;
​
  const expected = 1 / (1 + Math.pow(10, (opponent - player) / 400));
​
  const defaultK = (exp) => {
    if (exp.length < 30) return 25;
    if (Math.max(...exp, 0) >= 2400) return 10;
    return 15;
  };
​
  const kValue = (k || defaultK)(experience);
​
  return Math.round(player + kValue * (score - expected));
}