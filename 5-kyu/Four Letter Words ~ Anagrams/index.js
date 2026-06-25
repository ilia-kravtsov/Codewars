function anagrams(subjects, memories, players) {
  const sig = w => [...w].sort().join('');
  const teamOf = p => (p < 2 ? 0 : 1);

  const memSets = memories.map(m => new Set(m));
  const memMaps = memories.map(m => {
    const map = new Map();
    for (const w of m) {
      const s = sig(w);
      if (!map.has(s)) map.set(s, new Set());
      map.get(s).add(w);
    }
    return map;
  });

  const order = [
    [0, 2], [2, 1], [1, 3], [3, 0],
    [0, 3], [2, 0], [1, 2], [3, 1]
  ];

  let startIdx = order.findIndex(([a, b]) => a === players[0] && b === players[1]);

  let teamScore = [0, 0];

  for (let i = 0; i < subjects.length; i++) {
    const subject = subjects[i];
    const [first, second] = order[(startIdx + i) % 8];
    const s = sig(subject);

    const firstWords = memMaps[first].get(s) || new Set();
    const secondWords = memMaps[second].get(s) || new Set();

    let firstScore = memSets[first].has(subject) ? 1 : 0;
    for (const w of firstWords) {
      if (w !== subject) firstScore += 2;
    }

    let secondScore = memSets[second].has(subject) ? 1 : 0;
    for (const w of secondWords) {
      if (w !== subject && !firstWords.has(w)) secondScore += 3;
    }

    if (firstScore > secondScore) {
      teamScore[teamOf(first)]++;
    } else if (secondScore > firstScore) {
      teamScore[teamOf(second)]++;
    }
  }

  if (teamScore[0] > teamScore[1]) return 0;
  if (teamScore[1] > teamScore[0]) return 1;
  return -1;
}