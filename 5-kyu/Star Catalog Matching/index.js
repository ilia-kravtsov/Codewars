function StarTracker(catalog) {
    this.catalog = catalog;
}

StarTracker.prototype.matches = function(observations) {
    const catalogDistances = [];
    for (let i = 0; i < this.catalog.length; i++) {
        catalogDistances[i] = [];
        for (let j = 0; j < this.catalog.length; j++) {
            if (i === j) {
                catalogDistances[i][j] = 0;
            } else {
                const dot = this.catalog[i][0] * this.catalog[j][0] +
                    this.catalog[i][1] * this.catalog[j][1] +
                    this.catalog[i][2] * this.catalog[j][2];
                catalogDistances[i][j] = dot;
            }
        }
    }

    const obsDistances = [];
    for (let i = 0; i < observations.length; i++) {
        obsDistances[i] = [];
        for (let j = 0; j < observations.length; j++) {
            if (i === j) {
                obsDistances[i][j] = 0;
            } else {
                const dot = observations[i][0] * observations[j][0] +
                    observations[i][1] * observations[j][1] +
                    observations[i][2] * observations[j][2];
                obsDistances[i][j] = dot;
            }
        }
    }

    const n = observations.length;
    const obsSignatures = [];
    for (let i = 0; i < n; i++) {
        obsSignatures[i] = obsDistances[i].slice();
        obsSignatures[i].sort((a, b) => a - b);
    }

    const catalogSignatures = [];
    for (let i = 0; i < n; i++) {
        catalogSignatures[i] = catalogDistances[i].slice();
        catalogSignatures[i].sort((a, b) => a - b);
    }

    const usedObs = new Array(n).fill(false);
    const result = [];

    for (let c = 0; c < n; c++) {
        let bestMatch = -1;
        let bestScore = Infinity;

        for (let o = 0; o < n; o++) {
            if (usedObs[o]) continue;

            let score = 0;
            for (let k = 0; k < n; k++) {
                score += Math.abs(catalogSignatures[c][k] - obsSignatures[o][k]);
            }

            if (score < bestScore) {
                bestScore = score;
                bestMatch = o;
            }
        }

        if (bestMatch !== -1) {
            usedObs[bestMatch] = true;
            result.push([this.catalog[c], observations[bestMatch]]);
        }
    }

    return result;
};