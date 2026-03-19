function teknonymize(familyTree) {
  function elder(a, b) {
    return a.dateOfBirth <= b.dateOfBirth ? a : b;
  }
​
  function buildTeknonym(sex, distance, name) {
    const base = sex === 'm' ? 'father' : 'mother';
​
    if (distance === 1) return `${base} of ${name}`;
    if (distance === 2) return `grand${base} of ${name}`;
​
    return `${'great-'.repeat(distance - 2)}grand${base} of ${name}`;
  }
​
  function dfs(node) {
    let bestDistance = 0;
    let bestPerson = null;
​
    for (const child of node.children) {
      const childInfo = dfs(child);
​
      if (bestDistance < 1) {
        bestDistance = 1;
        bestPerson = child;
      } else if (bestDistance === 1) {
        bestPerson = elder(bestPerson, child);
      }
​
      if (childInfo.distance > 0) {
        const candidateDistance = childInfo.distance + 1;
        const candidatePerson = childInfo.person;