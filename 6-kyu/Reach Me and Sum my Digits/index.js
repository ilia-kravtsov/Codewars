function sumDigNthTerm(initVal, patternL, nthTerm) {
    const cycleSum = patternL.reduce((sum, x) => sum + x, 0);

    const steps = nthTerm - 1;
    const fullCycles = Math.floor(steps / patternL.length);
    const remainder = steps % patternL.length;

    let value = initVal + fullCycles * cycleSum;

    for (let i = 0; i < remainder; i++) {
        value += patternL[i];
    }

    return String(value)
        .split("")
        .reduce((sum, digit) => sum + Number(digit), 0);
}