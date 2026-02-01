var ScoreCard = function () {
  this.scores = { home: 0, away: 0 };
  this.bases = [0, 0, 0];
  this.outs = 0;
  this.team = 'away';
};
​
ScoreCard.prototype.addEntry = function (entry) {
  if (entry === 'out') {
    this.outs++;
    if (this.outs === 3) {
      this.outs = 0;
      this.bases = [0, 0, 0];
      this.team = this.team === 'away' ? 'home' : 'away';
    }
    return;
  }
​
  const moves = {
    single: 1,
    double: 2,
    triple: 3,
    homerun: 4
  };
​
  const m = moves[entry];
​
  for (let i = 2; i >= 0; i--) {
    if (this.bases[i]) {
      const next = i + m;
      if (next >= 3) this.scores[this.team]++;
      else this.bases[next] = 1;
      this.bases[i] = 0;
    }
  }
​
  if (m === 4) {
    this.scores[this.team]++;
  } else {
    this.bases[m - 1] = 1;
  }
};
​
ScoreCard.prototype.getScore = function () {
  return `Home: ${this.scores.home} Away: ${this.scores.away}`;
};
​