function longestMotif(seq) {
  const n = seq.length;

  for (let len = Math.floor(n / 2); len >= 1; len--) {
    const motifs = new Map();

    for (let i = 0; i <= n - len; i++) {
      const motif = seq.slice(i, i + len);

      if (!motifs.has(motif)) {
        motifs.set(motif, { first: i, valid: false });
      } else {
        const info = motifs.get(motif);

        if (i - info.first >= len) {
          info.valid = true;
        }
      }
    }

    const result = [...motifs.entries()]
      .filter(([, info]) => info.valid)
      .sort((a, b) => a[1].first - b[1].first)
      .map(([motif]) => motif);

    if (result.length) {
      return result;
    }
  }

  return [];
}