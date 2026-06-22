function bestScore(teamA, teamB) {
    const base = 2 * (teamA.length - teamB.length);

    const freq = new Map();

    for (const d of teamA) {
        freq.set(d, (freq.get(d) || 0) + 1);
    }

    for (const d of teamB) {
        freq.set(d, (freq.get(d) || 0) - 1);
    }

    const distances = [...freq.keys()].sort((a, b) => b - a);

    let current = 0;
    let best = 0;

    for (const d of distances) {
        current += freq.get(d);
        if (current > best) best = current;
    }

    return base + best;
}