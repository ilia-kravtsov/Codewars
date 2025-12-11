function table(results) {
  const teams = {};
  function ensure(team) {
    if (!teams[team]) {
      teams[team] = {
        name: team,
        played: 0,
        won: 0,
        tie: 0,
        lost: 0,
        goalsFor: 0,
        goalsAgainst: 0,
        points: 0
      };
    }
    
    return teams[team];
  }
  
​
  for (const line of results) {
    const m = line.match(/^(\d+|-):(\d+|-) (.+) - (.+)$/);
    if (!m) continue;
    const [, a, b, team1, team2] = m;
    const gf = a === '-' ? null : +a;
    const ga = b === '-' ? null : +b;
​
    const t1 = ensure(team1);
    const t2 = ensure(team2);
​
    if (gf === null || ga === null) continue;
​
    t1.played++; t2.played++;
    t1.goalsFor += gf; t1.goalsAgainst += ga;
    t2.goalsFor += ga; t2.goalsAgainst += gf;
​
    if (gf > ga) { t1.won++; t2.lost++; t1.points += 3; }
    else if (ga > gf) { t2.won++; t1.lost++; t2.points += 3; }
    else { t1.tie++; t2.tie++; t1.points++; t2.points++; }
  }
​
  const list = Object.values(teams);
​
  list.sort((a, b) => {