function findSolutions(words) {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  const groups = new Map();
​
  for (const word of words) {
    for (let i = 0; i < word.length; i++) {
      if (!vowels.has(word[i])) continue;
​
      const pattern = word.slice(0, i) + '*' + word.slice(i + 1);
​
      if (!groups.has(pattern)) groups.set(pattern, []);
      groups.get(pattern).push(word);
    }
  }
​
  const results = [];
  const seen = new Set();
​
  for (const [pattern, group] of groups) {
    if (group.length !== 5) continue;
​
    const pos = pattern.indexOf('*');
    const byVowel = new Map();
​
    for (const word of group) {
      byVowel.set(word[pos], word);
    }
​
    if (['a', 'e', 'i', 'o', 'u'].every(v => byVowel.has(v))) {
      const solution = Array.from(byVowel.values()).sort();
      const key = solution.join('|');
​
      if (!seen.has(key)) {
        seen.add(key);
        results.push(solution);
      }
    }
  }
​
  return results.sort((a, b) => {
    for (let i = 0; i < a.length; i++) {
      if (a[i] < b[i]) return -1;
      if (a[i] > b[i]) return 1;
    }
    return 0;
  });
}